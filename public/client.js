var socket = io();
var connectionCount = document.getElementById('connection-count');
var statusMessage = document.getElementById('status-message');

socket.on('usersConnected', function(count){
  connectionCount.innerText = 'Connected Users: ' + count;
});

socket.on('statusMessage', function(message){
  console.log(message);
  statusMessage.innerText = message;
});

var buttons = document.querySelectorAll('#choices button');
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', buttonClick);
}

function buttonClick(){
  console.log(this.innerText);
  socket.send('voteCast', this.innerText);
}
