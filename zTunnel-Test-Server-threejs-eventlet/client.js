
var wsUri = "ws://127.0.0.1:8090";
var output, ws;

function init() {
    output = document.getElementById("output");
    testWebSocket();
}

function testWebSocket() {
    try {
        ws = new WebSocket(wsUri);
        ws.onopen = function(evt) {
            onOpen(evt)
        };
        ws.onclose = function(evt) {
            onClose(evt)
        };
        ws.onmessage = function(evt) {
            onMessage(evt)
        };
        ws.onerror = function(evt) {
            onError(evt)
        };
    } catch (e) {
        console.log(e);
        writeToScreen(e);
    }
}

function onOpen(evt) {
    console.log("connected");
    writeToScreen("CONNECTED");
    doSend("WebSocket rocks");
}

function onClose(evt) {
    console.log("closed");
    writeToScreen("DISCONNECTED");
}

function onMessage(evt) {
    console.log("messaged");
    writeToScreen('<span style="color: blue;">RESPONSE: ' + evt.data+'</span>');
    //ws.close();
}

function onError(evt) {
    console.log("errored");
    writeToScreen('<span style="color: red;">ERROR:</span> ' + evt.data);
}

function doSend(message) {
    console.log("sending");
    writeToScreen("SENT: " + message);
    ws.send(message);
}

function writeToScreen(message) {
    var pre = document.createElement("p");
    pre.style.wordWrap = "break-word";
    pre.innerHTML = message;
    output.appendChild(pre);
}

window.addEventListener("load", init, false);
