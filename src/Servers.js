import React from "react";
// import { useState, useEffect } from 'react';

export default function Servers({ guilds, selectedServer, setSelectedServer, changeServer }) {

    // const [selectedServer, setSelectedServer] = useState(null);
    // const [selectedChannel, setSelectedChannel] = useState(null);
    // const [selectedChannelData, setSelectedChannelData] = useState(null);
    // const [selectedChannelMessages, setSelectedChannelMessages] = useState(null);

    // useEffect(() => {
    //     if (selectedServer) {
    //         setSelectedChannel(selectedServer.channels[0]);
    //     }
    // }, [selectedServer]);

    // useEffect(() => {
    //     if (selectedChannel) {
    //         setSelectedChannelData(selectedChannel.data);
    //     }
    // }, [selectedChannel]);

    // useEffect(() => {
    //     if (selectedChannelData) {
    //         setSelectedChannelMessages(selectedChannelData.messages);
    //     }
    // }, [selectedChannelData]);

    // useEffect(() => {
    //     if (selectedChannelMessages) {
    //         setSelectedChannelUsers(selectedChannelMessages.users);
    //     }
    // }, [selectedChannelMessages]);

    return !guilds ? <div>...</div> : guilds.map(guild => (
        <div className={`sidebar-icon sidebar-sep create-server ${guild.iconURL ? '' : 'noIcon'}`} key={guild.id}>
            <div className="pill-new-server">
                <div className="notif-icon"></div>
            </div>
            <div className="serverIcon" data-id={guild.id} onClick={changeServer}>
                {guild.iconURL ?
                    <img className="serverIcon-inner" src={guild.iconURL} alt=" " width={48} height={48} /> :
                    <div className="serverIcon-inner" >{guild.name.substr(0, 4)}</div>
                }
            </div>
        </div>
    ));
};