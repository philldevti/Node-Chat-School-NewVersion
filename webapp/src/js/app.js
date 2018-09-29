var socket = io('//localhost:3000');

$('#message').keypress(function(e){
    
    if(e.which == 13){
        var val = $('#message').val();

        socket.emit('message', {
            message: val
        });

        return false;
    }
});