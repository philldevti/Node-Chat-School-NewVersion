$(document).ready(function () {

    var socket = io('//localhost:3000');
    var currentRoom = undefined;
    var currentUser = undefined;

    (function ($) {
        $('.chatbox').hide();
        var getRooms = function () {
            return $.get('http://localhost:3000/rooms', function (data) {
                if (!data.status) {
                    return;
                }

                var rooms = data && data.rooms;

                var titleTpl = `<li class="list-group-item title">
                                    <h4>Canais(${ data.rooms.length }) <h4>
                                </li>`;
                var channel = $('.channels');
                channel.append(titleTpl);

                rooms.forEach((room, index) => {
                    var roomTpl = `<li class="list-group-item channel" name="${room.name}" channel="${ room._id }">
                                        <i class="fa fa-comment-o"></i> ${room.name}
                                   </li>`;
                    channel.append(roomTpl);
                });


            });
        }

        getRooms();


        var getUsers = function () {
            $.get('http://localhost:3000/users', function (data) {
                if (!data.status) {
                    return;
                }

                var users = data && data.users;

                users.forEach((user, index) => {
                    var userTpl = `<li class="list-group-item user" user="${user._id}" username="${ user.name }">${ user.name }</li>`;

                    $('.messages').append(userTpl);
                });

            });
        }

        getUsers();
    })($);
    
    $('.channels').on('click','.channel', function(e){
        var roomId = $(this).attr('channel');
        var roomName = $(this).attr('name');
                
        console.log(roomId);
        console.log(roomName);

        socket.emit('join room', {
            room: roomId,
            roomName: roomName
        });
        
        $('.conversation').html('');

        return false;
    }); 

    $('#message').on('keypress', function (e) {

        if (e.which == 13 || e.keyCode == 13) {
            var $msg = $('#message');
            var message = $msg.val();

            if(!message){
                return;
            }

            if(!currentRoom){                
                socket.emit('message user', {
                    message: message,
                    user: currentUser
                });
            }

            if(currentRoom){
                socket.emit('message room', {
                    message: message,
                    room: currentRoom
                });
            }

            var msgTpl = `
                            <div class="col-xs-12 message">
                                <div class="avatar col-xs-6 col-md-1">
                                    <h2>P</h2>
                                </div>
                                <p class="text col-xs-6 col-md-11">${ message }</p>
                            </div>`;

            $(".conversation").append(msgTpl);

            $msg.val('');
            $msg.focus();
            return false;
        }
    });

    socket.on('joined user', function(data){
        currentUser = data.user;
        $('.username').html('@' + data.username);
        $('.chatbox').show();
    });

    socket.on('joined room', function(data){
        currentRoom = data.room;
        $('.username').html(`@${data.roomName}`);
        $('.chatbox').show();
    });

    socket.on('leaved room', function(data){
        currentRoom = undefined;
        $('.chatbox').hide();
        $('.conversation').html('');        
    });

    socket.on('messaged', function (data) {
        if(!data.message){
            return;
        }

        var $msg = $('#message');
        $msg.val('');
        $msg.focus();

        var msgTpl = `
                        <div class="col-xs-12 message">
                            <div class="avatar col-xs-6 col-md-1">
                                <h2>P</h2>
                            </div>
                            <p class="text col-xs-6 col-md-11">${data.message}</p>
                        </div>`;
        $(".conversation").append(msgTpl);
    });

    $('.messages').on('click', '.user',function(e){
        var username = $(this).attr('username');
        var user = $(this).attr('user');

        socket.emit('join user', {
            userId: user,
            username: username
        });

        $('.conversation').html('');
        return false;
    });

    $('#btn_leave').on('click', function(e){
        e.preventDefault();
        var roomId = $(this).attr('channel');

        socket.emit('leave room', {
            room: roomId
        });        
    });
});