import { useEffect, useState } from 'react';
import BotNameTag from './BotNameTag.js';
import Channels from './Channels';
import Chat from './Chat.js';
const { ipcRenderer } = window.require('electron');

export function Base({ selectedServer, setSelectedServer, allGuilds, setAllGuilds }) {
    const [selectedChannel, setSelectedChannel] = useState(null);
    const [selectedChannelMessages, setSelectedChannelMessages] = useState(null);
    const [guildChannels, setGuildChannels] = useState(null);
    const [guild, setGuild] = useState(null);

    useEffect(() => {
        ipcRenderer.on('guildJoin', event => {
            console.log('Guild Join;'); // Debug
            ipcRenderer.send('getGuilds');
        });

        ipcRenderer.on('guildDelete', (event, guildID) => {
            console.log('Guild Leave: ', guildID, selectedServer, selectedServer?.id); // Debug
            if (guildID === selectedServer?.id)
                setSelectedServer(null);

            ipcRenderer.send('getGuilds');
        });
    }, []);

    useEffect(() => {
        let homeBtn = document.querySelector('.homeBtn'),
            homeView = document.querySelector('.base .base-inner.home'),
            serverView = document.querySelector('.base .base-inner.serverView');

        if (selectedServer) {
            homeBtn.classList.remove('selected');
            serverView.classList.remove('hidden');
            homeView.classList.add('hidden');

            let channelTypes = ['text', 'rules'],
                channels = selectedServer.channels?.filter(e => channelTypes.includes(e.type));

            if (!channels?.length) console.log('No Text Channels');
            // console.log('Channel selected: ', channels[0]); // Debug
            setSelectedChannel(channels[0]);
        } else {
            homeBtn.classList.add('selected');
            serverView.classList.add('hidden');
            homeView.classList.remove('hidden');
            setSelectedChannel(null);
            setSelectedChannelMessages(null);
        }

    }, [selectedServer]);

    return <div className="base-inner serverView hidden">
        <div className="sidebar">
            <nav className="container-3w7J-x" title={`${selectedServer?.name} (server)`}>
                <div className="container-1taM1r clickable-25tGDB" tabIndex={0}>
                    <header className="header-2V-4Sw">
                        <h1 className="name-1jkAdW">{selectedServer?.name}</h1>
                        <svg width={18} height={18} className="button-1w5pas">
                            <g fill="none" fillRule="evenodd">
                                <path d="M0 0h18v18H0" />
                                <path stroke="currentColor" d="M4.5 4.5l9 9" strokeLinecap="round" />
                                <path stroke="currentColor" d="M13.5 4.5l-9 9" strokeLinecap="round" />
                            </g>
                        </svg>
                    </header>
                </div>
                <div className="positionedContainer-3LNR6L">
                    <div className="unreadTop-3rAB3r unread-15xhX5 container-35XQWE">
                        <div className="bar-30k2ka unreadBar-3t3sYc unread-1xRYoj active-1SSsBb" style={{ transform: 'translateY(-180%)' }}><span className="text-2e2ZyG">New unreads</span></div>
                    </div>
                </div>
                <div className="scroller-RmtA4e thin-1ybCId scrollerBase-289Jih fade-2kXiP2 channelsWrapper" title="Channels" orientation="vertical" id="channels" tabIndex={0} style={{ overflow: 'hidden scroll', paddingRight: '0px' }}>
                    <div className="content-3YMskv" style={{ height: '838px' }}>
                        <div style={{ height: '0px' }} />
                        <div style={{ height: '16px', display: 'none' }} /> {/* Event Padding div */}
                        <Channels channels={selectedServer?.channels} guildID={selectedServer?.id}
                            rulesChannel={selectedServer?.rulesChannelID} selectedChannel={selectedChannel}
                            setSelectedChannel={setSelectedChannel} selectedServer={selectedServer}
                            setSelectedChannelMessages={setSelectedChannelMessages} />
                    </div>
                </div>
                <div className="unreadBottom-1_LF_w unread-15xhX5 container-35XQWE">
                    <div className="bar-30k2ka unreadBar-3t3sYc unread-1xRYoj active-1SSsBb" style={{ transform: 'translateY(180%)' }}><span className="text-2e2ZyG">New unreads</span></div>
                </div>
            </nav>
            <section className="panels-j1Uci_" title="User area">
                <BotNameTag />
            </section>
        </div>
        <Chat selectedServer={selectedServer} setSelectedServer={setSelectedServer} selectedChannel={selectedChannel}
            setSelectedChannel={setSelectedChannel} selectedChannelMessages={selectedChannelMessages}
            setSelectedChannelMessages={setSelectedChannelMessages} />
    </div>
}