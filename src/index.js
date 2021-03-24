const { app, BrowserWindow, Menu } = require('electron');
const electron = require('electron')
const path = require('path');
const menu = electron.Menu;

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) { // eslint-disable-line global-require
  app.quit();
}

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
  });

  // and load the index.html of the app.
  mainWindow.loadFile(path.join(__dirname, 'index.html'));
  mainWindow.setMenuBarVisibility(true)
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.

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
      ]
    }
  ]
  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
})



// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
