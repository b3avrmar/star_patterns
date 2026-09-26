import input from "./input.js";

const height = +(await input("Add meg a magasságot: "));
console.log("");

// 1. feladat
console.log("Hollow Full Pyramid");
console.log("");

console.log(" ".repeat(height - 1) + "*");
for (let i = 2; i < height; i++) {
  console.log(" ".repeat(height - i) + "*" + " ".repeat(2 * (i - 1) - 1) + "*");
}

console.log("* ".repeat(height));

console.log("");
console.log("");

// 2. feladat
console.log("Hollow Inverted Full Pyramid");
console.log("");

console.log("* ".repeat(height));

for (let i = height - 1; i > 1; i--) {
  console.log(" ".repeat(height - i) + "*" + " ".repeat(2 * (i - 1) - 1) + "*");
}

console.log(" ".repeat(height - 1) + "*");

console.log("");
console.log("");

// 3. feladat
console.log("Hollow Diamond Pyramid");
console.log("");

console.log(" ".repeat(height - 1) + "*");

for (let i = 2; i < height; i++) {
  console.log(" ".repeat(height - i) + "*" + " ".repeat(2 * (i - 1) - 1) + "*");
}

for (let i = height - 2; i > 1; i--) {
  console.log(" ".repeat(height - i) + "*" + " ".repeat(2 * (i - 1) - 1) + "*");
}

console.log(" ".repeat(height - 1) + "*");

console.log("");
console.log("");

// 4. feldat
console.log("Floyd's triangle");
console.log("");

let db = 0;
for (let i = 0; i < parseInt(height); i++) {
  let sor = " ";
  for (let f = 0; f <= i; f++) {
    db++;
    sor += `${db} `;
  }
  console.log(sor);
}

console.log("");
console.log("");

// 5. feldat
console.log("Floyd's triangle");
console.log("");

const triangle = [];

for (let i = 0; i < height; i++) {
  const row = new Array(i + 1).fill(1);

  for (let j = 1; j < i; j++) {
    row[j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
  }

  triangle.push(row);
}

for (let i = 0; i < height; i++) {
  const padding = " ".repeat((height - i - 1) * 2);
  console.log(padding + triangle[i].join("   "));
}
