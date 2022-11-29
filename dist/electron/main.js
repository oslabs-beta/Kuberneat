// const { app, BrowserWindow } = require('electron')
// const path = require('path')
// function createWindow () {
//   const win = new BrowserWindow({
//     width: 800,
//     height: 600,
//     // webPreferences: {
//     //   preload: path.join(__dirname, 'preload.js')
//     // }
//   })
//   // win.loadFile('index.html')
//   win.loadURL('http://localhost:8080');
// }
// app.whenReady().then(createWindow);
// app.whenReady().then(() => {
//   createWindow()
//   app.on('activate', () => {
//     if (BrowserWindow.getAllWindows().length === 0) {
//       createWindow()
//     }
//   })
// })
// app.on('window-all-closed', () => {
//   if (process.platform !== 'darwin') {
//     app.quit()
//   }
// })
const { BrowserWindow, app } = require('electron');
function createWindow() {
    const win = new BrowserWindow({
        width: 1200,
        height: 800,
        backgroundColor: 'white',
        webPreferences: {
            nodeIntegration: false,
            // worldSafeExecuteJavascript: true,
            contextIsolation: true,
        },
    });
    win.loadURL('http://localhost:8080');
}
app.whenReady().then(createWindow);
