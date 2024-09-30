function greet() {
  console.log("Hello World");
}

function greetAlien() {
  console.log("Hello to Alien");
}

setTimeout(greetAlien, 3 * 1000);
setInterval(greet, 1 * 1000);
