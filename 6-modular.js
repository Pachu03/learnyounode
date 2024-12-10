var filterFn = require('./6-solution-modular.js')
var direcctorio = process.argv[2]
var extension = process.argv[3]

filterFn(direcctorio, extension, function (err, list) {
  if (err)
    return console.error('There was an error:', err)

  list.forEach(function (file) {
    console.log(file)
  })
})