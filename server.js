var express = require('express');
var serveStatic = require('serve-static');
app = express();
app.use(serveStatic(__dirname + "/dist"));
var port = process.env.PORT || 5005;
app.listen(port);
console.log('server started '+ port);