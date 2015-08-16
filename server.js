var aio = require('asterisk.io'),
    ami = null;
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var chunk = ''

ami = aio.ami(
    '192.168.43.149',   // Asterisk PBX machine 
 
    5038,               // the default port number setup 
                        // in "/etc/asterisk/manager.conf" 
                        // in "general" section 
 
    'mark',            // manager username 
 
    'mysecret'             // manager password 
);
 
ami.on('error', function(err){
    throw err;
});

app.get('/', function(req, res){
  res.sendfile('index.html');
//res.sendfile(__dirname + '/index1.html');
});

io.on('connection', function(socket){

ami.on('eventAny', function(data){
console.log(data.Event, data);
      //chunk = data.Uniqueid;
  //console.log('chunk display**********'+chunk);
  console.log('a user connected');
  //console.log(data.Peer.split("/")[1]);
  socket.emit('news', data);
});
});

http.listen(3000, function(){
  console.log('listening on *:3000','192.168.43.149');
});
