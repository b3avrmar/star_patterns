import input from "./input.js";

const number = await input("Add meg a magasságot: ");

//right half pyramid
console.log("Right half pyramid");
for (let i = 0; i < parseInt(number); i++) {
  let sor = "";
  for (let f = 0; f <= i; f++) {
    sor += "*";
  }
  console.log(sor);
}

console.log(" ");

//left half pyramid
console.log("Left half pyramid");

for (let i = parseInt(number); i > 0; i--) {
  let sor = "";
  for (let f = parseInt(number); f > 0; f--) {
    if (i + f < parseInt(number) + 2) {
      sor += "*";
    } else {
      sor += " ";
    }
  }
  console.log(sor);
}

console.log("");

// full pyramid
console.log("Full pyramid");

for (let i = parseInt(number); i > 0; i--) {
  let sor = "";
  for (let f = parseInt(number); f > 0; f--) {
    if (i + f < parseInt(number) + 2) {
      sor += "* ";
    } else {
      sor += " ";
    }
  }
  console.log(sor);
}

// inverted right half pyramid
console.log("Inverted right half pyramid");
for (let i = parseInt(number); i > 0; i--) {
  let sor = "";
  for (let f = 0; f < i; f++) {
    sor += "*";
  }
  console.log(sor);
}

// for (let i = 0; i < parseInt(number); i++) {
//   let sor = "";
//   for (let f = parseInt(number); f > 0; f--) {
//     if (f - i > 0) {
//       sor += "*";
//     }
//   }
//   console.log(sor);
// }

console.log(" ");

//inverted left half pyramid
console.log("inverted left half pyramid");

for (let i = 0; i < parseInt(number); i++) {
  let sor = "";
  for (let f = parseInt(number); f > 0; f--) {
    if (i + f < parseInt(number) + 1) {
      sor += "*";
    } else {
      sor += " ";
    }
  }
  console.log(sor);
}
