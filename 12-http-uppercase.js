let http = require('http');
let t2m = require('through2-map')
 
let server = http.createServer((req, res)=>{
   req.pipe(t2m((chunk)=>{
       return chunk.toString().toUpperCase();
   })).pipe(res);
});
server.listen(process.argv[2]);