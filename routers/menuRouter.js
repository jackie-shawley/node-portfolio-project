const express = require('espress');
const menuRouter = express.Router();

menuRouter.route('/menu')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('/menu')
})
.post((req, res) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /menu')
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /menu')
})
.delete((req, res) => {
    res.statusCode = 403;
    res.end('DELETE operation not supported on /menu')
})