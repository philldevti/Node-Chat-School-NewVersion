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

socket.on('message', function(data){
    var template = `
    <div class="col-xs-12 message">
        <div class="avatar col-xs-6 col-md-1">
            <h2>P</h2>
        </div>
        <p class="text col-xs-6 col-md-11">${data.message}</p>
    </div>`;
    $(".conversation").append(template);
});