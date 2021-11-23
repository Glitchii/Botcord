import React, { useEffect, useState } from 'react'
const { ipcRenderer } = window.require('electron');
const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);

function Online({ members }) {
    if (!members?.length) return <div></div>;
    return <>
        <h2 className="membersGroup-v9BXpm container-2ax-kl" data-title={`Online, ${members.length} member${members.length === 1 ? '' : 's'}`}>
            <span>Online — {members.length}</span>
        </h2>
        {members.map((member, index) => {
            return <div className="member-3-YXUe container-2Pjhx- clickable-1JJAn8" tabIndex={-1} index={index} key={index} data-id={member.id}>
                <div className="layout-2DM8Md">
                    <div className="avatar-3uk_u9">
                        <div className="wrapper-3t9DeA" title={`${member.username}, ${member.status}`} style={{ width: '32px', height: '32px' }}>
                            <svg width={40} height={32} viewBox="0 0 40 32" className="mask-1l8v16 svg-2V3M55">
                                <foreignObject x={0} y={0} width={32} height={32} mask="url(#svg-mask-avatar-status-round-32)">
                                    <div className="avatarStack-2Dr8S9">
                                        <img src={member.avatarURL} alt=" " className="avatar-VxgULZ" />
                                    </div>
                                </foreignObject>
                                {/* TODO: Add streaming */}
                                {member.status === 'dnd' ?
                                    <rect width={10} height={10} x={22} y={22} fill="hsl(38, calc(var(--saturation-factor, 1) * 95.7%), 54.1%)" mask="url(#svg-mask-status-dnd)" className="pointerEvents-2zdfdO" /> :
                                    member.status === 'idle' ?
                                        <rect width={10} height={10} x={22} y={22} fill="hsl(38, calc(var(--saturation-factor, 1) * 95.7%), 54.1%)" mask="url(#svg-mask-status-idle)" className="pointerEvents-2zdfdO" />
                                        : /* Online */
                                        <rect width={10} height={10} x={22} y={22} fill="hsl(139, calc(var(--saturation-factor, 1) * 47.3%), 43.9%)" mask="url(#svg-mask-status-online)" className="pointerEvents-2zdfdO"></rect>
                                }
                            </svg>
                        </div>
                    </div>
                    <div className="content-3QAtGj">
                        <div className="nameAndDecorators-5FJ2dg">
                            <div className="name-uJV0GL">
                                <span className="roleColor-rz2vM0 desaturateUserColors" style={{ color: member?.color !== '#000000' ? member.color : 'inherit' }}>{member.username}</span>
                            </div>
                            {member.bot ?
                                <span className="botTag-3W9SuW botTagRegular-2HEhHi botTag-2WPJ74 px-10SIf7">
                                    {member.verified ?
                                        <svg title="Verified bot" className="botTagVerified-1klIIt" width={16} height={16} viewBox="0 0 16 15.2">
                                            <path d="M7.4,11.17,4,8.62,5,7.26l2,1.53L10.64,4l1.36,1Z" fill="currentColor">
                                            </path>
                                        </svg>
                                        : null}
                                    <span className="botText-1526X_">BOT</span>
                                </span>
                                : null}
                        </div>
                        <div className="subText-1KtqkB">
                            {member.presence?.type ?
                                <div className="user-activity">
                                    <div className="activityText">
                                        {member.presence.type === 'LISTENING' ? 'Listening to' : capitalize(member.presence.type.toLowerCase())}
                                        <strong> {member.presence.name}</strong>
                                    </div>
                                    {member.presence?.assets?.largeImage && member.presence?.assets?.smallImage ?
                                        <svg className="icon-15YQ1T" aria-hidden="false" width={16} height={16} viewBox="0 0 16 16">
                                            <path fill="currentColor" d="M6,7 L2,7 L2,6 L6,6 L6,7 Z M8,5 L2,5 L2,4 L8,4 L8,5 Z M8,3 L2,3 L2,2 L8,2 L8,3 Z M8.88888889,0 L1.11111111,0 C0.494444444,0 0,0.494444444 0,1.11111111 L0,8.88888889 C0,9.50253861 0.497461389,10 1.11111111,10 L8.88888889,10 C9.50253861,10 10,9.50253861 10,8.88888889 L10,1.11111111 C10,0.494444444 9.5,0 8.88888889,0 Z" transform="translate(3 3)" />
                                        </svg> : null}
                                </div> : null}
                        </div>
                    </div>
                </div>
            </div>
        })}
    </>
}

function Offline({ members }) {
    if (!members?.length) return <div></div>;
    return <>
        <h2 className="membersGroup-v9BXpm container-2ax-kl" data-title={`Offline, ${members.length} member${members.length === 1 ? '' : 's'}`}>
            <span>Offline — {members.length}</span>
        </h2>
        {members.map((member, index) => {
            return <div className="member-3-YXUe offline-3nJYBR container-2Pjhx- clickable-1JJAn8" tabIndex={-1} index={index} key={index} data-id={member.id} >
                <div className="layout-2DM8Md">
                    <div className="avatar-3uk_u9">
                        <div className="wrapper-3t9DeA" data-title={member.username} style={{ width: '32px', height: '32px' }}>
                            <svg width={40} height={32} viewBox="0 0 40 32" className="mask-1l8v16 svg-2V3M55">
                                <foreignObject x={0} y={0} width={32} height={32} mask="url(#svg-mask-avatar-default)">
                                    <div className="avatarStack-2Dr8S9">
                                        <img src={member.avatarURL} alt=" " className="avatar-VxgULZ" />
                                    </div>
                                </foreignObject>
                            </svg>
                        </div>
                    </div>
                    <div className="content-3QAtGj">
                        <div className="nameAndDecorators-5FJ2dg">
                            <div className="name-uJV0GL">
                                <span className="roleColor-rz2vM0 desaturateUserColors" style={{ color: member?.color !== '#000000' ? member.color : 'inherit' }}>{member.username}</span>
                            </div>
                            {member.bot ?
                                <span className="botTag-3W9SuW botTagRegular-2HEhHi botTag-2WPJ74 px-10SIf7">
                                    {member.verified ?
                                        <svg title="Verified bot" className="botTagVerified-1klIIt" width={16} height={16} viewBox="0 0 16 15.2">
                                            <path d="M7.4,11.17,4,8.62,5,7.26l2,1.53L10.64,4l1.36,1Z" fill="currentColor">
                                            </path>
                                        </svg>
                                        : null}
                                    <span className="botText-1526X_">BOT</span>
                                </span>
                                : null}
                        </div>
                        <div className="subText-1KtqkB" />
                    </div>
                </div>
            </div>
        })}
    </>
}

function Hoist({ roles }) {
    if (!roles?.some(r => r.members?.length)) return <div></div>;

    return roles.filter(r => r.members.length).map((role, index) => {
        return <>
            <h2 className="membersGroup-v9BXpm container-2ax-kl" data-title={`${role.name}, ${role.members.length} member${role.members.length === 1 ? '' : 's'}`} key={index}>
                <span>{role.name} — {role.members.length}</span>
            </h2>

            {role.members.map((member, index) => {
                return <div className="member-3-YXUe container-2Pjhx- clickable-1JJAn8" tabIndex={-1} index={index} key={index} data-id={member.id}>
                    <div className="layout-2DM8Md">
                        <div className="avatar-3uk_u9">
                            <div className="wrapper-3t9DeA" title={`${member.username}, ${member.status}`} style={{ width: '32px', height: '32px' }}>
                                <svg width={40} height={32} viewBox="0 0 40 32" className="mask-1l8v16 svg-2V3M55">
                                    <foreignObject x={0} y={0} width={32} height={32} mask="url(#svg-mask-avatar-status-round-32)">
                                        <div className="avatarStack-2Dr8S9">
                                            <img src={member.avatarURL} alt=" " className="avatar-VxgULZ" />
                                        </div>
                                    </foreignObject>
                                    {/* TODO: Add streaming */}
                                    {member.status === 'dnd' ?
                                        <rect width={10} height={10} x={22} y={22} fill="hsl(38, calc(var(--saturation-factor, 1) * 95.7%), 54.1%)" mask="url(#svg-mask-status-dnd)" className="pointerEvents-2zdfdO" /> :
                                        member.status === 'idle' ?
                                            <rect width={10} height={10} x={22} y={22} fill="hsl(38, calc(var(--saturation-factor, 1) * 95.7%), 54.1%)" mask="url(#svg-mask-status-idle)" className="pointerEvents-2zdfdO" />
                                            : /* Online */
                                            <rect width={10} height={10} x={22} y={22} fill="hsl(139, calc(var(--saturation-factor, 1) * 47.3%), 43.9%)" mask="url(#svg-mask-status-online)" className="pointerEvents-2zdfdO"></rect>
                                    }
                                </svg>
                            </div>
                        </div>
                        <div className="content-3QAtGj">
                            <div className="nameAndDecorators-5FJ2dg">
                                <div className="name-uJV0GL">
                                    <span className="roleColor-rz2vM0 desaturateUserColors" style={{ color: member?.color !== '#000000' ? member.color : 'inherit' }}>{member.username}</span>
                                </div>
                                {member.bot ?
                                    <span className="botTag-3W9SuW botTagRegular-2HEhHi botTag-2WPJ74 px-10SIf7">
                                        {member.verified ?
                                            <svg title="Verified bot" className="botTagVerified-1klIIt" width={16} height={16} viewBox="0 0 16 15.2">
                                                <path d="M7.4,11.17,4,8.62,5,7.26l2,1.53L10.64,4l1.36,1Z" fill="currentColor">
                                                </path>
                                            </svg>
                                            : null}
                                        <span className="botText-1526X_">BOT</span>
                                    </span>
                                    : null}
                            </div>
                            <div className="subText-1KtqkB">
                                {member.presence?.type ?
                                    <div className="user-activity">
                                        <div className="activityText">
                                            {member.presence.type === 'LISTENING' ? 'Listening to' : capitalize(member.presence.type.toLowerCase())}
                                            <strong> {member.presence.name}</strong>
                                        </div>
                                        {member.presence?.assets?.largeImage && member.presence?.assets?.smallImage ?
                                            <svg className="icon-15YQ1T" aria-hidden="false" width={16} height={16} viewBox="0 0 16 16">
                                                <path fill="currentColor" d="M6,7 L2,7 L2,6 L6,6 L6,7 Z M8,5 L2,5 L2,4 L8,4 L8,5 Z M8,3 L2,3 L2,2 L8,2 L8,3 Z M8.88888889,0 L1.11111111,0 C0.494444444,0 0,0.494444444 0,1.11111111 L0,8.88888889 C0,9.50253861 0.497461389,10 1.11111111,10 L8.88888889,10 C9.50253861,10 10,9.50253861 10,8.88888889 L10,1.11111111 C10,0.494444444 9.5,0 8.88888889,0 Z" transform="translate(3 3)" />
                                            </svg> : null}
                                    </div> : null}
                            </div>
                        </div>
                    </div>
                </div>
            })}
        </>
    })
}

export default function SideMemberList({ selectedServer, setSelectedServer }) {
    const [displayRoles, setDisplayRoles] = useState(null);

    useEffect(() => {
        if (selectedServer) {
            if (selectedServer?.id)
                ipcRenderer.send('getDisplayRoles', selectedServer.id);
        } else {
        }
    }, [selectedServer]);

    useEffect(() => {
        ipcRenderer.on('displayRoles', (event, data) => {
            data = JSON.parse(data);
            console.log('DisplayRoles: ', data); // Debug
            setDisplayRoles(data);
        });
    }, []);

    return <aside className="membersWrap-2h-GB4 hiddenMembers-2dcs_q membersList" data-title="Members list for general-i-think {#channel#} (channel)">
        <div className="members-1998pB thin-1ybCId scrollerBase-289Jih fade-2kXiP2" tabIndex={0} aria-orientation="vertical" style={{ overflow: 'hidden scroll', paddingRight: '0px' }}>
            <div className="content-3YMskv" style={{ height: '1352px' }}>
                <div style={{ height: '0px' }} />
                <Hoist roles={displayRoles?.hoist} />
                <Online members={displayRoles?.online} />
                <Offline members={displayRoles?.offline} />
            </div>
        </div>
    </aside>
}
