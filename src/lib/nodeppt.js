const { ipcRenderer } = require('electron')

class NodePPT {
  getDataSlides (data) {
    return ipcRenderer.sendSync('file:getDataSlides', data)
  }
}

export default new NodePPT()
