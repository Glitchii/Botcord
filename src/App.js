import './assets/styles/style.css';
import { useState, useEffect, useRef } from 'react';
import Home from './Home';
import { Base } from './Base';
import { SVGTemplates } from './SVGTemplates';
import Nav from './Nav';

const { ipcRenderer } = window.require('electron');

// const socket = new WebSocket("ws://localhost:1040");
// socket.onmessage = function (event) {
// 	var data = event.data
// 	console.log(data, typeof data);
// }
// socket.onopen = function () {
// 	socket.send('Hello server!')
// }

function App() {
	const [selectedServer, setSelectedServer] = useState(null);
	const [allGuilds, setAllGuilds] = useState(null);
	const counter = useRef(0);
	
	useEffect(() => {
		ipcRenderer.send('getGuilds');
		
		ipcRenderer.on('err', (event, msg) => alert(msg))
		ipcRenderer.on('guild', (event, data) => {
			data = JSON.parse(data);
			// console.log('Guild: ', data); // Debug
			setSelectedServer(data);
		});

		ipcRenderer.on('guilds', (event, data) => {
			data = JSON.parse(data);
			// console.log('Guilds: ', data); // Debug
			setAllGuilds(data);
		});

	}, []);

	return (
		<div id="app-mount" className="appMount">
			<SVGTemplates />
			<div className="app-1q1i1E">
				{/* <div className="renderCounter">App.js rendered {counter.current++} times</div> */}
				<div className="app-2rEoOp">
					<div className="bg-h5JY_x" />
					<div className="layers-3iHuyZ layers-3q14ss">
						<div className="layer-3QrUeG baseLayer-35bLyl">
							<div className="container-2lgZY8">
								<Nav selectedServer={selectedServer} setSelectedServer={setSelectedServer} allGuilds={allGuilds} setAllGuilds={setAllGuilds} />
								<div className="base sections">
									<Base selectedServer={selectedServer} setSelectedServer={setSelectedServer} allGuilds={allGuilds} setAllGuilds={setAllGuilds} />
									<Home />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;