const { ipcMain } = require('electron')
const FileSystem = require('../filesystem')
const NodepptParser = require('../nodeppt/parser')

ipcMain.on('file:getDefaultFileData', (event) => {
  event.returnValue = FileSystem.getDefaultFileData()
  // event.reply('asynchronous-reply', 'pong')
})

ipcMain.on('file:getDataSlides', (event, data) => {
  event.returnValue = NodepptParser.getSlides(data)
})

// ipcMain.on('synchronous-message', (event, arg) => {
//   console.log(arg) // prints "ping"
//   event.returnValue = 'pong'
// })
