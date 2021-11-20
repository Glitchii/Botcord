const guildJson = guild => {
    return {
        ...guild,
        splash: guild.splashURL?.() || guild.splash,
        banner: guild.bannerURL?.() || guild.banner,
        rulesChannelID: guild.rulesChannelID,
        iconURL: guild.iconURL?.() || guild.icon,
        presences: [...guild.presences.cache],
        owner: guild.owner.toJSON(),
        channels: [
            ...guild.channels.cache.map(channel => {
                return {
                    ...channel,
                    permissionOverwrites: [...channel.permissionOverwrites.array()],
                }
            })

        ],
        roles: [...guild.roles.cache],
        emojis: [...guild.emojis.cache],
        members: [...guild.members.cache.map(member => {
            return {
                ...member,
                roles: [...member.roles.cache],
                presence: member.presence,
                game: member.user.presence.game,
                roles: [...member.roles.cache],
                avatar: member.user.avatarURL()
            }
        })],
    }
};

module.exports = {
    guildJson
};