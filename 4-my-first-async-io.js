var fs = require('fs')  
var fichero = process.argv[2]  
  
fs.readFile(fichero, function (err, contents) {  
  if (err) {
    return console.log(err);
  }
  
  var lineas = contents.toString().split('\n').length - 1  
  console.log(lineas)  
})