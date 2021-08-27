const express = require('espress');
const homeRouter = express.Router();

homeRouter.route('/home')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('/home')
})
.post((req, res) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /home')
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /home')
})
.delete((req, res) => {
    res.statusCode = 403;
    res.end('DELETE operation not supported on /home')
})