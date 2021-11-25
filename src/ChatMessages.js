import React from 'react';
import {
    DiscordActionRow,
    DiscordAttachment,
    DiscordAttachments,
    DiscordButton,
    DiscordCommand,
    DiscordEmbed,
    DiscordEmbedField,
    DiscordEmbedFields,
    DiscordInvite,
    DiscordMention,
    DiscordMessage,
    DiscordMessages,
    DiscordReaction,
    DiscordReactions,
    DiscordReply,
    DiscordSystemMessage,
    DiscordTenorVideo,
    DiscordThread,
    DiscordThreadMessage
} from "@skyra/discord-components-react/dist/index.js";

function Embed({ embed }) {
    return <DiscordEmbed slot="embeds" authorImage={embed.author?.avatarURL} authorName={embed.author?.name} authorUrl={embed.author?.url} color={embed.color} embedTitle={embed.title} footerImage={embed.footer?.icon_url} image={embed.image?.url} thumbnail={embed.thumbnail?.url} timestamp={embed.timestamp} url={embed.url}>
        {embed.description}
        <DiscordEmbedFields slot="fields">
            {embed.fields.map((field, i) => <DiscordEmbedField key={i} name={field.name} value={field.value} inline={field.inline} />)}
        </DiscordEmbedFields>
        <span slot="footer">{embed.footer?.text}</span>
    </DiscordEmbed>
}

export default function ChatMessages({ selectedChannelMessages, setSelectedChannelMessages }) {
    return <DiscordMessages>
        {selectedChannelMessages && selectedChannelMessages.map((msg, index) => {
            return <DiscordMessage author={msg.author.username} avatar={msg.author.avatarURL} roleColor={msg.color || 'inherit'} bot={msg.author.bot} verified={msg.verified} timestamp={msg.createdAt} key={index}>
                <span className="msgContent" data-id={msg.id} data-aid={msg.author.id}>{msg.content}</span>
                <div>{msg.embeds?.map((embed, index) => <Embed embed={embed} key={index} />)}</div>
                {msg.attachments?.map((attachment, index) => <DiscordAttachment key={index} url={attachment.url} height={attachment.height} width={attachment.width} />)}
            </DiscordMessage>

        })}
    </DiscordMessages>
}
