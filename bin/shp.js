var debug = require('debug')('bin/shp')
var usage = require('../lib/util/usage.js')('shp.txt')

module.exports = {
  name: 'shp',
  command: handleShp,
  options: [
    {
      name: 'import',
      boolean: false,
      abbr: 'i'
    },
    {
      name: 'export',
      boolean: false,
      abbr: 'e'
    }
  ]
}


function handleShp (args) {
  debug('handleShp', args)

  if (args.help || args._.length === 0) {
    return usage()
  }

  
}