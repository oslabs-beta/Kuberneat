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
