const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
    console.log('Server is online');
   fs.readFile('./index.html', (err, data) =>{
       if(err){
           throw err;
       }
       res.end(data);
   });
}).listen(8080, () => {
    console.log('8080 port is online');
});

server.on('error', (error) => {
    console.error(error);
});

