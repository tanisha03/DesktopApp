const electron = require('electron');
const url = require('url');
const path = require('path');

const { app, BrowserWindow, Menu } = electron;

let mainWindow;

// Listen for the app to be ready
app.on('ready', () => {
    // Create new window
    mainWindow = new BrowserWindow({
        autoHideMenuBar: true
    });

    // Load html file into window
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'main_window.html'),
        protocol: 'file',
        slashes: true
    }));
});
