import './assets/styles/style.css';
import { useState, useEffect } from 'react';
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

	useEffect(() => ipcRenderer.on('err', (event, msg) => alert(msg)), []);

	return (
		<div id="app-mount" className="appMount">
			<SVGTemplates />
			<div className="app-1q1i1E">
				<div className="app-2rEoOp">
					<div className="bg-h5JY_x" />
					<div className="layers-3iHuyZ layers-3q14ss">
						<div className="layer-3QrUeG baseLayer-35bLyl">
							<div className="container-2lgZY8">
								<Nav selectedServer={selectedServer} setSelectedServer={setSelectedServer} />
								<div className="base sections">
									<Base selectedServer={selectedServer} setSelectedServer={setSelectedServer} />
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