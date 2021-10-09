const http = require('http');
const fs = require('fs');

const path = '/Users/andresbornanfossi/TOP/basic-info/'

const getPage = (path, fileName) => fs.readFileSync(`${path}${fileName}.html`, 'utf-8');

const notFoundPage = getPage(path, '404');
const aboutPage = getPage(path, 'about');
const contactMePage = getPage(path, 'contact-me');
const indexPage = getPage(path, 'index');

const port = 8080;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    if (req.url === '/') {
        console.log('index');
        res.end(indexPage);
    }
    else if (req.url === '/about') {
        console.log('about');
        res.end(aboutPage);
    }
    else if (req.url === '/contact') {
        console.log('contact');
        res.end(contactMePage);
    }
    else {
        console.log('Page not found');
        res.status = 404;
        res.end(notFoundPage)
    }
})

server.listen(port, () => {
    console.log(`Serving on port ${port}`);
})