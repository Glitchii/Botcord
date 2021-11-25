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
    return (
        <div>
            <DiscordEmbed slot="embeds" authorImage={embed.author?.avatarURL} authorName={embed.author?.name} authorUrl={embed.author?.url} color={embed.color} embedTitle={embed.title} footerImage={embed.footer?.icon_url} image={embed.image?.url} thumbnail={embed.thumbnail?.url} timestamp={embed.timestamp} url={embed.url}>
                {embed.description}
                <DiscordEmbedFields slot="fields">
                    {embed.fields.map((field, i) => <DiscordEmbedField key={i} name={field.name} value={field.value} inline={field.inline} />)}
                </DiscordEmbedFields>
                <span slot="footer">{embed.footer?.text}</span>
            </DiscordEmbed>
        </div>
    )
}

export default function ChatMessages({ selectedChannelMessages, setSelectedChannelMessages }) {
    console.log('Lol -> ', selectedChannelMessages)
    return <span>
        <DiscordMessages>
            {selectedChannelMessages && selectedChannelMessages.map((msg, index) => {
                return <DiscordMessage author={msg.author.username} avatar={msg.author.avatarURL} roleColor={msg.color || 'inherit'} bot={msg.author.bot} verified={msg.verified} timestamp={msg.createdAt} key={index}>
                    <span className="msgContent" data-id={msg.id} data-aid={msg.author.id}>{msg.content}</span>
                    <div>{msg.embeds?.map((embed, index) => <Embed embed={embed} key={index} />)}</div>
                    {msg.attachments?.map((attachment, index) => <DiscordAttachment key={index} url={attachment.url} height={attachment.height} width={attachment.width} />)}
                </DiscordMessage>

            })}
        </DiscordMessages>
        {/* {selectedChannelMessages && selectedChannelMessages.map((message, index) => {
            return <div key={index}>
                <span>{message.author.username}</span>
                <span>{message.content}</span>
            </div>
        })} */}

        {/* <div className="message cozyMessage groupStart wrapper-2a6GCs cozy-3raOZG zalgo-jN1Ica" tabIndex={-1}>
            <div className="contents-2mQqc9" >
                <img src="https://cdn.discordapp.com/avatars/642791754160013312/73b507896ea2ae338d28f28076582bbe.webp?size=128" className="avatar-1BDn8e clickable-1bVtEA" alt=" " />
                <h2 className="message-header">
                    <span className="headerText">
                        <span className="username desaturateUserColors clickable-1bVtEA" tabIndex={0} style={{ color: 'rgb(52, 152, 219)' }}>Λcє</span></span><span className="timestamp-3ZCmNB timestampInline-yHQ6fX"><time title="Today at 16:04" dateTime="2021-09-05T15:04:28.023Z"><i className="separator-2nZzUB"> — </i>Today at 16:04</time></span>
                </h2>
                <div className="markup-2BOw-j messageContent">
                    Lorem</div>
            </div>
            <div className="container-1ov-mD" />
        </div>
        <div className="message cozyMessage wrapper-2a6GCs cozy-3raOZG zalgo-jN1Ica" tabIndex={-1}>
            <div className="contents-2mQqc9" >
                <span className="latin12CompactTimeStamp-38a8OU timestamp-3ZCmNB timestampVisibleOnHover-2bQeI4 alt-1uNpEt"><time title="16:06" dateTime="2021-09-05T15:06:17.430Z"><i className="separator-2nZzUB">[</i>16:06<i className="separator-2nZzUB">]
                </i></time></span>
                <div className="markup-2BOw-j messageContent">
                    ...send hmm...</div>
            </div>
            <div className="container-1ov-mD">
                <div className="messageAttachment-1aDidq">
                    <a className="anchor-3Z-8Bb anchorUnderlineOnHover-2ESHQB imageWrapper-2p5ogY imageZoom-1n-ADA clickable-3Ya1ho embedWrapper-lXpS3L" tabIndex={0} href="https://cdn.discordapp.com/attachments/884091603302612992/884092076185235466/763952821749678120.png" rel="noreferrer noopener" target="_blank" style={{ width: '128px', height: '121px' }}><img alt="" src="https://media.discordapp.net/attachments/884091603302612992/884092076185235466/763952821749678120.png" style={{ width: '128px', height: '121px' }} /></a>
                    <div className="removeAttachmentButton-2qVPxg" data-title="Remove message attachment" tabIndex={0}>
                        <svg width={16} height={16} viewBox="0 0 24 24">
                            <path fill="currentColor" d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z">
                            </path>
                        </svg>
                    </div>
                </div>
            </div>
            <div className="buttonContainer-DHceWr">
                <div className="buttons-cl5qTG container-3npvBV" data-title="Message actions">
                    <div className="wrapper-2aW0bm">
                        <div className="button-1ZiXG9" data-title="Add reaction" tabIndex={0}>
                            <svg className="icon-3Gkjwa" width={24} height={24} viewBox="0 0 24 24">
                                <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M12.2512 2.00309C12.1677 2.00104 12.084 2 12 2C6.477 2 2 6.477 2 12C2 17.522 6.477 22 12 22C17.523 22 22 17.522 22 12C22 11.916 21.999 11.8323 21.9969 11.7488C21.3586 11.9128 20.6895 12 20 12C15.5817 12 12 8.41828 12 4C12 3.31052 12.0872 2.6414 12.2512 2.00309ZM10 8C10 6.896 9.104 6 8 6C6.896 6 6 6.896 6 8C6 9.105 6.896 10 8 10C9.104 10 10 9.105 10 8ZM12 19C15.14 19 18 16.617 18 14V13H6V14C6 16.617 8.86 19 12 19Z">
                                </path>
                                <path d="M21 3V0H19V3H16V5H19V8H21V5H24V3H21Z" fill="currentColor" />
                            </svg>
                        </div>
                        <div className="button-1ZiXG9" data-title="Edit" tabIndex={0}>
                            <svg className="icon-3Gkjwa" width={16} height={16} viewBox="0 0 24 24">
                                <path fillRule="evenodd" clipRule="evenodd" d="M19.2929 9.8299L19.9409 9.18278C21.353 7.77064 21.353 5.47197 19.9409 4.05892C18.5287 2.64678 16.2292 2.64678 14.817 4.05892L14.1699 4.70694L19.2929 9.8299ZM12.8962 5.97688L5.18469 13.6906L10.3085 18.813L18.0201 11.0992L12.8962 5.97688ZM4.11851 20.9704L8.75906 19.8112L4.18692 15.239L3.02678 19.8796C2.95028 20.1856 3.04028 20.5105 3.26349 20.7337C3.48669 20.9569 3.8116 21.046 4.11851 20.9704Z" fill="currentColor" />
                            </svg>
                        </div>
                        <div className="button-1ZiXG9" data-title="Create thread" tabIndex={0}>
                            <svg className="icon-3Gkjwa" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                <path fill="currentColor" d="M5.43309 21C5.35842 21 5.30189 20.9325 5.31494 20.859L5.99991 17H2.14274C2.06819 17 2.01168 16.9327 2.02453 16.8593L2.33253 15.0993C2.34258 15.0419 2.39244 15 2.45074 15H6.34991L7.40991 9H3.55274C3.47819 9 3.42168 8.93274 3.43453 8.85931L3.74253 7.09931C3.75258 7.04189 3.80244 7 3.86074 7H7.75991L8.45234 3.09903C8.46251 3.04174 8.51231 3 8.57049 3H10.3267C10.4014 3 10.4579 3.06746 10.4449 3.14097L9.75991 7H15.7599L16.4523 3.09903C16.4625 3.04174 16.5123 3 16.5705 3H18.3267C18.4014 3 18.4579 3.06746 18.4449 3.14097L17.7599 7H21.6171C21.6916 7 21.7481 7.06725 21.7353 7.14069L21.4273 8.90069C21.4172 8.95811 21.3674 9 21.3091 9H17.4099L17.0495 11.04H15.05L15.4104 9H9.41035L8.35035 15H10.5599V17H7.99991L7.30749 20.901C7.29732 20.9583 7.24752 21 7.18934 21H5.43309Z">
                                </path>
                                <path fill="currentColor" d="M13.4399 12.96C12.9097 12.96 12.4799 13.3898 12.4799 13.92V20.2213C12.4799 20.7515 12.9097 21.1813 13.4399 21.1813H14.3999C14.5325 21.1813 14.6399 21.2887 14.6399 21.4213V23.4597C14.6399 23.6677 14.8865 23.7773 15.0408 23.6378L17.4858 21.4289C17.6622 21.2695 17.8916 21.1813 18.1294 21.1813H22.5599C23.0901 21.1813 23.5199 20.7515 23.5199 20.2213V13.92C23.5199 13.3898 23.0901 12.96 22.5599 12.96H13.4399Z">
                                </path>
                            </svg>
                        </div>
                        <div className="button-1ZiXG9" data-title="More" tabIndex={0}>
                            <svg className="icon-3Gkjwa" width={24} height={24} viewBox="0 0 24 24">
                                <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M7 12.001C7 10.8964 6.10457 10.001 5 10.001C3.89543 10.001 3 10.8964 3 12.001C3 13.1055 3.89543 14.001 5 14.001C6.10457 14.001 7 13.1055 7 12.001ZM14 12.001C14 10.8964 13.1046 10.001 12 10.001C10.8954 10.001 10 10.8964 10 12.001C10 13.1055 10.8954 14.001 12 14.001C13.1046 14.001 14 13.1055 14 12.001ZM19 10.001C20.1046 10.001 21 10.8964 21 12.001C21 13.1055 20.1046 14.001 19 14.001C17.8954 14.001 17 13.1055 17 12.001C17 10.8964 17.8954 10.001 19 10.001Z">
                                </path>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="message cozyMessage groupStart wrapper-2a6GCs cozy-3raOZG zalgo-jN1Ica" tabIndex={-1}>
            <div className="contents-2mQqc9" >
                <img src="https://cdn.discordapp.com/avatars/663074487335649292/576eb5f13519b9da10ba7807bdd83fab.webp?size=128" className="avatar-1BDn8e clickable-1bVtEA" alt=" " />
                <h2 className="message-header">
                    <span className="headerText">
                        <span className="username desaturateUserColors clickable-1bVtEA" tabIndex={0}>Troy</span><span className="botTagCozy-1fFsZk botTag-1un5a6 botTagRegular-2HEhHi botTag-2WPJ74 rem-2m9HGf">
                            <span className="botText-1526X_">BOT</span></span>
                    </span>
                    <span className="timestamp-3ZCmNB timestampInline-yHQ6fX"><time title="Today at 16:06" dateTime="2021-09-05T15:06:17.733Z"><i className="separator-2nZzUB"> — </i>Today at 16:06</time></span>
                </h2>
                <div className="markup-2BOw-j messageContent">
                    A required parameter 'message' is
                    missing
                    <pre><code className="scrollbarGhostHairline-1mSOM1 scrollbar-3dvm_9 hljs">...send &lt;ID&gt; &lt;message&gt;{"\n"}{"            "}﹋﹋﹋﹋</code></pre>
                </div>
            </div>
            <div className="container-1ov-mD" />
            <div className="buttonContainer-DHceWr">
                <div className="buttons-cl5qTG container-3npvBV isHeader-2dII4U" data-title="Message actions">
                    <div className="wrapper-2aW0bm">
                        <div className="button-1ZiXG9" data-title="Add reaction" tabIndex={0}>
                            <svg className="icon-3Gkjwa" width={24} height={24} viewBox="0 0 24 24">
                                <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M12.2512 2.00309C12.1677 2.00104 12.084 2 12 2C6.477 2 2 6.477 2 12C2 17.522 6.477 22 12 22C17.523 22 22 17.522 22 12C22 11.916 21.999 11.8323 21.9969 11.7488C21.3586 11.9128 20.6895 12 20 12C15.5817 12 12 8.41828 12 4C12 3.31052 12.0872 2.6414 12.2512 2.00309ZM10 8C10 6.896 9.104 6 8 6C6.896 6 6 6.896 6 8C6 9.105 6.896 10 8 10C9.104 10 10 9.105 10 8ZM12 19C15.14 19 18 16.617 18 14V13H6V14C6 16.617 8.86 19 12 19Z">
                                </path>
                                <path d="M21 3V0H19V3H16V5H19V8H21V5H24V3H21Z" fill="currentColor" />
                            </svg>
                        </div>
                        <div className="button-1ZiXG9" data-title="Reply" tabIndex={0}>
                            <svg className="icon-3Gkjwa" width={24} height={24} viewBox="0 0 24 24">
                                <path d="M10 8.26667V4L3 11.4667L10 18.9333V14.56C15 14.56 18.5 16.2667 21 20C20 14.6667 17 9.33333 10 8.26667Z" fill="currentColor" />
                            </svg>
                        </div>
                        <div className="button-1ZiXG9" data-title="Create thread" tabIndex={0}>
                            <svg className="icon-3Gkjwa" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                <path fill="currentColor" d="M5.43309 21C5.35842 21 5.30189 20.9325 5.31494 20.859L5.99991 17H2.14274C2.06819 17 2.01168 16.9327 2.02453 16.8593L2.33253 15.0993C2.34258 15.0419 2.39244 15 2.45074 15H6.34991L7.40991 9H3.55274C3.47819 9 3.42168 8.93274 3.43453 8.85931L3.74253 7.09931C3.75258 7.04189 3.80244 7 3.86074 7H7.75991L8.45234 3.09903C8.46251 3.04174 8.51231 3 8.57049 3H10.3267C10.4014 3 10.4579 3.06746 10.4449 3.14097L9.75991 7H15.7599L16.4523 3.09903C16.4625 3.04174 16.5123 3 16.5705 3H18.3267C18.4014 3 18.4579 3.06746 18.4449 3.14097L17.7599 7H21.6171C21.6916 7 21.7481 7.06725 21.7353 7.14069L21.4273 8.90069C21.4172 8.95811 21.3674 9 21.3091 9H17.4099L17.0495 11.04H15.05L15.4104 9H9.41035L8.35035 15H10.5599V17H7.99991L7.30749 20.901C7.29732 20.9583 7.24752 21 7.18934 21H5.43309Z">
                                </path>
                                <path fill="currentColor" d="M13.4399 12.96C12.9097 12.96 12.4799 13.3898 12.4799 13.92V20.2213C12.4799 20.7515 12.9097 21.1813 13.4399 21.1813H14.3999C14.5325 21.1813 14.6399 21.2887 14.6399 21.4213V23.4597C14.6399 23.6677 14.8865 23.7773 15.0408 23.6378L17.4858 21.4289C17.6622 21.2695 17.8916 21.1813 18.1294 21.1813H22.5599C23.0901 21.1813 23.5199 20.7515 23.5199 20.2213V13.92C23.5199 13.3898 23.0901 12.96 22.5599 12.96H13.4399Z">
                                </path>
                            </svg>
                        </div>
                        <div className="button-1ZiXG9" data-title="More" tabIndex={0}>
                            <svg className="icon-3Gkjwa" width={24} height={24} viewBox="0 0 24 24">
                                <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M7 12.001C7 10.8964 6.10457 10.001 5 10.001C3.89543 10.001 3 10.8964 3 12.001C3 13.1055 3.89543 14.001 5 14.001C6.10457 14.001 7 13.1055 7 12.001ZM14 12.001C14 10.8964 13.1046 10.001 12 10.001C10.8954 10.001 10 10.8964 10 12.001C10 13.1055 10.8954 14.001 12 14.001C13.1046 14.001 14 13.1055 14 12.001ZM19 10.001C20.1046 10.001 21 10.8964 21 12.001C21 13.1055 20.1046 14.001 19 14.001C17.8954 14.001 17 13.1055 17 12.001C17 10.8964 17.8954 10.001 19 10.001Z">
                                </path>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="message cozyMessage groupStart wrapper-2a6GCs cozy-3raOZG zalgo-jN1Ica" tabIndex={-1}>
            <div className="contents-2mQqc9" >
                <img src="https://cdn.discordapp.com/avatars/642791754160013312/73b507896ea2ae338d28f28076582bbe.webp?size=128" className="avatar-1BDn8e clickable-1bVtEA" alt=" " />
                <h2 className="message-header">
                    <span className="headerText">
                        <span className="username desaturateUserColors clickable-1bVtEA" tabIndex={0} style={{ color: 'rgb(52, 152, 219)' }}>Λcє</span></span><span className="timestamp-3ZCmNB timestampInline-yHQ6fX"><time title="Today at 16:08" dateTime="2021-09-05T15:08:01.754Z"><i className="separator-2nZzUB"> — </i>Today
                            at
                            16:08</time></span>
                </h2>
                <div className="markup-2BOw-j messageContent">
                    ...send 884091603302612992 hm...
                </div>
            </div>
            <div className="container-1ov-mD">
                <div className="messageAttachment-1aDidq">
                    <a className="anchor-3Z-8Bb anchorUnderlineOnHover-2ESHQB imageWrapper-2p5ogY imageZoom-1n-ADA clickable-3Ya1ho embedWrapper-lXpS3L" tabIndex={0} href="https://cdn.discordapp.com/attachments/884091603302612992/884092514930401330/763952821749678120.png" rel="noreferrer noopener" target="_blank" style={{ width: '128px', height: '121px' }}><img alt="" src="https://media.discordapp.net/attachments/884091603302612992/884092514930401330/763952821749678120.png" style={{ width: '128px', height: '121px' }} /></a>
                    <div className="removeAttachmentButton-2qVPxg" data-title="Remove message attachment" tabIndex={0}>
                        <svg width={16} height={16} viewBox="0 0 24 24">
                            <path fill="currentColor" d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z">
                            </path>
                        </svg>
                    </div>
                </div>
            </div>
            <div className="buttonContainer-DHceWr">
                <div className="buttons-cl5qTG container-3npvBV isHeader-2dII4U" data-title="Message actions">
                    <div className="wrapper-2aW0bm">
                        <div className="button-1ZiXG9" data-title="Add reaction" tabIndex={0}>
                            <svg className="icon-3Gkjwa" width={24} height={24} viewBox="0 0 24 24">
                                <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M12.2512 2.00309C12.1677 2.00104 12.084 2 12 2C6.477 2 2 6.477 2 12C2 17.522 6.477 22 12 22C17.523 22 22 17.522 22 12C22 11.916 21.999 11.8323 21.9969 11.7488C21.3586 11.9128 20.6895 12 20 12C15.5817 12 12 8.41828 12 4C12 3.31052 12.0872 2.6414 12.2512 2.00309ZM10 8C10 6.896 9.104 6 8 6C6.896 6 6 6.896 6 8C6 9.105 6.896 10 8 10C9.104 10 10 9.105 10 8ZM12 19C15.14 19 18 16.617 18 14V13H6V14C6 16.617 8.86 19 12 19Z">
                                </path>
                                <path d="M21 3V0H19V3H16V5H19V8H21V5H24V3H21Z" fill="currentColor" />
                            </svg>
                        </div>
                        <div className="button-1ZiXG9" data-title="Edit" tabIndex={0}>
                            <svg className="icon-3Gkjwa" width={16} height={16} viewBox="0 0 24 24">
                                <path fillRule="evenodd" clipRule="evenodd" d="M19.2929 9.8299L19.9409 9.18278C21.353 7.77064 21.353 5.47197 19.9409 4.05892C18.5287 2.64678 16.2292 2.64678 14.817 4.05892L14.1699 4.70694L19.2929 9.8299ZM12.8962 5.97688L5.18469 13.6906L10.3085 18.813L18.0201 11.0992L12.8962 5.97688ZM4.11851 20.9704L8.75906 19.8112L4.18692 15.239L3.02678 19.8796C2.95028 20.1856 3.04028 20.5105 3.26349 20.7337C3.48669 20.9569 3.8116 21.046 4.11851 20.9704Z" fill="currentColor" />
                            </svg>
                        </div>
                        <div className="button-1ZiXG9" data-title="Create thread" tabIndex={0}>
                            <svg className="icon-3Gkjwa" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                <path fill="currentColor" d="M5.43309 21C5.35842 21 5.30189 20.9325 5.31494 20.859L5.99991 17H2.14274C2.06819 17 2.01168 16.9327 2.02453 16.8593L2.33253 15.0993C2.34258 15.0419 2.39244 15 2.45074 15H6.34991L7.40991 9H3.55274C3.47819 9 3.42168 8.93274 3.43453 8.85931L3.74253 7.09931C3.75258 7.04189 3.80244 7 3.86074 7H7.75991L8.45234 3.09903C8.46251 3.04174 8.51231 3 8.57049 3H10.3267C10.4014 3 10.4579 3.06746 10.4449 3.14097L9.75991 7H15.7599L16.4523 3.09903C16.4625 3.04174 16.5123 3 16.5705 3H18.3267C18.4014 3 18.4579 3.06746 18.4449 3.14097L17.7599 7H21.6171C21.6916 7 21.7481 7.06725 21.7353 7.14069L21.4273 8.90069C21.4172 8.95811 21.3674 9 21.3091 9H17.4099L17.0495 11.04H15.05L15.4104 9H9.41035L8.35035 15H10.5599V17H7.99991L7.30749 20.901C7.29732 20.9583 7.24752 21 7.18934 21H5.43309Z">
                                </path>
                                <path fill="currentColor" d="M13.4399 12.96C12.9097 12.96 12.4799 13.3898 12.4799 13.92V20.2213C12.4799 20.7515 12.9097 21.1813 13.4399 21.1813H14.3999C14.5325 21.1813 14.6399 21.2887 14.6399 21.4213V23.4597C14.6399 23.6677 14.8865 23.7773 15.0408 23.6378L17.4858 21.4289C17.6622 21.2695 17.8916 21.1813 18.1294 21.1813H22.5599C23.0901 21.1813 23.5199 20.7515 23.5199 20.2213V13.92C23.5199 13.3898 23.0901 12.96 22.5599 12.96H13.4399Z">
                                </path>
                            </svg>
                        </div>
                        <div className="button-1ZiXG9" data-title="More" tabIndex={0}>
                            <svg className="icon-3Gkjwa" width={24} height={24} viewBox="0 0 24 24">
                                <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M7 12.001C7 10.8964 6.10457 10.001 5 10.001C3.89543 10.001 3 10.8964 3 12.001C3 13.1055 3.89543 14.001 5 14.001C6.10457 14.001 7 13.1055 7 12.001ZM14 12.001C14 10.8964 13.1046 10.001 12 10.001C10.8954 10.001 10 10.8964 10 12.001C10 13.1055 10.8954 14.001 12 14.001C13.1046 14.001 14 13.1055 14 12.001ZM19 10.001C20.1046 10.001 21 10.8964 21 12.001C21 13.1055 20.1046 14.001 19 14.001C17.8954 14.001 17 13.1055 17 12.001C17 10.8964 17.8954 10.001 19 10.001Z">
                                </path>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="message cozyMessage groupStart wrapper-2a6GCs cozy-3raOZG zalgo-jN1Ica" tabIndex={-1}>
            <div className="contents-2mQqc9" >
                <img src="https://cdn.discordapp.com/avatars/663074487335649292/576eb5f13519b9da10ba7807bdd83fab.webp?size=128" className="avatar-1BDn8e clickable-1bVtEA" alt=" " />
                <h2 className="message-header">
                    <span className="headerText">
                        <span className="username desaturateUserColors clickable-1bVtEA" tabIndex={0}>Troy</span><span className="botTagCozy-1fFsZk botTag-1un5a6 botTagRegular-2HEhHi botTag-2WPJ74 rem-2m9HGf">
                            <span className="botText-1526X_">BOT</span></span></span>
                    <span className="timestamp-3ZCmNB timestampInline-yHQ6fX">
                        <time title="Today at 16:08" dateTime="2021-09-05T15:08:02.646Z">
                            <i className="separator-2nZzUB"> — </i>Today at 16:08
                        </time>
                    </span>
                </h2>
                <div className="markup-2BOw-j messageContent">
                    hm...</div>
            </div>
            <div className="container-1ov-mD">
                <div className="messageAttachment-1aDidq">
                    <a className="anchor-3Z-8Bb anchorUnderlineOnHover-2ESHQB imageWrapper-2p5ogY imageZoom-1n-ADA clickable-3Ya1ho embedWrapper-lXpS3L" tabIndex={0} href="https://cdn.discordapp.com/attachments/884091603302612992/884092520940863528/763952821749678120.png" rel="noreferrer noopener" target="_blank" style={{ width: '128px', height: '121px' }}><img alt="" src="https://media.discordapp.net/attachments/884091603302612992/884092520940863528/763952821749678120.png" style={{ width: '128px', height: '121px' }} /></a>
                    <div className="removeAttachmentButton-2qVPxg" data-title="Remove message attachment" tabIndex={0}>
                        <svg width={16} height={16} viewBox="0 0 24 24">
                            <path fill="currentColor" d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z">
                            </path>
                        </svg>
                    </div>
                </div>
            </div>
            <div className="buttonContainer-DHceWr">
                <div className="buttons-cl5qTG container-3npvBV isHeader-2dII4U" data-title="Message actions">
                    <div className="wrapper-2aW0bm">
                        <div className="button-1ZiXG9" data-title="Add reaction" tabIndex={0}>
                            <svg className="icon-3Gkjwa" width={24} height={24} viewBox="0 0 24 24">
                                <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M12.2512 2.00309C12.1677 2.00104 12.084 2 12 2C6.477 2 2 6.477 2 12C2 17.522 6.477 22 12 22C17.523 22 22 17.522 22 12C22 11.916 21.999 11.8323 21.9969 11.7488C21.3586 11.9128 20.6895 12 20 12C15.5817 12 12 8.41828 12 4C12 3.31052 12.0872 2.6414 12.2512 2.00309ZM10 8C10 6.896 9.104 6 8 6C6.896 6 6 6.896 6 8C6 9.105 6.896 10 8 10C9.104 10 10 9.105 10 8ZM12 19C15.14 19 18 16.617 18 14V13H6V14C6 16.617 8.86 19 12 19Z">
                                </path>
                                <path d="M21 3V0H19V3H16V5H19V8H21V5H24V3H21Z" fill="currentColor" />
                            </svg>
                        </div>
                        <div className="button-1ZiXG9" data-title="Reply" tabIndex={0}>
                            <svg className="icon-3Gkjwa" width={24} height={24} viewBox="0 0 24 24">
                                <path d="M10 8.26667V4L3 11.4667L10 18.9333V14.56C15 14.56 18.5 16.2667 21 20C20 14.6667 17 9.33333 10 8.26667Z" fill="currentColor" />
                            </svg>
                        </div>
                        <div className="button-1ZiXG9" data-title="Create thread" tabIndex={0}>
                            <svg className="icon-3Gkjwa" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                <path fill="currentColor" d="M5.43309 21C5.35842 21 5.30189 20.9325 5.31494 20.859L5.99991 17H2.14274C2.06819 17 2.01168 16.9327 2.02453 16.8593L2.33253 15.0993C2.34258 15.0419 2.39244 15 2.45074 15H6.34991L7.40991 9H3.55274C3.47819 9 3.42168 8.93274 3.43453 8.85931L3.74253 7.09931C3.75258 7.04189 3.80244 7 3.86074 7H7.75991L8.45234 3.09903C8.46251 3.04174 8.51231 3 8.57049 3H10.3267C10.4014 3 10.4579 3.06746 10.4449 3.14097L9.75991 7H15.7599L16.4523 3.09903C16.4625 3.04174 16.5123 3 16.5705 3H18.3267C18.4014 3 18.4579 3.06746 18.4449 3.14097L17.7599 7H21.6171C21.6916 7 21.7481 7.06725 21.7353 7.14069L21.4273 8.90069C21.4172 8.95811 21.3674 9 21.3091 9H17.4099L17.0495 11.04H15.05L15.4104 9H9.41035L8.35035 15H10.5599V17H7.99991L7.30749 20.901C7.29732 20.9583 7.24752 21 7.18934 21H5.43309Z">
                                </path>
                                <path fill="currentColor" d="M13.4399 12.96C12.9097 12.96 12.4799 13.3898 12.4799 13.92V20.2213C12.4799 20.7515 12.9097 21.1813 13.4399 21.1813H14.3999C14.5325 21.1813 14.6399 21.2887 14.6399 21.4213V23.4597C14.6399 23.6677 14.8865 23.7773 15.0408 23.6378L17.4858 21.4289C17.6622 21.2695 17.8916 21.1813 18.1294 21.1813H22.5599C23.0901 21.1813 23.5199 20.7515 23.5199 20.2213V13.92C23.5199 13.3898 23.0901 12.96 22.5599 12.96H13.4399Z">
                                </path>
                            </svg>
                        </div>
                        <div className="button-1ZiXG9" data-title="More" tabIndex={0}>
                            <svg className="icon-3Gkjwa" width={24} height={24} viewBox="0 0 24 24">
                                <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M7 12.001C7 10.8964 6.10457 10.001 5 10.001C3.89543 10.001 3 10.8964 3 12.001C3 13.1055 3.89543 14.001 5 14.001C6.10457 14.001 7 13.1055 7 12.001ZM14 12.001C14 10.8964 13.1046 10.001 12 10.001C10.8954 10.001 10 10.8964 10 12.001C10 13.1055 10.8954 14.001 12 14.001C13.1046 14.001 14 13.1055 14 12.001ZM19 10.001C20.1046 10.001 21 10.8964 21 12.001C21 13.1055 20.1046 14.001 19 14.001C17.8954 14.001 17 13.1055 17 12.001C17 10.8964 17.8954 10.001 19 10.001Z">
                                </path>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}
    </span>
}
