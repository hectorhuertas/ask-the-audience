var socket = io();
var connectionCount = document.getElementById('connection-count');
var statusMessage = document.getElementById('status-message');
var yourVote = document.getElementById('your-vote');
var allVotes = document.getElementById('all-votes');

socket.on('usersConnected', function(count){
  connectionCount.innerText = 'Connected Users: ' + count;
});

socket.on('statusMessage', function(message){
  statusMessage.innerText = message;
});

socket.on('voteCount', function (votes) {
  console.log(votes);
  allVotes.innerText = JSON.stringify(votes);
});

socket.on('yourVote', function (vote) {
  yourVote.innerText = 'Your vote: ' + vote;
});

var buttons = document.querySelectorAll('#choices button');
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', buttonClick);
}

function buttonClick(){
  // console.log(this.innerText);
  socket.send('voteCast', this.innerText);
}
