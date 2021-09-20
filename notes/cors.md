Cross Origin Resource sharing (CORS)

    an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading of resources. 
    
> Access-Control-Allow-Origin: *

 which means that the resource can be accessed by any origin.

> Access-Control-Allow-Origin: https://foo.example

 which means that the resource can be accessed by only https://foo.example origin.

 before CORS mechanism browser never allowed request from different browser

 resource sharing is very important because in microservice achitechture we need to make request from different domain.

 before making api call browser make a preflight post with headers to check if call is valid if call is valid Options get in response and actual call is made.

