const { app, BrowserWindow, Menu } = require('electron');
const electron = require('electron')
const path = require('path');
const menu = electron.Menu;

if (require('electron-squirrel-startup')) { 
  app.quit();
}

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
  });

  mainWindow.maximize()
  mainWindow.loadFile(path.join(__dirname, 'index.html'));
  mainWindow.setMenuBarVisibility(true)
};


app.on('ready', function () {
  createWindow();
  const template = [
    {
      label: 'File',
      submenu: [
        {
          label: 'New file'
        },
        {
          label: 'New window'
        },
        {
          type: 'separator'
        },
        {
          label: "Open Image"
        },
        {
          type: 'separator'
        },
        {
          label: 'Export as PNG'
        },
        {
          label: 'Export as JPEG'
        },
        {
          label: 'Export as other'
        },
        {
          type: 'separator'
        },
        {
          label: 'Save Project as'
        },
      ]
    },
    {
      label: "Edit",
      submenu: [
        {
          label: "Undo"
        },
        {
          label: "Redo"
        },
        {
          type: 'separator'
        },
        {
          label: "Fade"
        },
        {
          label: "Darken"
        },
        {
          type: 'separator'
        },
        {
          label: "Copy",
          role: "copy"
        },
        {
          label: "Paste",
          role: "paste"
        },
        {
          label: "Cut",
          role: "cut"
        },
      ]
    },
    {
      label: "Settings",
      submenu: [
        {
          label: "Colour Palletes"
        },
        {
          label: "prefrences"
        },
        {
          type: 'separator'
        },
        {
          label: "Exit",
          role: "quit"
        },
        {
          type: 'separator'
        },
        { role: 'reload' },
      { role: 'forceReload' },
      { role: 'toggleDevTools' },
      { type: 'separator' },
      { role: 'resetZoom' },
      { role: 'zoomIn' },
      { role: 'zoomOut' },
      { type: 'separator' },
      { role: 'togglefullscreen' }
      ]
    }
  ]
  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});


