function greet(name) {
 console.log(`Hello, ${name}!`);
document.getElementById('message').textContent = `Hello, ${name}!`;
}

greet('World');