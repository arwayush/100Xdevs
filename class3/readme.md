**Assignments**

- Create a HTTP server from scratch in C/c++
- create an http server in rust using actix-web
- create an http server in golang using gorilla framework
- Create an java server

- create a todo app that lets user store tools on the server

EchmaScript :- It tells how javaScript should look like, javascript standard,
These are the standards for the javascript, it tells what js compiler should support,

- IT is a scripting lang specification standardized by the ecma international
- ecma versions are essentially updates to the specifications

JavaScript: The Implementation

- It is a scripting language that conforms to the ECMAScript specification.
- Most widely known and used implementation of ECMAScript

Beyond ECMAScript : JavaScript includes additional features that are not part of ECMAScript specification like DOM manipulation

- DOM manipulation is a crucial for web dev, but it is not defined by ECMAScript
  Eg: setTimeout, fs.readFile

Some Compilers for js

1. V-8 engine by Chrome, written in the C
2. Spider Monkey used by the firefox, written in the C+Rust

V-8 is an open-source js engine developed by the chromium project for the google chrome and chromium web browsers,
written in the C++,

Node.js :- Extra engine functionality based on the top of V-8 engine to run outside of the browser,
It is a runtime, that can run js, it is not a language, not a framework

Bun :- it is a competitor, does all the works which nodejs does but better

- It is written on Zig
- It is faster runtime

What can be done with the Nodejs

- CLI, (command line interface) - lets you create CLIs for creating the commands
- Creating a Video player
- Creating the Game
- Creating an HTTP Server

HTTP Protocol:- hyper text transfer protocol

- A protocol is defined for machine to communicate
- it is the most common way for website's frontend to communicate with the backend
- 90-95% http protocol is used
- Client throws a request

HTTP Server:- The machine on which the tasks are running at the backend

- some code that follows HTTP protocol and is able to communicate with the clients (browsers/ mobile apps, etc.)
- Do many things
-

Frontends:- js is used for frontend

Backend :- A place where all the code is running,

- To write the backend code we use java, go, js, etc.
- Nodejs is used for the backend
-

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

**Runtime**
Compile all the js code into -> 0s and 1s

-Many libraries which lets you create the HTTP servers like express, nextjs,etc.

- fetch it is a web API which let us fetch the data from anywhere

**npm vs npx**
npm -> whole files comes to your PC, downloaded globally
npx -> It is for specific use, i.e. used only for that instance

_express_
It is a library that gives us the high level constructs to create HTTP servers

_fs_
fs is a nodejs library that gives me the high level constructs to do filesystem stuff like reading, writing to a file, etc.
