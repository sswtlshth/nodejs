var app=require('express')();
var http=require('http').Server(app);
var io=require('socket.io')(http);
var userCount=1;
app.get('/',function(req,res){
    res.sendFile(__dirname+'/index.html');
});

io.on('connection',function(socket){
    var name='user'+userCount++;
    socket.on('chat message',function(msg){
        console.log("Message ::",msg);
    })
    console.log("user connected::",name);
    socket.on('disconnect',function(){
        console.log('user disconnected::',name);
    });
})

http.listen(3000,function(){
    console.log("Listening on 3000");
})