const express = require('espress');
const aboutRouter = express.Router();

aboutRouter.route('/about')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('/about')
})
.post((req, res) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /about')
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /about')
})
.delete((req, res) => {
    res.statusCode = 403;
    res.end('DELETE operation not supported on /about')
})