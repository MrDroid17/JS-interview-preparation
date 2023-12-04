# Polling, SSE and Web Sockets
### Polling
This is the simplest approach to follow when building a real-time app.
In polling, client makes the request to the server repeatedly in hope for updated/new data. No extra steps are required to achieve this. Just wrap your API call with setInterval and you're done. 

### Server Sent Events
In SSE, client makes the initial request to the server to set up a connection. Post that server pushes updated data to client whenever it is available. No further engagement is required from client. Of course client needs to handle those events but that's it.

### Web Sockets
Web Sockets are more powerful than the above mentioned methodologies but they come with additional complexities.
Web Sockets form a duplex connection, which means both client and sever can send data to each other on a single channel whereas SSE are uni-directional.
Web Sockets are initiated by an HTTP request for hankshake but later they are upgraded to TCP layer.

## [Complete Docs Link](https://dev.to/thesanjeevsharma/real-time-updates-polling-sse-and-web-sockets-277i)
