import React, { useEffect, useRef, useState } from 'react';
const { ipcRenderer } = window.require('electron');

export default function Channels({ channels, guildID, rulesChannel, selectedChannel, setSelectedChannel, selectedServer, setSelectedChannelMessages }) {
    useEffect(() => {
        ipcRenderer.on('channel', (event, data) => setSelectedChannel(JSON.parse(data)));
        ipcRenderer.on('channelMessages', (event, data) => {
            data = JSON.parse(data);
            // console.log('Selected Channel Messages: ', data);
            setSelectedChannelMessages(data);
        });
    }, []);

    if (!channels) return <div></div>;

    let allChannels = [],
        sortByPos = arr => arr.sort((a, b) => a.rawPosition - b.rawPosition);

    for (let c of channels.sort((x, y) => x.type === 'category' ? -1 : 1)) {
        if (!c.deleted) {
            if (c.type === 'category') {
                c['channels'] = [];
                allChannels.push(c);
            } else {
                let categoryFilter = cat => cat.id === c.parentID,
                    found = allChannels.find(categoryFilter);

                if (c.id === rulesChannel) c.type = 'rules';
                if (found) found.channels.push(c);
                else allChannels.push(c);
            }
        }
    };

    // allChannels.sort((x, y) => x.rawPosition - y.rawPosition);
    allChannels = [
        // Put none-category channels at the top sorted by rawPosition
        ...sortByPos(allChannels.filter(c => c.type !== 'category')),
        // then categories along with their channels sorted by rawPosition.
        ...sortByPos(allChannels.filter(c => c.type === 'category').map(c => {
            c.channels = sortByPos(c.channels);
            return c;
        }))
    ];

    return allChannels.map(channel => {
        switch (channel.type) {
            case 'category':
                return <Category key={channel.id} channel={channel} guildID={guildID} selectedChannel={selectedChannel}
                    setSelectedChannel={setSelectedChannel} selectedServer={selectedServer} setSelectedChannelMessages={setSelectedChannelMessages} />
            default:
                return <Channel key={channel.id} channel={channel} guildID={guildID} selectedChannel={selectedChannel}
                    setSelectedChannel={setSelectedChannel} selectedServer={selectedServer} setSelectedChannelMessages={setSelectedChannelMessages} />
        }
    })
};

function GetChannelIconPath({ channel }) {
    switch (channel.type) {
        case 'rules':
            return <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M33 34.5833V7.49998H35V36.6666H9C6.791 36.6666 5 34.801 5 32.5V7.49998C5 5.19894 6.791 3.33331 9 3.33331H31V30.4166H9C7.8955 30.4166 7 31.3485 7 32.5C7 33.6515 7.8955 34.5833 9 34.5833H33ZM23.9718 9.99998L15.8889 17.9915L12.7086 14.8441L10 17.5058L15.8885 23.3333L26.6667 12.6669L23.9718 9.99998Z"></path>
        case 'news':
            return <>
                <path d="M3.9 8.26H2V15.2941H3.9V8.26Z" fill="currentColor"></path>
                <path d="M19.1 4V5.12659L4.85 8.26447V18.1176C4.85 18.5496 5.1464 18.9252 5.5701 19.0315L9.3701 19.9727C9.4461 19.9906 9.524 20 9.6 20C9.89545 20 10.1776 19.8635 10.36 19.6235L12.7065 16.5242L19.1 17.9304V19.0588H21V4H19.1ZM9.2181 17.9944L6.75 17.3826V15.2113L10.6706 16.0753L9.2181 17.9944Z" fill="currentColor"></path>
            </>
        case 'voice':
            if (!channel.limited && channel.visible) return <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M11.383 3.07904C11.009 2.92504 10.579 3.01004 10.293 3.29604L6 8.00204H3C2.45 8.00204 2 8.45304 2 9.00204V15.002C2 15.552 2.45 16.002 3 16.002H6L10.293 20.71C10.579 20.996 11.009 21.082 11.383 20.927C11.757 20.772 12 20.407 12 20.002V4.00204C12 3.59904 11.757 3.23204 11.383 3.07904ZM14 5.00195V7.00195C16.757 7.00195 19 9.24595 19 12.002C19 14.759 16.757 17.002 14 17.002V19.002C17.86 19.002 21 15.863 21 12.002C21 8.14295 17.86 5.00195 14 5.00195ZM14 9.00195C15.654 9.00195 17 10.349 17 12.002C17 13.657 15.654 15.002 14 15.002V13.002C14.551 13.002 15 12.553 15 12.002C15 11.451 14.551 11.002 14 11.002V9.00195Z" aria-hidden="true"></path>
            return <>
                <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M15 12C15 12.0007 15 12.0013 15 12.002C15 12.553 14.551 13.002 14 13.002V15.002C15.654 15.002 17 13.657 17 12.002C17 12.0013 17 12.0007 17 12H15ZM19 12C19 12.0007 19 12.0013 19 12.002C19 14.759 16.757 17.002 14 17.002V19.002C17.86 19.002 21 15.863 21 12.002C21 12.0013 21 12.0007 21 12H19ZM10.293 3.29604C10.579 3.01004 11.009 2.92504 11.383 3.07904C11.757 3.23204 12 3.59904 12 4.00204V20.002C12 20.407 11.757 20.772 11.383 20.927C11.009 21.082 10.579 20.996 10.293 20.71L6 16.002H3C2.45 16.002 2 15.552 2 15.002V9.00204C2 8.45304 2.45 8.00204 3 8.00204H6L10.293 3.29604Z" />
                <path fill="currentColor" d="M21.025 5V4C21.025 2.88 20.05 2 19 2C17.95 2 17 2.88 17 4V5C16.4477 5 16 5.44772 16 6V9C16 9.55228 16.4477 10 17 10H19H21C21.5523 10 22 9.55228 22 9V5.975C22 5.43652 21.5635 5 21.025 5ZM20 5H18V4C18 3.42857 18.4667 3 19 3C19.5333 3 20 3.42857 20 4V5Z" />
            </>
        default:
            if (!channel.limited && channel.visible) return <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M5.88657 21C5.57547 21 5.3399 20.7189 5.39427 20.4126L6.00001 17H2.59511C2.28449 17 2.04905 16.7198 2.10259 16.4138L2.27759 15.4138C2.31946 15.1746 2.52722 15 2.77011 15H6.35001L7.41001 9H4.00511C3.69449 9 3.45905 8.71977 3.51259 8.41381L3.68759 7.41381C3.72946 7.17456 3.93722 7 4.18011 7H7.76001L8.39677 3.41262C8.43914 3.17391 8.64664 3 8.88907 3H9.87344C10.1845 3 10.4201 3.28107 10.3657 3.58738L9.76001 7H15.76L16.3968 3.41262C16.4391 3.17391 16.6466 3 16.8891 3H17.8734C18.1845 3 18.4201 3.28107 18.3657 3.58738L17.76 7H21.1649C21.4755 7 21.711 7.28023 21.6574 7.58619L21.4824 8.58619C21.4406 8.82544 21.2328 9 20.9899 9H17.41L16.35 15H19.7549C20.0655 15 20.301 15.2802 20.2474 15.5862L20.0724 16.5862C20.0306 16.8254 19.8228 17 19.5799 17H16L15.3632 20.5874C15.3209 20.8261 15.1134 21 14.8709 21H13.8866C13.5755 21 13.3399 20.7189 13.3943 20.4126L14 17H8.00001L7.36325 20.5874C7.32088 20.8261 7.11337 21 6.87094 21H5.88657ZM9.41045 9L8.35045 15H14.3504L15.4104 9H9.41045Z"></path>
            return <>
                <path fill="currentColor" d="M14 8C14 7.44772 13.5523 7 13 7H9.76001L10.3657 3.58738C10.4201 3.28107 10.1845 3 9.87344 3H8.88907C8.64664 3 8.43914 3.17391 8.39677 3.41262L7.76001 7H4.18011C3.93722 7 3.72946 7.17456 3.68759 7.41381L3.51259 8.41381C3.45905 8.71977 3.69449 9 4.00511 9H7.41001L6.35001 15H2.77011C2.52722 15 2.31946 15.1746 2.27759 15.4138L2.10259 16.4138C2.04905 16.7198 2.28449 17 2.59511 17H6.00001L5.39427 20.4126C5.3399 20.7189 5.57547 21 5.88657 21H6.87094C7.11337 21 7.32088 20.8261 7.36325 20.5874L8.00001 17H14L13.3943 20.4126C13.3399 20.7189 13.5755 21 13.8866 21H14.8709C15.1134 21 15.3209 20.8261 15.3632 20.5874L16 17H19.5799C19.8228 17 20.0306 16.8254 20.0724 16.5862L20.2474 15.5862C20.301 15.2802 20.0655 15 19.7549 15H16.35L16.6758 13.1558C16.7823 12.5529 16.3186 12 15.7063 12C15.2286 12 14.8199 12.3429 14.7368 12.8133L14.3504 15H8.35045L9.41045 9H13C13.5523 9 14 8.55228 14 8Z" />
                <path fill="currentColor" d="M21.025 5V4C21.025 2.88 20.05 2 19 2C17.95 2 17 2.88 17 4V5C16.4477 5 16 5.44772 16 6V9C16 9.55228 16.4477 10 17 10H19H21C21.5523 10 22 9.55228 22 9V5.975C22 5.43652 21.5635 5 21.025 5ZM20 5H18V4C18 3.42857 18.4667 3 19 3C19.5333 3 20 3.42857 20 4V5Z" />
            </>
    }
}

function Channel({ channel, guildID, info, selectedChannel, setSelectedChannel, selectedServer, setSelectedChannelMessages }) {
    const channelRef = useRef(null);

    useEffect(() => {
        if (selectedChannel?.id === channel.id)
            if (channel.type !== 'voice')
                ipcRenderer.send('getChannelMessages', { guildID, channelID: channel.id });
    }, [selectedChannel]);

    function channelClicked(e) {
        let channel = e.target.closest('.channel'),
            guildID = selectedServer?.id,
            channelID = channel.dataset.id;

        // console.log(channel, channelID); // Debug
        if (!channelID)
            return alert('Channel ID dataset is missing, did you remove it?');

        ipcRenderer.send('getChannel', { guildID, channelID, entering: true });
    }

    // Scroll selected channel into view.
    // channelRef.current?.scrollIntoView({ block: 'center' });

    return <div ref={channelRef} className={`channel ${channel.type || 'text'} ${selectedChannel?.id === channel.id ? 'selected' : ''} ${!channel.visible ? 'inaccessible' : ''}`} data-id={channel.visible ? channel.id : undefined} onClick={channel.visible ? channelClicked : undefined}>
        <div className="iconVisibility channel-inner">
            <div className="content-1x5b-n">
                <a className="mainContent-u_9PKf" tabIndex={-1} title={`${channel.name} (${!channel.visible ? 'hidden ' : ''}${channel.type} channel)`}>
                    <div class="iconContainer-1BBaeJ">
                        <svg className="icon-1DeIlz" width={16} height={16} viewBox={channel.type === 'rules' ? '0 0 40 40' : '0 0 24 24'}>
                            <GetChannelIconPath channel={channel} />
                        </svg>
                    </div>
                    <div className="name-23GUGE overflow-WK9Ogt">
                        <div className="channelName-2YrOjO">{channel.name}</div>
                    </div>
                </a>
                <div className="children-3rEycc">
                    <div className="iconItem-F7GRxr iconBase-3LOlfs" title="Create invite" tabIndex={0}>
                        <svg className="actionIcon-PgcMM2" width={16} height={16} viewBox="0 0 16 16">
                            <path fill="currentColor" d="M14 2H16V3H14V5H13V3H11V2H13V0H14V2Z">
                            </path>
                            <path fill="currentColor" d="M6.5 8.00667C7.88 8.00667 9 6.88667 9 5.50667C9 4.12667 7.88 3.00667 6.5 3.00667C5.12 3.00667 4 4.12667 4 5.50667C4 6.88667 5.12 8.00667 6.5 8.00667Z">
                            </path>
                            <path fill="currentColor" d="M6.5 8.34C3.26 8.34 1 9.98666 1 12.34V13.0067H12V12.34C12 9.98 9.74 8.34 6.5 8.34Z">
                            </path>
                        </svg>
                    </div>
                    {!channel.visible && <div className="channelLock iconItem-F7GRxr iconBase-3LOlfs cursorPointer-B3uwDA" title="No permission to access channel" role="button" tabIndex={0} style={{ display: 'block' }}>
                        <svg name="LockClosed" width={24} height={24} viewBox="0 0 24 24" className="actionIcon-PgcMM2">
                            <path fill="currentColor" d="M17 11V7C17 4.243 14.756 2 12 2C9.242 2 7 4.243 7 7V11C5.897 11 5 11.896 5 13V20C5 21.103 5.897 22 7 22H17C18.103 22 19 21.103 19 20V13C19 11.896 18.103 11 17 11ZM12 18C11.172 18 10.5 17.328 10.5 16.5C10.5 15.672 11.172 15 12 15C12.828 15 13.5 15.672 13.5 16.5C13.5 17.328 12.828 18 12 18ZM15 11H9V7C9 5.346 10.346 4 12 4C13.654 4 15 5.346 15 7V11Z" className />
                        </svg>
                    </div>}
                </div>
            </div>
        </div>
    </div>
}

function Category({ channel: category, guildID, selectedChannel, setSelectedChannel, selectedServer, setSelectedChannelMessages }) {
    const categoryClicked = e => {
        let category = e.target.closest('.category')
        category.classList.toggle('fold');
        // TODO: Save fold state in local storage
    }

    return <>
        <div className={`category containerDefault-3tr_sE ${!category.visible ? 'inaccessible' : ''}`} draggable="true" onClick={categoryClicked}>
            <div className="iconVisibility-fhcwiH wrapper-PY0fhH clickable-536fPF">
                <div className="mainContent-2h-GEV" tabIndex={-1} title={`${category.name} (${category.type})`}>
                    <svg className="arrow arrow-gKvcEx-rpl arrow-gKvcEx icon-2yIBmh" width={24} height={24} viewBox="0 0 24 24">
                        <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M16.59 8.59004L12 13.17L7.41 8.59004L6 10L12 16L18 10L16.59 8.59004Z">
                        </path>
                    </svg>
                    <h2 className="name-3l27Hl container-2ax-kl">
                        <div className="overflow-WK9Ogt">{category.name}</div>
                    </h2>
                </div>
                <div className="children-L002ao" />
            </div>
        </div>
        <div className="categoryChannels">
            {category.channels.map(channel => <Channel key={channel.id} channel={channel} guildID={guildID} selectedChannel={selectedChannel}
                setSelectedChannel={setSelectedChannel} selectedServer={selectedServer} setSelectedChannelMessages={setSelectedChannelMessages} />)}
        </div>
    </>
}
