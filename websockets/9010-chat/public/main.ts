declare const io: any;

$(function() {
  const $window = $(window);
  const $usernameInput = $('.usernameInput');
  const $messages = $('.messages');
  const $inputMessage = $('.inputMessage');
  const $loginPage = $('.login.page');
  const $chatPage = $('.chat.page');

  let username;
  let connected = false;

  let $currentInput = $usernameInput.focus();

  const socket: SocketIO.Server = io();

  $window.keydown(function(event) {
    if (event.which === 13) {
      if (username) {
        sendMessage();
      } else {
        setUsername();
      }
    }
  });

  function setUsername() {
    username = $usernameInput.val().toString().trim();

    if (username) {
      $loginPage.fadeOut();
      $chatPage.show();

      $currentInput = $inputMessage.focus();

      socket.emit('add user', username);
    }
  }

  function sendMessage() {
    var message = $inputMessage.val().toString().trim();

    if (message && connected) {
      $inputMessage.val('');

      addChatMessage({username: username, message: message});

      socket.emit('new message', message);
    }
  }

  function log(message) {
    var $el = $('<li>').addClass('log').text(message);
    $messages.append($el);
  }

  function addChatMessage(data) {
    var $usernameDiv = $('<span class="username"/>').text(data.username);
    var $messageBodyDiv = $('<span class="messageBody">').text(data.message);
    var $messageDiv =
        $('<li class="message"/>').append($usernameDiv, $messageBodyDiv);
    $messages.append($messageDiv);
  }

  socket.on('login', function(data) {
    connected = true;
    log('Welcome to the chat!');
  });

  socket.on('new message', function(data) {
    addChatMessage(data);
  });

  socket.on('user joined', function(data) {
    log(data + ' joined');
  });

  socket.on('user left', function(data) {
    log(data + ' left');
  });
});
