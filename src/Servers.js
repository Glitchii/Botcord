import React from "react";
import { useState, useEffect } from 'react';
const { ipcRenderer } = window.require('electron');

export default function Servers({ selectedServer, setSelectedServer }) {
    const [guilds, setGuilds] = useState(null);
    const changeServer = e => {
        let guildID = e.target.dataset.id;

        // console.log(guildId)
        if (!guildID) return alert('Guild ID dataset is missing, did you remove it?');
        ipcRenderer.send('getGuild', { guildID });

        // console.log(guildId, selectedServer, e);
    }

    useEffect(() => {
        ipcRenderer.send('getGuilds');

        ipcRenderer.on('guild', (event, data) => {
            data = JSON.parse(data);
            // console.log('Guild: ', data); // Debug
            setSelectedServer(data);
        });

        ipcRenderer.on('guilds', (event, data) => {
            data = JSON.parse(data);
            // console.log('Guilds: ', data); // Debug
            setGuilds(data);
        });
    }, []);

    return !guilds ? <div></div> : guilds.map(guild => (
        <div className={`server sidebar-icon sidebar-sep ${selectedServer?.id === guild.id ? 'selected' : ''} ${guild.iconURL ? '' : 'noIcon'}`} key={guild.id}>
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