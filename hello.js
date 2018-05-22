var restify = require('restify');
const port = process.env.PORT || 3000


function respond(req, res, next) {
  res.send('hello ' + req.params.name);
  next();
}



var server = restify.createServer();
server.get('/hello/:name', respond);
server.head('/hello/:name', respond);

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});
