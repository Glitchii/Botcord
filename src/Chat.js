import React, { useRef } from 'react';
import SideMemberList from './SideMemberList';

export default function Chat({ selectedServer, setSelectedServer }) {
    const chat = useRef(0);
    const toggleMembersList = () => chat?.current.classList.toggle('noMemberList');

    return <div className="chat chat-3bRxxu-rpl" ref={chat}>
        <div className="uploadArea-1qnBZm uploadArea-3QgLtW">
            <div className="uploadDropModal-2kTwbc">
                <div className="bgScale-1otPtc" />
                <div className="inner-3nWsbo">
                    <div className="icons-1w691d">
                        <div className="wrapOne-14G98n">
                            <div className="icon-kyxXVr one-2crnLX" />
                        </div>
                        <div className="wrapThree-1CNQ42">
                            <div className="icon-kyxXVr three-27ScFD" />
                        </div>
                        <div className="wrapTwo-mQGI3R">
                            <div className="icon-kyxXVr two-3BBQI9" />
                        </div>
                    </div>
                    <div className="title-2Vtl4y">Upload to
                        <strong>#general-i-think</strong></div>
                    <div className="instructions-2Du9gG">
                        <pre>You can add comments before uploading.{"\n"}Hold shift to upload directly.</pre>
                    </div>
                </div>
            </div>
        </div>
        <section className="title-3qD0b- container-1r6BKw themed-ANHk51" title="Channel header">
            <div className="children-19S4PO">
                <div className="iconWrapper-2OrFZ1" title="Text channel" tabIndex={-1}>
                    <svg width={24} height={24} viewBox="0 0 24 24" className="icon-22AiRD">
                        <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M5.88657 21C5.57547 21 5.3399 20.7189 5.39427 20.4126L6.00001 17H2.59511C2.28449 17 2.04905 16.7198 2.10259 16.4138L2.27759 15.4138C2.31946 15.1746 2.52722 15 2.77011 15H6.35001L7.41001 9H4.00511C3.69449 9 3.45905 8.71977 3.51259 8.41381L3.68759 7.41381C3.72946 7.17456 3.93722 7 4.18011 7H7.76001L8.39677 3.41262C8.43914 3.17391 8.64664 3 8.88907 3H9.87344C10.1845 3 10.4201 3.28107 10.3657 3.58738L9.76001 7H15.76L16.3968 3.41262C16.4391 3.17391 16.6466 3 16.8891 3H17.8734C18.1845 3 18.4201 3.28107 18.3657 3.58738L17.76 7H21.1649C21.4755 7 21.711 7.28023 21.6574 7.58619L21.4824 8.58619C21.4406 8.82544 21.2328 9 20.9899 9H17.41L16.35 15H19.7549C20.0655 15 20.301 15.2802 20.2474 15.5862L20.0724 16.5862C20.0306 16.8254 19.8228 17 19.5799 17H16L15.3632 20.5874C15.3209 20.8261 15.1134 21 14.8709 21H13.8866C13.5755 21 13.3399 20.7189 13.3943 20.4126L14 17H8.00001L7.36325 20.5874C7.32088 20.8261 7.11337 21 6.87094 21H5.88657ZM9.41045 9L8.35045 15H14.3504L15.4104 9H9.41045Z">
                        </path>
                    </svg>
                </div>
                <h3 className="title-29uC1r base-1x0h_U size16-1P40sf">
                    general-i-think</h3>
            </div>
            <div className="toolbar-1t6TWx">
                <div className="icon-iDUzSK iconWrapper-2OrFZ1 clickable-3rdHwn" title="Threads" tabIndex={0}>
                    <svg x={0} y={0} className="icon-22AiRD" width={24} height={24} viewBox="0 0 24 24" fill="none">
                        <path fill="currentColor" d="M5.43309 21C5.35842 21 5.30189 20.9325 5.31494 20.859L5.99991 17H2.14274C2.06819 17 2.01168 16.9327 2.02453 16.8593L2.33253 15.0993C2.34258 15.0419 2.39244 15 2.45074 15H6.34991L7.40991 9H3.55274C3.47819 9 3.42168 8.93274 3.43453 8.85931L3.74253 7.09931C3.75258 7.04189 3.80244 7 3.86074 7H7.75991L8.45234 3.09903C8.46251 3.04174 8.51231 3 8.57049 3H10.3267C10.4014 3 10.4579 3.06746 10.4449 3.14097L9.75991 7H15.7599L16.4523 3.09903C16.4625 3.04174 16.5123 3 16.5705 3H18.3267C18.4014 3 18.4579 3.06746 18.4449 3.14097L17.7599 7H21.6171C21.6916 7 21.7481 7.06725 21.7353 7.14069L21.4273 8.90069C21.4172 8.95811 21.3674 9 21.3091 9H17.4099L17.0495 11.04H15.05L15.4104 9H9.41035L8.35035 15H10.5599V17H7.99991L7.30749 20.901C7.29732 20.9583 7.24752 21 7.18934 21H5.43309Z">
                        </path>
                        <path fill="currentColor" d="M13.4399 12.96C12.9097 12.96 12.4799 13.3898 12.4799 13.92V20.2213C12.4799 20.7515 12.9097 21.1813 13.4399 21.1813H14.3999C14.5325 21.1813 14.6399 21.2887 14.6399 21.4213V23.4597C14.6399 23.6677 14.8865 23.7773 15.0408 23.6378L17.4858 21.4289C17.6622 21.2695 17.8916 21.1813 18.1294 21.1813H22.5599C23.0901 21.1813 23.5199 20.7515 23.5199 20.2213V13.92C23.5199 13.3898 23.0901 12.96 22.5599 12.96H13.4399Z">
                        </path>
                    </svg>
                </div>
                <div className="iconWrapper-2OrFZ1 clickable-3rdHwn" title="Mute channel general-i-think" aria-checked="false" tabIndex={0}>
                    <svg x={0} y={0} className="icon-22AiRD" width={24} height={24} viewBox="0 0 24 24" fill="none">
                        <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M18 9V14C18 15.657 19.344 17 21 17V18H3V17C4.656 17 6 15.657 6 14V9C6 5.686 8.686 3 12 3C15.314 3 18 5.686 18 9ZM11.9999 21C10.5239 21 9.24793 20.19 8.55493 19H15.4449C14.7519 20.19 13.4759 21 11.9999 21Z">
                        </path>
                    </svg>
                </div>
                <div className="iconWrapper-2OrFZ1 clickable-3rdHwn" title="Pinned messages" tabIndex={0}>
                    <svg x={0} y={0} className="icon-22AiRD" width={24} height={24} viewBox="0 0 24 24">
                        <path fill="currentColor" d="M22 12L12.101 2.10101L10.686 3.51401L12.101 4.92901L7.15096 9.87801V9.88001L5.73596 8.46501L4.32196 9.88001L8.56496 14.122L2.90796 19.778L4.32196 21.192L9.97896 15.536L14.222 19.778L15.636 18.364L14.222 16.95L19.171 12H19.172L20.586 13.414L22 12Z">
                        </path>
                    </svg>
                </div>
                <div className="iconWrapper-2OrFZ1 clickable-3rdHwn selected-1GqIat" title="Hide Member List" tabIndex={0} onClick={toggleMembersList}>
                    <svg x={0} y={0} className="icon-22AiRD" width={24} height={24} viewBox="0 0 24 24">
                        <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M14 8.00598C14 10.211 12.206 12.006 10 12.006C7.795 12.006 6 10.211 6 8.00598C6 5.80098 7.794 4.00598 10 4.00598C12.206 4.00598 14 5.80098 14 8.00598ZM2 19.006C2 15.473 5.29 13.006 10 13.006C14.711 13.006 18 15.473 18 19.006V20.006H2V19.006Z">
                        </path>
                        <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M14 8.00598C14 10.211 12.206 12.006 10 12.006C7.795 12.006 6 10.211 6 8.00598C6 5.80098 7.794 4.00598 10 4.00598C12.206 4.00598 14 5.80098 14 8.00598ZM2 19.006C2 15.473 5.29 13.006 10 13.006C14.711 13.006 18 15.473 18 19.006V20.006H2V19.006Z">
                        </path>
                        <path fill="currentColor" d="M20.0001 20.006H22.0001V19.006C22.0001 16.4433 20.2697 14.4415 17.5213 13.5352C19.0621 14.9127 20.0001 16.8059 20.0001 19.006V20.006Z">
                        </path>
                        <path fill="currentColor" d="M14.8834 11.9077C16.6657 11.5044 18.0001 9.9077 18.0001 8.00598C18.0001 5.96916 16.4693 4.28218 14.4971 4.0367C15.4322 5.09511 16.0001 6.48524 16.0001 8.00598C16.0001 9.44888 15.4889 10.7742 14.6378 11.8102C14.7203 11.8418 14.8022 11.8743 14.8834 11.9077Z">
                        </path>
                    </svg>
                </div>
                <div className="search-36MZv-">
                    <div className="search-2oPWTC">
                        <div className="searchBar-3dMhjb" title="Search" aria-owns="search-results">
                            <div className="DraftEditor-root">
                                <div className="public-DraftEditorPlaceholder-root">
                                    <div className="public-DraftEditorPlaceholder-inner" id="placeholder-55vgr" style={{ whiteSpace: 'pre-wrap' }}>Search</div>
                                </div>
                                <div className="DraftEditor-editorContainer">
                                    <div className="notranslate public-DraftEditor-content" spellCheck="false" style={{ outline: 'none', userSelect: 'text', whiteSpace: 'pre-wrap', overflowWrap: 'break-word' }} contentEditable="true">
                                        <div>
                                            <div className>
                                                <div className="public-DraftStyleDefault-block public-DraftStyleDefault-ltr">
                                                    <span><br /></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="icon-38sknP iconLayout-1WxHy4 small-1lPjda" tabIndex={-1} title="Clear search" >
                                <div className="iconContainer-O4O2CN">
                                    <svg className="icon-3cZ1F_ visible-3V0mGj" width={24} height={24} viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M21.707 20.293L16.314 14.9C17.403 13.504 18 11.799 18 10C18 7.863 17.167 5.854 15.656 4.344C14.146 2.832 12.137 2 10 2C7.863 2 5.854 2.832 4.344 4.344C2.833 5.854 2 7.863 2 10C2 12.137 2.833 14.146 4.344 15.656C5.854 17.168 7.863 18 10 18C11.799 18 13.504 17.404 14.9 16.314L20.293 21.706L21.707 20.293ZM10 16C8.397 16 6.891 15.376 5.758 14.243C4.624 13.11 4 11.603 4 10C4 8.398 4.624 6.891 5.758 5.758C6.891 4.624 8.397 4 10 4C11.603 4 13.109 4.624 14.242 5.758C15.376 6.891 16 8.398 16 10C16 11.603 15.376 13.11 14.242 14.243C13.109 15.376 11.603 16 10 16Z">
                                        </path>
                                    </svg>
                                    <svg className="icon-3cZ1F_" width={24} height={24} viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z">
                                        </path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="iconWrapper-2OrFZ1 clickable-3rdHwn" title="Inbox" tabIndex={0}>
                    <svg x={0} y={0} className="icon-22AiRD" width={24} height={24} viewBox="0 0 24 24" fill="none">
                        <path d="M19 3H4.99C3.88 3 3.01 3.89 3.01 5L3 19C3 20.1 3.88 21 4.99 21H19C20.1 21 21 20.1 21 19V5C21 3.89 20.1 3 19 3ZM19 15H15C15 16.66 13.65 18 12 18C10.35 18 9 16.66 9 15H4.99V5H19V15Z" fill="currentColor" />
                    </svg>
                </div>
                <a tabIndex={-1} className="anchor-3Z-8Bb anchorUnderlineOnHover-2ESHQB" href="https://support.discord.com" rel="noreferrer noopener" target="_blank">
                    <div className="iconWrapper-2OrFZ1 clickable-3rdHwn" title="Help" tabIndex={0}>
                        <svg x={0} y={0} className="icon-22AiRD" width={24} height={24} viewBox="0 0 24 24">
                            <path fill="currentColor" d="M12 2C6.486 2 2 6.487 2 12C2 17.515 6.486 22 12 22C17.514 22 22 17.515 22 12C22 6.487 17.514 2 12 2ZM12 18.25C11.31 18.25 10.75 17.691 10.75 17C10.75 16.31 11.31 15.75 12 15.75C12.69 15.75 13.25 16.31 13.25 17C13.25 17.691 12.69 18.25 12 18.25ZM13 13.875V15H11V12H12C13.104 12 14 11.103 14 10C14 8.896 13.104 8 12 8C10.896 8 10 8.896 10 10H8C8 7.795 9.795 6 12 6C14.205 6 16 7.795 16 10C16 11.861 14.723 13.429 13 13.875Z">
                            </path>
                        </svg>
                    </div>
                </a>
            </div>
        </section>
        <div className="content-yTz4x3">
            <main className="chatContent-a9vAAp" title="general-i-think (channel)">
                <div className="messagesWrapper-1sRNjr group-spacing-16">
                    <div className="scroller-2LSbBU auto-Ge5KZx scrollerBase-289Jih disableScrollAnchor-3V9UtP" dir="ltr" tabIndex={-1} style={{ overflow: 'hidden scroll', paddingRight: '0px' }}>
                        <div className="scrollerContent-WzeG7R content-3YMskv">
                            <div className="scrollerInner-2YIMLh" title="Messages in general-i-think" aria-orientation="vertical" tabIndex={0} aria-live="off">
                                <div className="container-3RCQyg">
                                    <div className="emptyChannelIcon" />
                                    <h1 className="header-3uLluP base-1x0h_U size32-o_H79z">
                                        Welcome to #general-i-think!</h1>
                                    <div className="size16-1P40sf description-1sDbzZ">This
                                        is the start of the
                                        #general-i-think channel.
                                    </div>
                                </div>
                                <div className="message cozyMessage groupStart wrapper-2a6GCs cozy-3raOZG zalgo-jN1Ica" tabIndex={-1}>
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
                                            <div className="removeAttachmentButton-2qVPxg" title="Remove message attachment" tabIndex={0}>
                                                <svg width={16} height={16} viewBox="0 0 24 24">
                                                    <path fill="currentColor" d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z">
                                                    </path>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="buttonContainer-DHceWr">
                                        <div className="buttons-cl5qTG container-3npvBV" title="Message actions">
                                            <div className="wrapper-2aW0bm">
                                                <div className="button-1ZiXG9" title="Add reaction" tabIndex={0}>
                                                    <svg className="icon-3Gkjwa" width={24} height={24} viewBox="0 0 24 24">
                                                        <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M12.2512 2.00309C12.1677 2.00104 12.084 2 12 2C6.477 2 2 6.477 2 12C2 17.522 6.477 22 12 22C17.523 22 22 17.522 22 12C22 11.916 21.999 11.8323 21.9969 11.7488C21.3586 11.9128 20.6895 12 20 12C15.5817 12 12 8.41828 12 4C12 3.31052 12.0872 2.6414 12.2512 2.00309ZM10 8C10 6.896 9.104 6 8 6C6.896 6 6 6.896 6 8C6 9.105 6.896 10 8 10C9.104 10 10 9.105 10 8ZM12 19C15.14 19 18 16.617 18 14V13H6V14C6 16.617 8.86 19 12 19Z">
                                                        </path>
                                                        <path d="M21 3V0H19V3H16V5H19V8H21V5H24V3H21Z" fill="currentColor" />
                                                    </svg>
                                                </div>
                                                <div className="button-1ZiXG9" title="Edit" tabIndex={0}>
                                                    <svg className="icon-3Gkjwa" width={16} height={16} viewBox="0 0 24 24">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M19.2929 9.8299L19.9409 9.18278C21.353 7.77064 21.353 5.47197 19.9409 4.05892C18.5287 2.64678 16.2292 2.64678 14.817 4.05892L14.1699 4.70694L19.2929 9.8299ZM12.8962 5.97688L5.18469 13.6906L10.3085 18.813L18.0201 11.0992L12.8962 5.97688ZM4.11851 20.9704L8.75906 19.8112L4.18692 15.239L3.02678 19.8796C2.95028 20.1856 3.04028 20.5105 3.26349 20.7337C3.48669 20.9569 3.8116 21.046 4.11851 20.9704Z" fill="currentColor" />
                                                    </svg>
                                                </div>
                                                <div className="button-1ZiXG9" title="Create thread" tabIndex={0}>
                                                    <svg className="icon-3Gkjwa" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                                        <path fill="currentColor" d="M5.43309 21C5.35842 21 5.30189 20.9325 5.31494 20.859L5.99991 17H2.14274C2.06819 17 2.01168 16.9327 2.02453 16.8593L2.33253 15.0993C2.34258 15.0419 2.39244 15 2.45074 15H6.34991L7.40991 9H3.55274C3.47819 9 3.42168 8.93274 3.43453 8.85931L3.74253 7.09931C3.75258 7.04189 3.80244 7 3.86074 7H7.75991L8.45234 3.09903C8.46251 3.04174 8.51231 3 8.57049 3H10.3267C10.4014 3 10.4579 3.06746 10.4449 3.14097L9.75991 7H15.7599L16.4523 3.09903C16.4625 3.04174 16.5123 3 16.5705 3H18.3267C18.4014 3 18.4579 3.06746 18.4449 3.14097L17.7599 7H21.6171C21.6916 7 21.7481 7.06725 21.7353 7.14069L21.4273 8.90069C21.4172 8.95811 21.3674 9 21.3091 9H17.4099L17.0495 11.04H15.05L15.4104 9H9.41035L8.35035 15H10.5599V17H7.99991L7.30749 20.901C7.29732 20.9583 7.24752 21 7.18934 21H5.43309Z">
                                                        </path>
                                                        <path fill="currentColor" d="M13.4399 12.96C12.9097 12.96 12.4799 13.3898 12.4799 13.92V20.2213C12.4799 20.7515 12.9097 21.1813 13.4399 21.1813H14.3999C14.5325 21.1813 14.6399 21.2887 14.6399 21.4213V23.4597C14.6399 23.6677 14.8865 23.7773 15.0408 23.6378L17.4858 21.4289C17.6622 21.2695 17.8916 21.1813 18.1294 21.1813H22.5599C23.0901 21.1813 23.5199 20.7515 23.5199 20.2213V13.92C23.5199 13.3898 23.0901 12.96 22.5599 12.96H13.4399Z">
                                                        </path>
                                                    </svg>
                                                </div>
                                                <div className="button-1ZiXG9" title="More" tabIndex={0}>
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
                                        <div className="buttons-cl5qTG container-3npvBV isHeader-2dII4U" title="Message actions">
                                            <div className="wrapper-2aW0bm">
                                                <div className="button-1ZiXG9" title="Add reaction" tabIndex={0}>
                                                    <svg className="icon-3Gkjwa" width={24} height={24} viewBox="0 0 24 24">
                                                        <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M12.2512 2.00309C12.1677 2.00104 12.084 2 12 2C6.477 2 2 6.477 2 12C2 17.522 6.477 22 12 22C17.523 22 22 17.522 22 12C22 11.916 21.999 11.8323 21.9969 11.7488C21.3586 11.9128 20.6895 12 20 12C15.5817 12 12 8.41828 12 4C12 3.31052 12.0872 2.6414 12.2512 2.00309ZM10 8C10 6.896 9.104 6 8 6C6.896 6 6 6.896 6 8C6 9.105 6.896 10 8 10C9.104 10 10 9.105 10 8ZM12 19C15.14 19 18 16.617 18 14V13H6V14C6 16.617 8.86 19 12 19Z">
                                                        </path>
                                                        <path d="M21 3V0H19V3H16V5H19V8H21V5H24V3H21Z" fill="currentColor" />
                                                    </svg>
                                                </div>
                                                <div className="button-1ZiXG9" title="Reply" tabIndex={0}>
                                                    <svg className="icon-3Gkjwa" width={24} height={24} viewBox="0 0 24 24">
                                                        <path d="M10 8.26667V4L3 11.4667L10 18.9333V14.56C15 14.56 18.5 16.2667 21 20C20 14.6667 17 9.33333 10 8.26667Z" fill="currentColor" />
                                                    </svg>
                                                </div>
                                                <div className="button-1ZiXG9" title="Create thread" tabIndex={0}>
                                                    <svg className="icon-3Gkjwa" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                                        <path fill="currentColor" d="M5.43309 21C5.35842 21 5.30189 20.9325 5.31494 20.859L5.99991 17H2.14274C2.06819 17 2.01168 16.9327 2.02453 16.8593L2.33253 15.0993C2.34258 15.0419 2.39244 15 2.45074 15H6.34991L7.40991 9H3.55274C3.47819 9 3.42168 8.93274 3.43453 8.85931L3.74253 7.09931C3.75258 7.04189 3.80244 7 3.86074 7H7.75991L8.45234 3.09903C8.46251 3.04174 8.51231 3 8.57049 3H10.3267C10.4014 3 10.4579 3.06746 10.4449 3.14097L9.75991 7H15.7599L16.4523 3.09903C16.4625 3.04174 16.5123 3 16.5705 3H18.3267C18.4014 3 18.4579 3.06746 18.4449 3.14097L17.7599 7H21.6171C21.6916 7 21.7481 7.06725 21.7353 7.14069L21.4273 8.90069C21.4172 8.95811 21.3674 9 21.3091 9H17.4099L17.0495 11.04H15.05L15.4104 9H9.41035L8.35035 15H10.5599V17H7.99991L7.30749 20.901C7.29732 20.9583 7.24752 21 7.18934 21H5.43309Z">
                                                        </path>
                                                        <path fill="currentColor" d="M13.4399 12.96C12.9097 12.96 12.4799 13.3898 12.4799 13.92V20.2213C12.4799 20.7515 12.9097 21.1813 13.4399 21.1813H14.3999C14.5325 21.1813 14.6399 21.2887 14.6399 21.4213V23.4597C14.6399 23.6677 14.8865 23.7773 15.0408 23.6378L17.4858 21.4289C17.6622 21.2695 17.8916 21.1813 18.1294 21.1813H22.5599C23.0901 21.1813 23.5199 20.7515 23.5199 20.2213V13.92C23.5199 13.3898 23.0901 12.96 22.5599 12.96H13.4399Z">
                                                        </path>
                                                    </svg>
                                                </div>
                                                <div className="button-1ZiXG9" title="More" tabIndex={0}>
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
                                            <div className="removeAttachmentButton-2qVPxg" title="Remove message attachment" tabIndex={0}>
                                                <svg width={16} height={16} viewBox="0 0 24 24">
                                                    <path fill="currentColor" d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z">
                                                    </path>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="buttonContainer-DHceWr">
                                        <div className="buttons-cl5qTG container-3npvBV isHeader-2dII4U" title="Message actions">
                                            <div className="wrapper-2aW0bm">
                                                <div className="button-1ZiXG9" title="Add reaction" tabIndex={0}>
                                                    <svg className="icon-3Gkjwa" width={24} height={24} viewBox="0 0 24 24">
                                                        <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M12.2512 2.00309C12.1677 2.00104 12.084 2 12 2C6.477 2 2 6.477 2 12C2 17.522 6.477 22 12 22C17.523 22 22 17.522 22 12C22 11.916 21.999 11.8323 21.9969 11.7488C21.3586 11.9128 20.6895 12 20 12C15.5817 12 12 8.41828 12 4C12 3.31052 12.0872 2.6414 12.2512 2.00309ZM10 8C10 6.896 9.104 6 8 6C6.896 6 6 6.896 6 8C6 9.105 6.896 10 8 10C9.104 10 10 9.105 10 8ZM12 19C15.14 19 18 16.617 18 14V13H6V14C6 16.617 8.86 19 12 19Z">
                                                        </path>
                                                        <path d="M21 3V0H19V3H16V5H19V8H21V5H24V3H21Z" fill="currentColor" />
                                                    </svg>
                                                </div>
                                                <div className="button-1ZiXG9" title="Edit" tabIndex={0}>
                                                    <svg className="icon-3Gkjwa" width={16} height={16} viewBox="0 0 24 24">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M19.2929 9.8299L19.9409 9.18278C21.353 7.77064 21.353 5.47197 19.9409 4.05892C18.5287 2.64678 16.2292 2.64678 14.817 4.05892L14.1699 4.70694L19.2929 9.8299ZM12.8962 5.97688L5.18469 13.6906L10.3085 18.813L18.0201 11.0992L12.8962 5.97688ZM4.11851 20.9704L8.75906 19.8112L4.18692 15.239L3.02678 19.8796C2.95028 20.1856 3.04028 20.5105 3.26349 20.7337C3.48669 20.9569 3.8116 21.046 4.11851 20.9704Z" fill="currentColor" />
                                                    </svg>
                                                </div>
                                                <div className="button-1ZiXG9" title="Create thread" tabIndex={0}>
                                                    <svg className="icon-3Gkjwa" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                                        <path fill="currentColor" d="M5.43309 21C5.35842 21 5.30189 20.9325 5.31494 20.859L5.99991 17H2.14274C2.06819 17 2.01168 16.9327 2.02453 16.8593L2.33253 15.0993C2.34258 15.0419 2.39244 15 2.45074 15H6.34991L7.40991 9H3.55274C3.47819 9 3.42168 8.93274 3.43453 8.85931L3.74253 7.09931C3.75258 7.04189 3.80244 7 3.86074 7H7.75991L8.45234 3.09903C8.46251 3.04174 8.51231 3 8.57049 3H10.3267C10.4014 3 10.4579 3.06746 10.4449 3.14097L9.75991 7H15.7599L16.4523 3.09903C16.4625 3.04174 16.5123 3 16.5705 3H18.3267C18.4014 3 18.4579 3.06746 18.4449 3.14097L17.7599 7H21.6171C21.6916 7 21.7481 7.06725 21.7353 7.14069L21.4273 8.90069C21.4172 8.95811 21.3674 9 21.3091 9H17.4099L17.0495 11.04H15.05L15.4104 9H9.41035L8.35035 15H10.5599V17H7.99991L7.30749 20.901C7.29732 20.9583 7.24752 21 7.18934 21H5.43309Z">
                                                        </path>
                                                        <path fill="currentColor" d="M13.4399 12.96C12.9097 12.96 12.4799 13.3898 12.4799 13.92V20.2213C12.4799 20.7515 12.9097 21.1813 13.4399 21.1813H14.3999C14.5325 21.1813 14.6399 21.2887 14.6399 21.4213V23.4597C14.6399 23.6677 14.8865 23.7773 15.0408 23.6378L17.4858 21.4289C17.6622 21.2695 17.8916 21.1813 18.1294 21.1813H22.5599C23.0901 21.1813 23.5199 20.7515 23.5199 20.2213V13.92C23.5199 13.3898 23.0901 12.96 22.5599 12.96H13.4399Z">
                                                        </path>
                                                    </svg>
                                                </div>
                                                <div className="button-1ZiXG9" title="More" tabIndex={0}>
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
                                            <div className="removeAttachmentButton-2qVPxg" title="Remove message attachment" tabIndex={0}>
                                                <svg width={16} height={16} viewBox="0 0 24 24">
                                                    <path fill="currentColor" d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z">
                                                    </path>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="buttonContainer-DHceWr">
                                        <div className="buttons-cl5qTG container-3npvBV isHeader-2dII4U" title="Message actions">
                                            <div className="wrapper-2aW0bm">
                                                <div className="button-1ZiXG9" title="Add reaction" tabIndex={0}>
                                                    <svg className="icon-3Gkjwa" width={24} height={24} viewBox="0 0 24 24">
                                                        <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M12.2512 2.00309C12.1677 2.00104 12.084 2 12 2C6.477 2 2 6.477 2 12C2 17.522 6.477 22 12 22C17.523 22 22 17.522 22 12C22 11.916 21.999 11.8323 21.9969 11.7488C21.3586 11.9128 20.6895 12 20 12C15.5817 12 12 8.41828 12 4C12 3.31052 12.0872 2.6414 12.2512 2.00309ZM10 8C10 6.896 9.104 6 8 6C6.896 6 6 6.896 6 8C6 9.105 6.896 10 8 10C9.104 10 10 9.105 10 8ZM12 19C15.14 19 18 16.617 18 14V13H6V14C6 16.617 8.86 19 12 19Z">
                                                        </path>
                                                        <path d="M21 3V0H19V3H16V5H19V8H21V5H24V3H21Z" fill="currentColor" />
                                                    </svg>
                                                </div>
                                                <div className="button-1ZiXG9" title="Reply" tabIndex={0}>
                                                    <svg className="icon-3Gkjwa" width={24} height={24} viewBox="0 0 24 24">
                                                        <path d="M10 8.26667V4L3 11.4667L10 18.9333V14.56C15 14.56 18.5 16.2667 21 20C20 14.6667 17 9.33333 10 8.26667Z" fill="currentColor" />
                                                    </svg>
                                                </div>
                                                <div className="button-1ZiXG9" title="Create thread" tabIndex={0}>
                                                    <svg className="icon-3Gkjwa" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                                        <path fill="currentColor" d="M5.43309 21C5.35842 21 5.30189 20.9325 5.31494 20.859L5.99991 17H2.14274C2.06819 17 2.01168 16.9327 2.02453 16.8593L2.33253 15.0993C2.34258 15.0419 2.39244 15 2.45074 15H6.34991L7.40991 9H3.55274C3.47819 9 3.42168 8.93274 3.43453 8.85931L3.74253 7.09931C3.75258 7.04189 3.80244 7 3.86074 7H7.75991L8.45234 3.09903C8.46251 3.04174 8.51231 3 8.57049 3H10.3267C10.4014 3 10.4579 3.06746 10.4449 3.14097L9.75991 7H15.7599L16.4523 3.09903C16.4625 3.04174 16.5123 3 16.5705 3H18.3267C18.4014 3 18.4579 3.06746 18.4449 3.14097L17.7599 7H21.6171C21.6916 7 21.7481 7.06725 21.7353 7.14069L21.4273 8.90069C21.4172 8.95811 21.3674 9 21.3091 9H17.4099L17.0495 11.04H15.05L15.4104 9H9.41035L8.35035 15H10.5599V17H7.99991L7.30749 20.901C7.29732 20.9583 7.24752 21 7.18934 21H5.43309Z">
                                                        </path>
                                                        <path fill="currentColor" d="M13.4399 12.96C12.9097 12.96 12.4799 13.3898 12.4799 13.92V20.2213C12.4799 20.7515 12.9097 21.1813 13.4399 21.1813H14.3999C14.5325 21.1813 14.6399 21.2887 14.6399 21.4213V23.4597C14.6399 23.6677 14.8865 23.7773 15.0408 23.6378L17.4858 21.4289C17.6622 21.2695 17.8916 21.1813 18.1294 21.1813H22.5599C23.0901 21.1813 23.5199 20.7515 23.5199 20.2213V13.92C23.5199 13.3898 23.0901 12.96 22.5599 12.96H13.4399Z">
                                                        </path>
                                                    </svg>
                                                </div>
                                                <div className="button-1ZiXG9" title="More" tabIndex={0}>
                                                    <svg className="icon-3Gkjwa" width={24} height={24} viewBox="0 0 24 24">
                                                        <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M7 12.001C7 10.8964 6.10457 10.001 5 10.001C3.89543 10.001 3 10.8964 3 12.001C3 13.1055 3.89543 14.001 5 14.001C6.10457 14.001 7 13.1055 7 12.001ZM14 12.001C14 10.8964 13.1046 10.001 12 10.001C10.8954 10.001 10 10.8964 10 12.001C10 13.1055 10.8954 14.001 12 14.001C13.1046 14.001 14 13.1055 14 12.001ZM19 10.001C20.1046 10.001 21 10.8964 21 12.001C21 13.1055 20.1046 14.001 19 14.001C17.8954 14.001 17 13.1055 17 12.001C17 10.8964 17.8954 10.001 19 10.001Z">
                                                        </path>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="scrollerSpacer-avRLaA" />
                            </div>
                        </div>
                    </div>
                </div>
                <form className="chat-form">
                    <div>
                        <div>
                            <div className="channelTextArea-rNsIhG channelTextArea-2VhZ6z">
                                <div className="scrollableContainer-2NUZem webkit-HjD9Er">
                                    <div className="inner-MADQqc sansAttachButton-td2irx">
                                        <div className="uploadInput-1XtQef">
                                            <div className="file-input" tabIndex={-1} aria-disabled="false" style={{ position: 'absolute', top: '0px', left: '0px', width: '100%', height: '100%', opacity: 0, cursor: 'pointer', fontSize: '0px' }}>
                                            </div>
                                        </div>
                                        <div className="attachWrapper-2TRKBi">
                                            <button title="Upload a file or send invites" type="button" className="attachButton-2WznTc attachButton-2dnuIu button-38aScr lookBlank-3eh9lL colorBrand-3pXr91 grow-q77ONN">
                                                <div className="contents-18-Yxp attachButtonInner-PQjIyk">
                                                    <svg width={24} height={24} viewBox="0 0 24 24">
                                                        <path className="attachButtonPlus-jWVFah" fill="currentColor" d="M12 2.00098C6.486 2.00098 2 6.48698 2 12.001C2 17.515 6.486 22.001 12 22.001C17.514 22.001 22 17.515 22 12.001C22 6.48698 17.514 2.00098 12 2.00098ZM17 13.001H13V17.001H11V13.001H7V11.001H11V7.00098H13V11.001H17V13.001Z">
                                                        </path>
                                                    </svg>
                                                </div>
                                            </button>
                                        </div>
                                        <div className="textArea-12jD-V textAreaSlate-1ZzRVj slateContainer-3Qkn2x">
                                            <div className="placeholder-37qJjk fontSize16Padding-3Wk7zP">
                                                Message #general-i-think
                                            </div>
                                            <div title="Message #general" className="markup-2BOw-j slateTextArea-1Mkdgw fontSize16Padding-3Wk7zP" autoCorrect="off" spellCheck="true" data-gramm="false" style={{ outline: 'none', whiteSpace: 'pre-wrap', overflowWrap: 'break-word', WebkitUserModify: 'read-write-plaintext-only' }} contentEditable="true">
                                                <div style={{ position: 'relative' }}>
                                                    <span>
                                                        <span>
                                                            <span>&#xFEFF;<br /></span>
                                                        </span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="buttons-3JBrkn">
                                            <button title="Send a gift" tabIndex={0} type="button" className="button-38aScr lookBlank-3eh9lL colorBrand-3pXr91 grow-q77ONN">
                                                <div className="contents-18-Yxp button-3AYNKb button-318s1X">
                                                    <div className="buttonWrapper-1ZmCpA" id="children" style={{ opacity: 1, transform: 'none' }}>
                                                        <svg width={24} height={24} viewBox="0 0 24 24">
                                                            <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M16.886 7.999H20C21.104 7.999 22 8.896 22 9.999V11.999H2V9.999C2 8.896 2.897 7.999 4 7.999H7.114C6.663 7.764 6.236 7.477 5.879 7.121C4.709 5.951 4.709 4.048 5.879 2.879C7.012 1.746 8.986 1.746 10.121 2.877C11.758 4.514 11.979 7.595 11.998 7.941C11.9991 7.9525 11.9966 7.96279 11.9941 7.97304C11.992 7.98151 11.99 7.98995 11.99 7.999H12.01C12.01 7.98986 12.0079 7.98134 12.0058 7.97287C12.0034 7.96282 12.0009 7.95286 12.002 7.942C12.022 7.596 12.242 4.515 13.879 2.878C15.014 1.745 16.986 1.746 18.121 2.877C19.29 4.049 19.29 5.952 18.121 7.121C17.764 7.477 17.337 7.764 16.886 7.999ZM7.293 5.707C6.903 5.316 6.903 4.682 7.293 4.292C7.481 4.103 7.732 4 8 4C8.268 4 8.519 4.103 8.707 4.292C9.297 4.882 9.641 5.94 9.825 6.822C8.945 6.639 7.879 6.293 7.293 5.707ZM14.174 6.824C14.359 5.941 14.702 4.883 15.293 4.293C15.481 4.103 15.732 4 16 4C16.268 4 16.519 4.103 16.706 4.291C17.096 4.682 17.097 5.316 16.707 5.707C16.116 6.298 15.057 6.642 14.174 6.824ZM3 13.999V19.999C3 21.102 3.897 21.999 5 21.999H11V13.999H3ZM13 13.999V21.999H19C20.104 21.999 21 21.102 21 19.999V13.999H13Z">
                                                            </path>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </button>
                                            <div className="buttonContainer-28fw2U">
                                                <button title="Open GIF picker" tabIndex={0} type="button" className="button-38aScr lookBlank-3eh9lL colorBrand-3pXr91 grow-q77ONN">
                                                    <div className="contents-18-Yxp button-3AYNKb button-318s1X">
                                                        <div className="buttonWrapper-1ZmCpA" id="icon" style={{ opacity: 1, transform: 'none' }}>
                                                            <svg width={24} height={24} className="icon-3D60ES" viewBox="0 0 24 24">
                                                                <path fill="currentColor" d="M2 2C0.895431 2 0 2.89543 0 4V20C0 21.1046 0.89543 22 2 22H22C23.1046 22 24 21.1046 24 20V4C24 2.89543 23.1046 2 22 2H2ZM9.76445 11.448V15.48C8.90045 16.044 7.88045 16.356 6.74045 16.356C4.11245 16.356 2.66045 14.628 2.66045 12.072C2.66045 9.504 4.23245 7.764 6.78845 7.764C7.80845 7.764 8.66045 8.004 9.32045 8.376L9.04445 10.164C8.42045 9.768 7.68845 9.456 6.83645 9.456C5.40845 9.456 4.71245 10.512 4.71245 12.06C4.71245 13.62 5.43245 14.712 6.86045 14.712C7.31645 14.712 7.64045 14.616 7.97645 14.448V12.972H6.42845V11.448H9.76445ZM11.5481 7.92H13.6001V16.2H11.5481V7.92ZM20.4724 7.92V9.636H17.5564V11.328H19.8604V13.044H17.5564V16.2H15.5164V7.92H20.4724Z">
                                                                </path>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </button>
                                            </div>
                                            <div className="buttonContainer-28fw2U">
                                                <button title="Open sticker picker" tabIndex={0} type="button" className="button-38aScr lookBlank-3eh9lL colorBrand-3pXr91 grow-q77ONN">
                                                    <div className="contents-18-Yxp button-3AYNKb button-318s1X stickerButton-3OEgwj">
                                                        <div className="buttonWrapper-1ZmCpA" id="children" style={{ opacity: 1, transform: 'none' }}>
                                                            <svg width={24} height={24} className="stickerIcon-3TP7EM" viewBox="0 0 20 20">
                                                                <path fill="currentColor" className fillRule="evenodd" clipRule="evenodd" d="M12.0002 0.662583V5.40204C12.0002 6.83974 13.1605 7.99981 14.5986 7.99981H19.3393C19.9245 7.99981 20.222 7.29584 19.8055 6.8794L13.1209 0.196569C12.7043 -0.219868 12.0002 0.0676718 12.0002 0.662583ZM14.5759 10.0282C12.0336 10.0282 9.96986 7.96441 9.96986 5.42209V0.0583083H1.99397C0.897287 0.0583083 0 0.955595 0 2.05228V18.0041C0 19.1007 0.897287 19.998 1.99397 19.998H17.9457C19.0424 19.998 19.9397 19.1007 19.9397 18.0041V10.0282H14.5759ZM11.9998 12.2201C11.9998 13.3245 11.1046 14.2198 10.0002 14.2198C8.8958 14.2198 8.00052 13.3245 8.00052 12.2201H6.66742C6.66742 14.0607 8.15955 15.5529 10.0002 15.5529C11.8408 15.5529 13.3329 14.0607 13.3329 12.2201H11.9998ZM4.44559 13.331C4.44559 13.9446 3.94821 14.442 3.33467 14.442C2.72112 14.442 2.22375 13.9446 2.22375 13.331C2.22375 12.7175 2.72112 12.2201 3.33467 12.2201C3.94821 12.2201 4.44559 12.7175 4.44559 13.331ZM16.6657 14.442C17.2793 14.442 17.7766 13.9446 17.7766 13.331C17.7766 12.7175 17.2793 12.2201 16.6657 12.2201C16.0522 12.2201 15.5548 12.7175 15.5548 13.331C15.5548 13.9446 16.0522 14.442 16.6657 14.442Z">
                                                                </path>
                                                                <path fill="currentColor" className="hidden-vu5JrP" fillRule="evenodd" clipRule="evenodd" d="M12.0002 0.662583V5.40204C12.0002 6.83974 13.1605 7.99981 14.5986 7.99981H19.3393C19.9245 7.99981 20.222 7.29584 19.8055 6.8794L13.1209 0.196569C12.7043 -0.219868 12.0002 0.0676718 12.0002 0.662583ZM14.5759 10.0282C12.0336 10.0282 9.96986 7.96441 9.96986 5.42209V0.0583083H1.99397C0.897287 0.0583083 0 0.955595 0 2.05228V18.0041C0 19.1007 0.897287 19.998 1.99397 19.998H17.9457C19.0424 19.998 19.9397 19.1007 19.9397 18.0041V10.0282H14.5759ZM12 13H11.2H8.8H8C8 14.1046 8.89543 15 10 15C11.1046 15 12 14.1046 12 13ZM17.7766 13.331C17.7766 13.9446 17.2793 14.442 16.6657 14.442C16.0522 14.442 15.5548 13.9446 15.5548 13.331C15.5548 12.7175 16.0522 12.2201 16.6657 12.2201C17.2793 12.2201 17.7766 12.7175 17.7766 13.331ZM2 12.2361L2.53532 11L5.62492 12.7835C5.79161 12.8797 5.79161 13.1203 5.62492 13.2165L2.53532 15L2 13.7639L3.32339 13L2 12.2361Z">
                                                                </path>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </button>
                                            </div>
                                            <div className="buttonContainer-28fw2U">
                                                <button tabIndex={0} title="Select emoji" type="button" className="emojiButton emojiButton-3uL3Aw button-318s1X button-38aScr lookBlank-3eh9lL colorBrand-3pXr91 grow-q77ONN">
                                                    <div className="contents-18-Yxp">
                                                        <div className="sprite-2iCowe" style={{ backgroundPosition: '0px 0px', backgroundSize: '242px 110px', transform: 'scale(1)', filter: 'grayscale(100%)' }}>
                                                        </div>
                                                    </div>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="characterCount-1cRDo2">
                                    <div className="flairContainer-2Txy_E" />
                                </div>
                                <div className="container-JHR0NT hidden-1Pp_-F" tabIndex={-1} style={{ minWidth: '120px' }}>
                                    <div className="stickerResults-3HacYG" tabIndex={-1} aria-orientation="horizontal" />
                                    <div className="bottomInformationTextContainer-2lvA_a">
                                        <div className="textDivider-3RoZIQ" />
                                        <div className="colorStandard-2KCXvj size14-e6ZScH descriptionText-1ZKuLr" style={{ maxWidth: '120px' }}>
                                            <div className="keybindShortcut-1BD6Z1 keybind-25ROM8">
                                                <span>
                                                    <svg width={10} height={10} xmlns="http://www.w3.org/2000/svg" className="bindArrow-2X3Aom up-2cOsD2">
                                                        <g fill="#FFFFFF">
                                                            <polygon transform="translate(5.025000, 5.000000) scale(1, -1) translate(-5.025000, -5.000000) " points="4.16666667 10 4.16666672 3.33333333 1.25 6.25 0.05 5 5.00000005 0 9.99999967 5 8.75 6.25 5.83333338 3.33333333 5.83333333 10">
                                                            </polygon>
                                                        </g>
                                                    </svg>
                                                </span>
                                            </div>
                                            to select
                                        </div>
                                    </div>
                                    <div className="containerBackground-LlUax5" />
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
                <div className="layerContainer-yqaFcK" />
            </main>
            <SideMemberList selectedServer={selectedServer} setSelectedServer={setSelectedServer} />
        </div>
    </div>
}
