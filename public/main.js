require('dotenv').config();

const url = require('url');
const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const { Client, Intents, Permissions } = require('discord.js');
const net = require('net');
const exec = require('child_process').exec;
const port = process.env.PORT ? (process.env.PORT - 100) : 3000;

console.log('React port is:', port);
process.env.START_URL &&= process.env.START_URL.replace(/:\d+/, ':' + port);

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) { // eslint-disable-line global-require
	app.quit();
}

const bot = new Client({ intents: [Intents.ALL] });
// const bot = new Client({ intents: [Intents.FLAGS.GUILD_PRESENCES, Intents.FLAGS.GUILD_MEMBERS] });
console.log('Starting DiscordJS...');
bot.login(process.env.TOKEN);

const guildID = '664967447534764033';
const startUrl = process.env.START_URL || url.format({
	pathname: path.join(__dirname, '/../build/index.html'),
	protocol: 'file:',
	slashes: true
});

let startedElectron, getData, mainWindow;

const createWindow = () => {
	// Create the browser window.
	mainWindow = new BrowserWindow({
		// height: 475, // Debug
		width: 1523,
		height: 825,
		minWidth: 940,
		minHeight: 475,
		darkTheme: true,
		// alwaysOnTop: true, // Debug
		x: 1080,
		y: 1920,
		title: 'BotCord',
		autoHideMenuBar: true,
		icon: path.join(__dirname, 'images/icon.co'),
		// frame: false,
		// backgroundColor: '#202225',
		webPreferences: {
			nodeIntegration: true,
			contextIsolation: false,
			// enableRemoteModule: true,
			preload: path.join(__dirname, 'preload.js'),
		},
	});

	// Display a loading page until the Discord client is loaded.
	mainWindow.loadFile(path.join(__dirname, 'loading.html'));

	bot.on('ready', () => {
		console.log(`DiscordJS (${bot.user.username}) is loaded`);

		getData = async () => {
			let allChannels = [], guild = bot.guilds.cache.get(guildID),
				channels = guild.channels.cache,
				addCat = (category, channel) => {
					category['channels'] = channel ? [channel] : [];
					allChannels.push(category);
					// console.log(category?.children)
				}

			channels.forEach(c => {
				if (!c.deleted) {
					if (!c.parentID || c.type === 'category' && !c.deleted) addCat(c);
					else {
						let channelFilter = chnl => chnl.id === c.parentID;
						if (allChannels.some(channelFilter)) allChannels.filter(channelFilter)[0].channels.push(c);
						else addCat(c.parent, c);
					}
				}
			});

			return { guild, channels, allChannels, guilds: bot.guilds.cache, bot: { user: bot.user, presence: bot.presence } };
		}

		const client = new net.Socket();
		const tryConnecting = setInterval(() =>
			client.connect({ port }, () => {
				client.end();
				if (!startedElectron) {
					console.log('Starting page.');
					startedElectron = true;
					// exec('npm run electron');
					clearInterval(tryConnecting);
					mainWindow.loadURL(startUrl);
					mainWindow.webContents.openDevTools();
				}
			}).on('error', _ => null), 1000);
	});
};

const channelMap = (channel, guild) => {
	return {
		...channel,
		guild: null,
		guildID: channel.guild.id,
		messages: null,
		visible: channel.permissionsFor(bot.user).has(Permissions.FLAGS.VIEW_CHANNEL),
		// Can @everyone role view channel
		limited: channel.permissionsFor(channel.guild.roles.cache.find(r => r.name === '@everyone'))?.has(Permissions.FLAGS.VIEW_CHANNEL),
		permissionOverwrites: [...channel.permissionOverwrites.array()],
	}
};

const guildMap = guild => {
	return {
		...guild,
		splash: guild.splashURL?.() || guild.splash || null,
		banner: guild.bannerURL?.() || guild.banner || null,
		rulesChannelID: guild.rulesChannelID,
		iconURL: guild.iconURL?.() || guild.icon || null,
		presences: [...guild.presences.cache],
		owner: guild.owner.toJSON(),
		channels: guild.channels.cache.map(channelMap),
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

const displayMember = m => {
	let assets = m.user.presence.activities[0]?.assets;
	return {
		username: m.displayName || m.user.username,
		id: m.user.id,
		avatarURL: m.user.avatarURL?.() || m.user.displayAvatarURL?.() || null,
		color: m.displayHexColor,
		bot: m.user.bot,
		discriminator: m.user.discriminator,
		verified: m.user.flags?.has('VERIFIED_BOT'),
		createdAt: m.user.createdAt || m.user.createdTimestamp,
		presence: {
			...m.user.presence.activities[0],
			assets: {
				largText: assets?.largeText,
				smallText: assets?.smallText,
				largeImage: assets?.largeImageURL?.() || assets?.largeImage,
				smallImage: assets?.smallImageURL?.() || assets?.smallImage
			}
		},
		status: m.user.presence.status,
		mobile: m.user.presence.clientStatus?.mobile, // TODO Fix
	}
}

bot.on("guildCreate", async guild => mainWindow.webContents.send('guildJoin', JSON.stringify(guildMap(guild))));
bot.on("guildDelete", async guild => mainWindow.webContents.send('guildDelete', guild.id));

app.on('ready', createWindow);
app.on('window-all-closed', () => {
	if (process.platform !== 'darwin')
		app.quit();
});

app.on('activate', () => {
	// On OS X it's common to re-create a window in the app when the
	// dock icon is clicked and there are no other windows open.
	if (BrowserWindow.getAllWindows().length === 0)
		createWindow();
});

ipcMain.on('getAllData', async (event, arg) => {
	let data = await getData(), jsonData = JSON.stringify(data);
	event.sender.send('allData', jsonData);
	// mainWindow.webContents.send('recv', data);
});

ipcMain.on('getGuilds', async (event, args) => {
	let guilds = JSON.stringify(await bot.guilds.cache.map(guildMap));
	event.sender.send('guilds', guilds);
});

ipcMain.on('getGuild', async (event, guildID) => {
	let guild = bot.guilds.cache.get(guildID);
	if (!guild) return event.sender.send('err', `Server with ID '${guildID}' not found`);

	event.sender.send('guild', JSON.stringify(guildMap(guild)));
});

ipcMain.on('getChannel', async (event, args) => {
	try {
		let guild = bot.guilds.cache.get(args.guildID);
		if (!guild) return event.sender.send('err', `Server with ID '${args.guildID}' not found`);

		let channel = guild.channels.cache.get(args.channelID);
		if (!channel) return event.sender.send('err', `Channel with ID '${args.channelID}' not found`);

		if (args.entering && channel.type === 'voice')
			return event.sender.send('joinVC', JSON.stringify(channelMap(channel)));
		event.sender.send('channel', JSON.stringify(channelMap(channel)));
	} catch (err) {
		console.error(err);
		event.sender.send('err', err);
	}
});

ipcMain.on('getDisplayRoles', async (event, guildID) => {
	let guild = bot.guilds.cache.get(guildID),
		members = guild.members.cache,
		hoistIDs = members.filter(m => m.presence.status !== 'offline' && m.roles.cache.some(r => r.hoist)).map(m => m.id),
		hoist = guild.roles.cache.filter(r => r.hoist).sort((x, y) => y.rawPosition - x.rawPosition).array().map(r => {
			return {
				// hoist: r.hoist,
				name: r.name,
				position: r.rawPosition,
				members: r.members.array().filter(m => m.presence.status !== 'offline').map(m => displayMember(m))
			}
		});

	let obj = {
		hoist,
		online: members.filter(m => m.presence.status !== 'offline' && !hoistIDs.includes(m.id))
			.map(m => displayMember(m)).sort((x, y) => x.username.localeCompare(y.username)),
		offline: members.filter(m => m.presence.status === 'offline' && !hoistIDs.includes(m.id))
			.map(m => displayMember(m)).sort((x, y) => x.username.localeCompare(y.username)),
	}
	// console.log('Sent: ', obj);
	event.sender.send('displayRoles', JSON.stringify(obj));
});

ipcMain.on('getClient', async (event, args) => {
	event.sender.send('client', JSON.stringify({
		...bot.user.toJSON(),
		presence: bot.presence,
		guilds: bot.guilds.cache,
		avatarURL: bot.user.avatarURL?.() || bot.user.avatar || bot.user.defaultAvatarURL,
	}));
});

const messageAuthor = author => {
	return {
		id: author.id,
		username: author.displayName || author.username,
		avatarURL: author.avatarURL?.() || author.displayAvatarURL?.() || null,
		color: author.displayHexColor,
		bot: author.bot,
		discriminator: author.discriminator,
		verified: author.flags?.has('VERIFIED_BOT'),
		tag: author.tag
	}
}

ipcMain.on('getChannelMessages', async (event, args) => {
	try {
		console.log('Getting messages for channel: ', args); // Debug
		let channel = bot.guilds.cache.get(args.guildID).channels.cache.get(args.channelID);
		if (channel.type === 'voice') return;

		objs = { limit: args.limit || 100 };

		if (args.before) objs.before = args.before;
		if (args.after) objs.after = args.after;
		if (args.around) objs.around = args.around;

		if (!channel) return console.log('Channel not found');

		channel.messages.fetch({ limit: 100, }).then(msgs => {
			let messages = msgs.array().map(m => {
				return {
					id: m.id,
					content: m.content,
					author: m.author,
					createdAt: m.createdAt,
					editedAt: m.editedAt,
					reactions: m.reactions,
					system: m.system,
					webhookID: m.webhookID,
					reference: m.reference,
					url: m.url,
					pinned: m.pinned,
					tts: m.tts,
					type: m.type,
					spoiler: m.spoiler,
					mentions: m.mentions,
					embeds: m.embeds,
					attachments: m.attachments,
					author: messageAuthor(m.author),
				}
			}).reverse();

			// console.log('Messages: ', messages);
			event.sender.send('channelMessages', JSON.stringify(messages));
		});
	} catch (err) {
		console.error(err);
		event.sender.send('err', err);
	}
});
