const WebSocket = require('ws');
//const serverAddress = "ws://127.0.0.1:5000";
const serverAddress = 'wss://websocket-server1.glitch.me/';
const ws = new WebSocket(serverAddress, {
    headers: {
        "user-agent": "Custom WS client"
    }
});

ws.on('open', function (){
    ws.send("Hello server!");
});

ws.on('message', function (msg){
    console.log("Recieved message from the server: " + msg);
});