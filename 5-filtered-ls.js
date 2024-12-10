const fs = require("fs");
const path = require("path");

const directorio = process.argv[2];
const extension = "." + process.argv[3];

function getFiles(directorio, extension, callback) {
  fs.readdir(directorio, function (err, list) {
    if (err) {
      return callback(err);
    }

    const filteredList = list.filter(function (file) {
      return path.extname(file) === extension;
    });

    callback(null, filteredList);
  });
}

getFiles(directorio, extension, function (err, list) {
  if (err) {
    return console.error("Error: " + err.message);
  }

  list.forEach((file) => {
    console.log(file);
  });
});
