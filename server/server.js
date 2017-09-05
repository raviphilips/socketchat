var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);


/*app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});*/

io.on('connection', (socket) =>{
	console.log('User Connected...');

	socket.on('disconnect',() =>{
		console.log('User Disconnected...');

	});

	socket.on('add-message', (message, username) => {
		io.emit('message', {type: 'new-message', text: message, username: username});
	});
});

http.listen(4000, () =>{
	console.log('Server Runnging on Port 4000')
});