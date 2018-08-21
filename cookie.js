const http = require('http');
const fs = require('fs');
const url = require('url');
const qs = require('querystring');

const parseCookies = (cookie = '') => 
    cookie
        .split(';')
        .map(v => v.split('='))
        .map(([k, ...vs]) => [k, vs.join('=')])
        .reduce((acc, [k, v]) => {
            acc[k.trim()] = decodeURIComponent(v);
            return acc;
        }, {});

const server = http.createServer((req, res) => {
    console.log(req.url, parseCookies(req.headers.cookie));
    if (req.url.startsWith('/login')){
        const { query } = url.parse(req.url);
        const { name } = qs.parse(query);
        const expires = new Date();
        expires.setMinutes(expires.getMinutes() + 5);
        res.writeHead(302, {
            Location: '/',
            'Set-Cookie': `name=${encodeURIComponent(name)}; Expires=${expires.toGMTString()}; HttpOnly; Path=/`});
        } else {
        fs.readFile('./login.html', (err, data) => {
            res.end(data);
        })
    }
}).listen(8080, () => {
    console.log('8080 server is online');
});

server.on('error', (error) => {
    console.error(error);
})