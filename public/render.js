// const { ipcRenderer } = require('electron');
// (async () => {
//     async function sendIPC(cmd) {
//         const res = await ipcRenderer.sendSync('data', cmd);
//         console.log(res);
//         return res;
//     }

//     await sendIPC('data');
// })();

window.ipc = require('electron').ipcRenderer;