const { ipcRenderer } = require('electron')

class FileSystem {
  getDefaultFileData () {
    return ipcRenderer.sendSync('file:getDefaultFileData')
  }
}

export default new FileSystem()
