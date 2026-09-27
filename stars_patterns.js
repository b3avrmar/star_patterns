import input from "./input.js";

const number = await input("Add meg a magasságot: ");

//right half pyramid
console.log("Right half pyramid");
for (let i = 1; i <= parseInt(number); i++) {
  console.log("* ".repeat(i));
}

console.log(" ");

//left half pyramid
console.log("Left half pyramid");
for (let i = 1; i < parseInt(number) + 1; i++) {
  console.log("  ".repeat(number - i) + " *".repeat(i));
}
console.log("");

// full pyramid
console.log("Full pyramid");

for (let i = 1; i <= number; i++) {
  console.log(" ".repeat(number - i), "* ".repeat(i), " ".repeat(number - i));
}

// inverted right half pyramid
console.log("Inverted right half pyramid");
for (let i = number; i >= 0; i--) {
  console.log("* ".repeat(i) + " ".repeat(number - i));
}

console.log(" ");

//inverted left half pyramid
console.log("inverted left half pyramid");

for (let i = number; i >= 0; i--) {
  console.log(" ".repeat(number - i) + "* ".repeat(i));
}
