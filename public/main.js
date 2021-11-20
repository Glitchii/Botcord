require('dotenv').config();

const url = require('url');
const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const { Client, Intents } = require('discord.js');
const net = require('net');
const exec = require('child_process').exec;
const { guildJson } = require('./include')
const port = process.env.PORT ? (process.env.PORT - 100) : 3000;

process.env.START_URL &&= process.env.START_URL.replace(/:\d+/, ':' + port);

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) { // eslint-disable-line global-require
	app.quit();
}

const bot = new Client({ intents: [Intents.ALL] });
// const bot = new Client({ intents: [Intents.FLAGS.GUILD_PRESENCES, Intents.FLAGS.GUILD_MEMBERS] });
console.log('Starting DiscordJS...');
bot.login(process.env.TOKEN);

const guildID = '664967447534764033';
const startUrl = process.env.START_URL || url.format({
	pathname: path.join(__dirname, '/../build/index.html'),
	protocol: 'file:',
	slashes: true
});

let startedElectron, getData, mainWindow,
	sendData = async () => await mainWindow.webContents.send('recv', JSON.stringify(await getData()));

// const WebSocket = require("ws")
// const wss = new WebSocket.Server({ port: 1040 })

const createWindow = () => {
	// Create the browser window.
	mainWindow = new BrowserWindow({
		width: 1523,
		height: 825,
		minWidth: 940,
		minHeight: 475,
		darkTheme: true,
		// alwaysOnTop: true,
		x: 1080,
		y: 1920,
		title: 'BotCord',
		autoHideMenuBar: true,
		icon: path.join(__dirname, 'images/icon.co'),
		// frame: false,
		// backgroundColor: '#202225',
		webPreferences: {
			nodeIntegration: true,
			contextIsolation: false,
			// enableRemoteModule: true,
			preload: path.join(__dirname, 'preload.js'),
		},
	});

	// Display a loading page untill the Discord client is loaded.
	mainWindow.loadFile(path.join(__dirname, 'loading.html'));

	// wss.on('connection', w => {
	// 	w.on('message', data => {
	// 		console.log(data)
	// 	})
	// 	w.on('close', () => {
	// 		console.log("Closed")
	// 	})
	// 	w.send({ lorem: "ipsum", dolor: false, sit: 1 })
	// })

	bot.on('ready', () => {
		console.log(`DiscordJS (${bot.user.username}) is loaded`);

		getData = async () => {
			let allChannels = [], guild = bot.guilds.cache.get(guildID),
				channels = guild.channels.cache,
				addCat = (category, channel) => {
					category['channels'] = channel ? [channel] : [];
					allChannels.push(category);
					// console.log(category?.children)
				}

			channels.forEach(c => {
				if (!c.deleted) {
					if (!c.parentID || c.type === 'category' && !c.deleted) addCat(c);
					else {
						let channelFilter = chnl => chnl.id === c.parentID;
						if (allChannels.some(channelFilter)) allChannels.filter(channelFilter)[0].channels.push(c);
						else addCat(c.parent, c);
					}
				}
			});

			return { guild, channels, allChannels, guilds: bot.guilds.cache, bot: { user: bot.user, presence: bot.presence } };
		}

		const client = new net.Socket();

		const tryConnecting = setInterval(() => {
			client.connect({ port }, () => {
				client.end();
				if (!startedElectron) {
					console.log('Starting page.');
					startedElectron = true;
					// exec('npm run electron');
					clearInterval(tryConnecting);
					mainWindow.loadURL(startUrl);
					mainWindow.webContents.openDevTools();
				}
			}).on('error', _ => null);
		}, 1000);

		tryConnection();
	});
};


bot.on("guildCreate", async guild => {
	await sendData();
	console.log(`Joined guild ${guild.name}`);
});

// say when bot leaves a server
bot.on("guildDelete", async guild => {
	await sendData();
	console.log(`Left guild ${guild.name}`);
});

app.on('ready', createWindow);
app.on('window-all-closed', () => {
	if (process.platform !== 'darwin')
		app.quit();
});

app.on('activate', () => {
	// On OS X it's common to re-create a window in the app when the
	// dock icon is clicked and there are no other windows open.
	if (BrowserWindow.getAllWindows().length === 0)
		createWindow();
});

ipcMain.on('getAllData', async (event, arg) => {
	let data = await getData(), jsonData = JSON.stringify(data);
	event.sender.send('allData', jsonData);
	// mainWindow.webContents.send('recv', data);
});

ipcMain.on('getGuilds', async (event, args) =>{
	let guilds = JSON.stringify(await bot.guilds.cache.map(guildJson));
	event.sender.send('guilds', guilds);
});

ipcMain.on('getGuild', async (event, args) => {
	let guild = bot.guilds.cache.get(args.guildID);
	if (!guild) return event.sender.send('err', `Server with ID '${args.guildID}' not found`);

	event.sender.send('guild', JSON.stringify(guildJson(guild)));
});

ipcMain.on('getClient', async (event, args) => {
	event.sender.send('client', JSON.stringify({
		...bot.user.toJSON(),
		presence: bot.presence,
		guilds: bot.guilds.cache,
		avatarURL: bot.user.avatarURL?.() || bot.user.avatar || bot.user.defaultAvatarURL,
	}));
});
