import React, { useState, useEffect } from 'react';
import Servers from './Servers.js';

export default function Nav({ selectedServer, setSelectedServer, allGuilds, setAllGuilds }) {

    return <nav className="wrapper-3NnKdC guilds-1SWlCJ" title="Servers sidebar">
        <ul tabIndex={0} aria-orientation="vertical" className="tree-2wKJdG">
            <div className="unreadMentionsIndicatorTop-2-tcdU">
                <div className="bar-30k2ka unreadMentionsBar-1Bu1dC unread-1xRYoj active-1SSsBb" aria-hidden="true" style={{ transform: 'translateY(-180%)' }}><span className="text-2e2ZyG" /></div>
            </div>
            <div className="scroller-1Bvpku none-2Eo-qx scrollerBase-289Jih" dir="ltr" style={{ overflow: 'hidden scroll', paddingRight: '0px' }}>
                <div className="homeBtn sidebar-icon sidebar-sep not-server create-server" onClick={() => setSelectedServer(null)}>
                    <div className="pill-new-server">
                        <div aria-hidden="true" className="notif-icon" /></div>
                    <div className="serverIcon">
                        <svg className="homeIcon" width={25} height={25} viewBox="0 0 256 256" style={{ fillRule: 'evenodd', clipRule: 'evenodd', strokeLinecap: 'round', strokeLinejoin: 'round' }}>
                            <rect x={0} y={0} style={{ fill: 'none' }} />
                            <path d="M74.402,80C91.745,74.572 109.827,71.873 128,72C146.172,71.873 164.254,74.572 181.598,80M181.597,176C164.254,181.428 146.172,184.127 128,184C109.828,184.127 91.746,181.428 74.402,176" style={{ fill: 'none', fillRule: 'nonzero', stroke: 'white', strokeWidth: '16px' }} />
                            <path d="M155.044,182.088L167.069,206.138C168.713,209.454 172.461,211.208 176.06,210.348C200.599,204.348 221.753,193.888 237.16,180.497C239.559,178.434 240.53,175.141 239.632,172.107L205.659,58.861C204.964,56.55 203.263,54.671 201.032,53.752C191.434,49.822 181.507,46.749 171.367,44.569C167.387,43.696 163.342,45.991 162.048,49.855L154.075,73.775M100.956,182.088L88.931,206.138C87.287,209.454 83.539,211.208 79.94,210.348C55.401,204.348 34.247,193.889 18.84,180.497C16.441,178.434 15.47,175.141 16.368,172.107L50.342,58.861C51.036,56.55 52.737,54.671 54.968,53.752C64.566,49.822 74.493,46.749 84.633,44.569C88.613,43.696 92.658,45.991 93.952,49.855L101.925,73.775" style={{ fill: 'none', fillRule: 'nonzero', stroke: 'white', strokeWidth: '16px' }} />
                            <path d="M100.956,182.088L88.931,206.138C87.287,209.454 83.539,211.208 79.94,210.348C55.401,204.348 34.247,193.889 18.84,180.497C16.441,178.434 15.47,175.141 16.368,172.107L50.342,58.861C51.036,56.55 52.737,54.671 54.968,53.752C64.566,49.822 74.493,46.749 84.633,44.569C88.613,43.696 92.658,45.991 93.952,49.855L101.925,73.775C119.228,71.408 136.772,71.408 154.075,73.775L162.048,49.855C163.342,45.991 167.387,43.696 171.368,44.569C181.507,46.749 191.434,49.822 201.032,53.752C203.263,54.671 204.964,56.55 205.659,58.861L239.632,172.107C240.53,175.141 239.559,178.434 237.16,180.497C221.753,193.888 200.599,204.348 176.06,210.348C172.461,211.208 168.713,209.454 167.069,206.138L155.044,182.088C146.087,183.371 137.049,184.01 128,184C118.951,184.01 109.914,183.371 100.956,182.088L100.956,182.088ZM96,132C102.623,132 108,137.377 108,144C108,150.623 102.623,156 96,156C89.377,156 84,150.623 84,144C84,137.377 89.377,132 96,132ZM160,132C166.623,132 172,137.377 172,144C172,150.623 166.623,156 160,156C153.377,156 148,150.623 148,144C148,137.377 153.377,132 160,132Z" style={{ fill: 'white' }} />
                        </svg>
                    </div>
                </div>
                <div className="sidebar-sep">
                    <div className="guildSeparator-33mFX6" />
                </div>
                <div className="servers" title="Servers">
                    <Servers selectedServer={selectedServer} setSelectedServer={setSelectedServer} allGuilds={allGuilds} setAllGuilds={setAllGuilds} />
                </div>
                <div className="sidebar-icon sidebar-sep not-server create-server green">
                    <div className="serverIcon">
                        <svg width="24" height="24">
                            <path fill="currentColor" d="M20 11.1111H12.8889V4H11.1111V11.1111H4V12.8889H11.1111V20H12.8889V12.8889H20V11.1111Z"></path>
                        </svg>
                    </div>
                </div>
                <div className="sidebar-icon sidebar-sep not-server explore-servers green">
                    <div className="serverIcon">
                        <svg width="24" height="24">
                            <path fill="currentColor" d="M12 10.9C11.39 10.9 10.9 11.39 10.9 12C10.9 12.61 11.39 13.1 12 13.1C12.61 13.1 13.1 12.61 13.1 12C13.1 11.39 12.61 10.9 12 10.9ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM14.19 14.19L6 18L9.81 9.81L18 6L14.19 14.19Z"></path>
                        </svg>
                    </div>
                </div>
            </div>
        </ul>
    </nav>
}
