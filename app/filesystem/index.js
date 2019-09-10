const fs = require('fs-extra')
// const path = require('path')
const { EXAMPLE_PATH } = require('./envPaths')

class FileSystem {
  /**
   * get data for path
   * @param {String} path file path
   */
  getFileData (path) {
    return fs.readFileSync(path, 'utf8')
  }

  /**
   * get default file data
   */
  getDefaultFileData () {
    return this.getFileData(EXAMPLE_PATH)
  }
}

module.exports = new FileSystem()
