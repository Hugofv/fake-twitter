var jsonServer = require('json-server')
var server = jsonServer.create()
var db = require('./db.json')

var router = jsonServer.router(db)
var middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)

var port = Number(process.env.PORT || 3000);
server.listen(port, function () {
  console.log('JSON Server is running')
})