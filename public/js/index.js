    var socket = io();

    socket.on('connect', function () {
      console.log('Connected to server');

        // socket.emit('createMessage', {
        //     from:"Tal",
        //     text: "Yup that works for me"
        // });
    });

    socket.on('disconnect', function () {
      console.log('Disconnected from server');
    });

    socket.on('newMessage', function (message) {
        console.log('newMessage', message);
        var li = $('<li></li>');
        li.text(`${message.from} : ${message.text}`)
        $('#messages').append(li);
    });


    // $(document).ready(function () {
    $('#message-form').on('submit', function(e) {
        e.preventDefault();

        socket.emit('createMessage', {
            from:'User',
            text: $('[name=message]').val()
        }, function () {

        });


    });
    // });

   

    
  