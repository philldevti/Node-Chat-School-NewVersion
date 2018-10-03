$(document).ready(function () {

    (function ($) {
        var getRooms = function() {
            return $.get('http://localhost:3000/rooms', function(data){
                if(!data.status){
                    return;
                }

                var rooms = data && data.rooms;

                var titleTpl = `<li class="list-group-item title">
                                    <h4>Canais(${ data.rooms.length }) <h4>
                                </li>`;
                var channel = $('.channels');
                channel.append(titleTpl);

                rooms.forEach((room, index) => {
                    var roomTpl = `<li class="list-group-item" channel="${ room._id }">
                                        <i class="fa fa-comment-o"></i> ${room.name}
                                   </li>`;
                    channel.append(roomTpl);
                });

                
            });
        }

        getRooms();
    })($);

    var socket = io('//localhost:3000');

    $('#message').keypress(function (e) {

        if (e.which == 13) {
            var val = $('#message').val();

            socket.emit('message', {
                message: val
            });

            return false;
        }
    });

    socket.on('message', function (data) {
        var template = `
    <div class="col-xs-12 message">
        <div class="avatar col-xs-6 col-md-1">
            <h2>P</h2>
        </div>
        <p class="text col-xs-6 col-md-11">${data.message}</p>
    </div>`;
        $(".conversation").append(template);
    });
});