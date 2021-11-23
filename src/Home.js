import React from 'react';
import BotNameTag from './BotNameTag';

export default function Home() {
    return <div className="base-inner home content-98HsJk" style={{ position: "relative" }}>
        <div className="sidebar">
            <nav className="privateChannels-1nO12o" title="Private channels">
                <div className="searchBar-6Kv8R2">
                    <button type="button" className="searchBarComponent-32dTOx">
                        Find or start a conversation
                    </button>
                </div>
                <div className="scroller-1JbKMe thin-1ybCId scrollerBase-289Jih fade-2kXiP2" tabIndex={0} style={{ overflow: "hidden scroll", paddingRight: 0 }}>
                    <div className="content-3YMskv" style={{ height: 5732 }}>
                        <div style={{ height: 8 }} />
                        <a className="channel-2QD9_O container-2Pjhx- selected-aXhQR6 " tabIndex={-1} href="/channels/@me">
                            <div className="layout-2DM8Md">
                                <div className="avatar-3uk_u9">
                                    <svg className="linkButtonIcon-Mlm5d6" width={16} height={16} viewBox="0 0 24 24">
                                        <g fill="none" fillRule="evenodd">
                                            <path fill="currentColor" fillRule="nonzero" d="M0.5,0 L0.5,1.5 C0.5,5.65 2.71,9.28 6,11.3 L6,16 L21,16 L21,14 C21,11.34 15.67,10 13,10 C13,10 12.83,10 12.75,10 C8,10 4,6 4,1.5 L4,0 L0.5,0 Z M13,0 C10.790861,0 9,1.790861 9,4 C9,6.209139 10.790861,8 13,8 C15.209139,8 17,6.209139 17,4 C17,1.790861 15.209139,0 13,0 Z" transform="translate(2 4)" />
                                            <path d="M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z" />
                                        </g>
                                    </svg>
                                </div>
                                <div className="content-3QAtGj">
                                    <div className="nameAndDecorators-5FJ2dg">
                                        <div className="name-uJV0GL">Friends</div>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a href="/store" className="channel-2QD9_O container-2Pjhx- clickable-1JJAn8" tabIndex={-1}>
                            <div className="layout-2DM8Md">
                                <div className="avatar-3uk_u9">
                                    <svg className="linkButtonIcon-Mlm5d6" width={24} height={24} viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M2.98966977,9.35789159 C2.98966977,9.77582472 2.63442946,10.1240466 2.20807287,10.1240466 L1.78171628,10.1240466 C1.35535969,10.1240466 0.999948837,9.77582472 0.999948837,9.35789159 C0.999948837,8.93995846 1.35535969,8.59173658 1.78171628,8.59173658 L2.20807287,8.59173658 C2.63442946,8.59173658 2.98966977,8.93995846 2.98966977,9.35789159 Z M22.2467643,9.14892503 C24.0942527,12.9800344 22.3888264,17.5772989 18.3384388,19.3882867 C14.4302837,21.1297305 9.74036124,19.457998 7.9638186,15.6268886 C7.60857829,14.8607335 7.3954,14.0248673 7.32428372,13.189001 L5.76091938,13.189001 C5.33456279,13.189001 4.97932248,12.840612 4.97932248,12.4226788 C4.97932248,12.0047457 5.33456279,11.6565238 5.76091938,11.6565238 L8.03493488,11.6565238 C8.46129147,11.6565238 8.81653178,11.3083019 8.81653178,10.8903688 C8.81653178,10.4724357 8.46129147,10.1240466 8.03493488,10.1240466 L4.41090388,10.1240466 C3.98454729,10.1240466 3.62913643,9.77582472 3.62913643,9.35789159 C3.62913643,8.93995846 3.98454729,8.59173658 4.41090388,8.59173658 L9.45606667,8.59173658 C9.88242326,8.59173658 10.2376636,8.24334752 10.2376636,7.82541439 C10.2376636,7.40748126 9.88242326,7.05925937 9.45606667,7.05925937 L7.3954,7.05925937 C6.75586512,7.05925937 6.18727597,6.57161499 6.18727597,5.87517123 C6.18727597,5.24827153 6.68474884,4.69091591 7.3954,4.69091591 L15.4250589,4.69091591 C18.267493,4.8303384 20.9676946,6.43235968 22.2467643,9.14892503 Z M13.2662961,8.38056332 C11.0193969,9.3919615 10.0341721,11.9973566 11.065955,14.1998642 C12.097738,16.4023718 14.755645,17.3681317 17.0025442,16.3567335 C19.249614,15.3453354 20.2346682,12.7399402 19.2028853,10.5374326 C18.1711023,8.33492503 15.5131953,7.36916515 13.2662961,8.38056332 Z M16.8462589,9.84548582 L18.2673907,12.2138293 C18.338507,12.3530846 18.338507,12.4227958 18.2673907,12.5620512 L16.8462589,14.9303946 C16.7751426,15.0696499 16.6330806,15.0696499 16.5619643,15.0696499 L13.7906465,15.0696499 C13.6485845,15.0696499 13.5774682,14.9999387 13.5065225,14.9303946 L12.0852202,12.5620512 C12.0142744,12.4227958 12.0142744,12.3530846 12.0852202,12.2138293 L13.5065225,9.84548582 C13.5774682,9.7062305 13.7197008,9.7062305 13.7906465,9.7062305 L16.5619643,9.7062305 C16.7041969,9.63651925 16.7751426,9.7062305 16.8462589,9.84548582 Z" />
                                    </svg>
                                </div>
                                <div className="content-3QAtGj">
                                    <div className="nameAndDecorators-5FJ2dg">
                                        <div className="name-uJV0GL">Nitro</div>
                                    </div>
                                </div>
                                <div className="children-gzQq2t" />
                            </div>
                        </a>
                        <h2 className="privateChannelsHeaderContainer-3NB1K1 container-2ax-kl">
                            <span className="headerText-2F0828">Direct messages</span>
                            <div className="privateChannelRecipientsInviteButtonIcon-3A3uTc iconWrapper-2OrFZ1 clickable-3rdHwn" title="Create DM" tabIndex={0}>
                                <svg x={0} y={0} className="privateChannelRecipientsInviteButtonIcon-3A3uTc icon-22AiRD" width={24} height={24} viewBox="0 0 18 18">
                                    <polygon fillRule="nonzero" fill="currentColor" points="15 10 10 10 10 15 8 15 8 10 3 10 3 8 8 8 8 3 10 3 10 8 15 8" />
                                </svg>
                            </div>
                        </h2>
                        <a className="channel-2QD9_O container-2Pjhx- clickable-1JJAn8" title="John Doe (direct message)" tabIndex={-1} href="/channels/@me/910963245064544256" data-user-id={193074947441033226}>
                            <div className="layout-2DM8Md">
                                <div className="avatar-3uk_u9">
                                    <div className="wrapper-3t9DeA" title="John Doe, Do Not Disturb" style={{ width: 32, height: 32 }}>
                                        <svg width={40} height={32} viewBox="0 0 40 32" className="mask-1l8v16 svg-2V3M55">
                                            <foreignObject x={0} y={0} width={32} height={32} mask="url(#svg-mask-avatar-status-round-32)">
                                                <div className="avatarStack-2Dr8S9">
                                                    <img src="//unsplash.it/32/32" alt=" " className="avatar-VxgULZ" />
                                                </div>
                                            </foreignObject>
                                            <rect width="10" height="10" x="22" y="22" fill="hsl(359, calc(var(--saturation-factor, 1) * 82.6%), 59.4%)" mask="url(#svg-mask-status-dnd)" class="pointerEvents-2zdfdO"></rect>
                                        </svg>
                                    </div>
                                </div>
                                <div className="content-3QAtGj">
                                    <div className="nameAndDecorators-5FJ2dg">
                                        <div className="name-uJV0GL">
                                            <div className="overflow-WK9Ogt">John Doe</div>
                                        </div>
                                    </div>
                                    <div className="subText-1KtqkB" />
                                </div>
                                <div className="children-gzQq2t">
                                    <div className="closeButton-2GCmT5" tabIndex={0}>
                                        <svg className="closeIcon-rycxaQ" width={24} height={24} viewBox="0 0 24 24">
                                            <path fill="currentColor" d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </nav>
            <section className="panels-j1Uci_" title="User area">
                <BotNameTag />
            </section>
        </div>
        <div className="container-1D34oG">
            <section className="container-1r6BKw themed-ANHk51">
                <div className="children-19S4PO">
                    <div className="iconWrapper-2OrFZ1">
                        <svg x={0} y={0} className="icon-22AiRD" width={24} height={24} viewBox="0 0 24 24" >
                            <g fill="none" fillRule="evenodd">
                                <path fill="currentColor" fillRule="nonzero" d="M0.5,0 L0.5,1.5 C0.5,5.65 2.71,9.28 6,11.3 L6,16 L21,16 L21,14 C21,11.34 15.67,10 13,10 C13,10 12.83,10 12.75,10 C8,10 4,6 4,1.5 L4,0 L0.5,0 Z M13,0 C10.790861,0 9,1.790861 9,4 C9,6.209139 10.790861,8 13,8 C15.209139,8 17,6.209139 17,4 C17,1.790861 15.209139,0 13,0 Z" transform="translate(2 4)" />
                                <path d="M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z" />
                            </g>
                        </svg>
                    </div>
                    <h3 className="title-29uC1r fontDisplay-1dagSA base-1x0h_U size16-1P40sf">
                        Friends
                    </h3>
                    <div className="divider-3FBTu8" />
                    <div className="tabBar-ZmDY9v topPill-30KHOu" title="Friends" >
                        <div className="item-3HknzM item-PXvHYJ selected-3s45Ha themed-OHr7kt" tabIndex={0} >
                            Online
                        </div>
                        <div className="item-3HknzM item-PXvHYJ themed-OHr7kt" tabIndex={-1} >
                            All
                        </div>
                        <div className="item-3HknzM item-PXvHYJ themed-OHr7kt" tabIndex={-1} title="Pending" >
                            Pending
                        </div>
                        <div className="item-3HknzM item-PXvHYJ themed-OHr7kt" tabIndex={-1} >
                            Blocked
                        </div>
                        <div className="item-3HknzM item-PXvHYJ themed-OHr7kt" tabIndex={-1} title="Add friend" style={{ backgroundColor: "hsl(139, calc(var(--saturation-factor, 1) * 47.3%), 43.9%)", color: "hsl(0, calc(var(--saturation-factor, 1) * 0%), 100%)" }} >
                            <span>Add friend</span>
                        </div>
                    </div>
                </div>
                <div className="toolbar-1t6TWx">
                    <div className="inviteToolbar-3F-l2g">
                        <div className="iconWrapper-2OrFZ1 clickable-3rdHwn" title="New group DM" tabIndex={0} >
                            <svg x={0} y={0} className="icon-22AiRD" width={24} height={24} viewBox="0 0 24 24" >
                                <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M20.998 0V3H23.998V5H20.998V8H18.998V5H15.998V3H18.998V0H20.998ZM2.99805 20V24L8.33205 20H14.998C16.102 20 16.998 19.103 16.998 18V9C16.998 7.896 16.102 7 14.998 7H1.99805C0.894047 7 -0.00195312 7.896 -0.00195312 9V18C-0.00195312 19.103 0.894047 20 1.99805 20H2.99805Z" />
                            </svg>
                        </div>
                        <div className="divider-3FBTu8" />
                    </div>
                    <div className="iconWrapper-2OrFZ1 clickable-3rdHwn" title="Inbox" tabIndex={0} >
                        <svg x={0} y={0} className="icon-22AiRD" width={24} height={24} viewBox="0 0 24 24" fill="none" >
                            <path d="M19 3H4.99C3.88 3 3.01 3.89 3.01 5L3 19C3 20.1 3.88 21 4.99 21H19C20.1 21 21 20.1 21 19V5C21 3.89 20.1 3 19 3ZM19 15H15C15 16.66 13.65 18 12 18C10.35 18 9 16.66 9 15H4.99V5H19V15Z" fill="currentColor" />
                        </svg>
                    </div>
                    <a tabIndex={-1} className="anchor-3Z-8Bb anchorUnderlineOnHover-2ESHQB" href="https://support.discord.com" rel="noreferrer noopener" target="_blank">
                        <div className="iconWrapper-2OrFZ1 clickable-3rdHwn" title="Help" tabIndex={0}>
                            <svg x={0} y={0} className="icon-22AiRD" width={24} height={24} viewBox="0 0 24 24">
                                <path fill="currentColor" d="M12 2C6.486 2 2 6.487 2 12C2 17.515 6.486 22 12 22C17.514 22 22 17.515 22 12C22 6.487 17.514 2 12 2ZM12 18.25C11.31 18.25 10.75 17.691 10.75 17C10.75 16.31 11.31 15.75 12 15.75C12.69 15.75 13.25 16.31 13.25 17C13.25 17.691 12.69 18.25 12 18.25ZM13 13.875V15H11V12H12C13.104 12 14 11.103 14 10C14 8.896 13.104 8 12 8C10.896 8 10 8.896 10 10H8C8 7.795 9.795 6 12 6C14.205 6 16 7.795 16 10C16 11.861 14.723 13.429 13 13.875Z" />
                            </svg>
                        </div>
                    </a>
                </div>
            </section>
            <div className="tabBody-3YRQ8W">
                <div className="peopleColumn-29fq28" id="online-tab">
                    <div className="peopleList-3c4jOR auto-Ge5KZx scrollerBase-289Jih" tabIndex={0} style={{ overflow: "hidden scroll", paddingRight: 0 }}>
                        <div className="content-3YMskv" style={{ height: 2830 }}>
                            <div style={{ height: 0 }} />
                            <h2 className="title-30qZAO container-2ax-kl">Online — 1</h2>
                            <div className="peopleListItem-2nzedh" data-user-id={298043305927639041} tabIndex={-1} style={{ height: 62, opacity: 1 }}>
                                <div className="listItemContents-95HL3L">
                                    <div className="userInfo-2zN2z8">
                                        <div className="avatar-3W3CeO wrapper-3t9DeA" style={{ width: 32, height: 32 }}>
                                            <svg width={40} height={32} viewBox="0 0 40 32" className="mask-1l8v16 svg-2V3M55">
                                                <foreignObject x={0} y={0} width={32} height={32} mask="url(#svg-mask-avatar-status-round-32)">
                                                    <div className="avatarStack-2Dr8S9">
                                                        <img src="//unsplash.it/32/32" alt=" " className="avatar-VxgULZ" />
                                                    </div>
                                                </foreignObject>
                                                <rect width={10} height={10} x={22} y={22} fill="hsl(359, calc(var(--saturation-factor, 1) * 82.6%), 59.4%)" mask="url(#svg-mask-status-dnd)" className="pointerEvents-2zdfdO" />
                                            </svg>
                                        </div>
                                        <div className="text-37NqbO">
                                            <div className="discordTag-2_tqUA nameTag-m8r81H">
                                                <span className="username-2b1r56 username-31C1TQ">
                                                    John Doe
                                                </span>
                                                <span className="discriminator-22Okc1">#6969</span>
                                            </div>
                                            <div className="subtext-24R4-w">
                                                <div className="text-3MU_QQ">Do not disturb</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="actions-1SQwjn">
                                        <div className="actionButton-uPB8Fs" title="Message" tabIndex={0}>
                                            <svg className="icon-35-fSh" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                                <path fill="currentColor" d="M4.79805 3C3.80445 3 2.99805 3.8055 2.99805 4.8V15.6C2.99805 16.5936 3.80445 17.4 4.79805 17.4H7.49805V21L11.098 17.4H19.198C20.1925 17.4 20.998 16.5936 20.998 15.6V4.8C20.998 3.8055 20.1925 3 19.198 3H4.79805Z" />
                                            </svg>
                                        </div>
                                        <div className="actionButton-uPB8Fs" title="More" tabIndex={0}>
                                            <svg className="icon-35-fSh" width={24} height={24} viewBox="0 0 24 24">
                                                <g fill="none" fillRule="evenodd">
                                                    <path d="M24 0v24H0V0z" />
                                                    <path fill="currentColor" d="M12 16c1.1045695 0 2 .8954305 2 2s-.8954305 2-2 2-2-.8954305-2-2 .8954305-2 2-2zm0-6c1.1045695 0 2 .8954305 2 2s-.8954305 2-2 2-2-.8954305-2-2 .8954305-2 2-2zm0-6c1.1045695 0 2 .8954305 2 2s-.8954305 2-2 2-2-.8954305-2-2 .8954305-2 2-2z" />
                                                </g>
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="nowPlayingColumn-2sl4cE">
                    {/* TODO: Show empty text */} </div>
            </div>
        </div>
    </div>
}
