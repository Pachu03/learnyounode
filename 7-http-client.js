let http = require('http');

let url = process.argv[2];

http.get(url,(res)=>{
    res.setEncoding('utf-8');
    res.on('data',console.log);
    res.on('error',console.error);
}).on('error',console.error)