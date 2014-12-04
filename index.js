var app = require('http').createServer(function () {});
var io = require('socket.io')(app);

app.listen(1337);

var Bacon = require('baconjs').Bacon;

var conns1 = Bacon.fromBinder(function (sink) {
    io.on('connection', sink);
});
conns1.log();
console.log('Bacon.fromBinder works fine.');

setTimeout(function () {
    var conns2 = Bacon.fromEventTarget(io, 'connection');
    conns2.log();
    console.log('Bacon.fromEventTarget works fine.');
}, 3000);
