function(){

}

- Arguments are the something the client sends
- rather than function, the client uses a URL
- rather than the function's body, the server does something with the request
- Rather than the function returning a value, the server responds with the data

Things need to consider client side HTTP, client sending the request (browser sending the request)

1. Protocol (HTTP/HTTPs)
2. Address (URL/IP/PORT)
3. Route
4. Headers, body, query, params
5. Method

Things server needs to worry about
HTTP server side

1. Response Headers
2. Response Body
3. Status codes

HTTP Protocols
**at client side**
Route:- it is after the website is written, because there are the bunch of things which can be done by chatgpt,
Header:- Generaly the authentic info is send, such as you are loggedIn which is done by the use of cookie
Body:- generally arguments are send, and recieved
Method:- which kind of request you are asking eg: post, get, etc.

Client -----> https://chat.openapi.com/

when you send the request

1. browser parse the URL
2. does a DNS lookup i.e. converts the abc.com --> to an IP
3. establishes an connection to the IP, handshake happens between both client and server

DNS Resolution:- URL are like the phone numbers, in the end they map to an IP
establishes a connection to the IP and does handshake
URL needs to point to an IP

**server response**
response header:-
response body:- server sends to the client
status code:- way to signal, server responds with

why status code and method ?
Ans: for the separation of concern it was done

Some common requests
GET -> to fetch something or some data
POST -> To ask for a request, or put something
DELETE -> To delete
PUT

**Things happens at your server after request is recieved**

1. you gets the inputs(routes, body, headers)
2. do some logic on the input
3. return the output, body headers and status code

**Status Codes**
200 -> everything is okk
404 -> if page or route not found
403 -> Authentication issues, such as wrong cookie, or etc.
500 -> Internal server error, if some bug is on backend or if backend crashes9

Why need status codes :- good to follow practices

- Two apps cannot access the same port, whether it is a nodejs or java
  -1 Machine can have 1 IP only but can run multiple processess and 1 processs will run on -> 1 port -> can accept 1 request

Express does not give the access to the body, it handles post requests, headers, etc.

- so we use body-parser
