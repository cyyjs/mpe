const { app } = require('electron')
// const fs = require('fs-extra')
const path = require('path')

const USER_DATE_PATH = app.getPath('userData')
const EXAMPLE_PATH = path.resolve(app.getAppPath(), '../example/echarts.md')

module.exports = {
  USER_DATE_PATH,
  EXAMPLE_PATH
}
