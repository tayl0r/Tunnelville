# TunnelVille

Interested in transforming the Tunnel of Light at Zynga HQ into something truly
wonderful?  We've created a virtual Tunnel to help you create something that
will truly surprise and delight our family, friends, and guests. What's more,
you can now do it from the comfort of your own home!

## What do I need?

- [Python 2.7](http://example.com/python)
- [Eventlet](http://example.com/eventlet)
- A web browser that supports WebGL, like Chrome or Safari

## Don't I need a specific operating system?

Nope! So long as you have those three things, you're good to go.

## Is it any good?

Yes.

## How do I use it?

It's simple. Just run the included Python script, using `python server.py`,
then open up the included web page in your favourite WebGL-supporting browser.
After that, just fire up your creation!

## So, what's actually happening?

Our Python-based server is standing in for the network controllers that power
the tunnel.  While your creation thinks that it is firing UDP packets at the
Tunnel, all those packets are actually being captured by our server. The result
is the 20,096 LEDs that you can see in your browser!
