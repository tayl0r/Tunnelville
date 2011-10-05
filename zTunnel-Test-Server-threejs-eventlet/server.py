from eventlet import wsgi, websocket
import eventlet

@websocket.WebSocketWSGI
def webHandler(ws):
    print "web socket connected"
    while True:
        m = ws.wait()
        if m is None:
            break
        ws.send(m)

def handler(ws):
    print "led client connected"
    while True:
        m = ws.wait()
        if m is None:
            break
        print m

if __name__ == "__main__":
    # run the web socket server
    webListener = eventlet.listen(('127.0.0.1', 8090))
    wsgi.server(webListener, webHandler)

    # run our test server to receive LED packets
    listener = eventlet.listen(('127.0.0.1', 1337))
    wsgi.server(listener, handler)