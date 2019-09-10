// const loaderUtils = require('loader-utils')
const yamlParser = require('nodeppt-parser/lib/yaml-parser')
const getParser = require('nodeppt-parser/lib/get-parser')
// const nodePptParser = require('nodeppt-parser')
// const a = loaderUtils.getOptions(nodePptParser)
// console.log('=', a)

class Parser {
  getHeader (data) {
    return yamlParser(data.split(/<slide.*>/i)[0])
  }

  getSlides (data) {
    let slidesStr = getParser([])(data)
    let slides = slidesStr.split('</section>').slice(0, -1).map(item => {
      return item + '</section>'
    })
    return slides
  }
}

module.exports = new Parser()
