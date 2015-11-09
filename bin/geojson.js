var debug = require('debug')('bin/geojson')
var abort = require('../lib/util/abort.js')
var usage = require('../lib/util/usage.js')('geojson.txt')

module.exports = {
  name: 'geojson',
  command: handleGeojson,
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


function handleGeojson (args) {
  debug('handleGeojson', args)

  if (args.help || args._.length === 0) {
    return usage()
  }

  
}