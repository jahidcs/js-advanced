const array = ["A", "B", "C", "D"];
const person = {
  name: "Kyle",
  age: 25,
  favouriteFood: "Rice",
  address: {
    street: "08 Mohammadpur",
    city: "Dhaka",
  },
};

// const fname = person.name;
// const age = person.age;

// const { name: fname, age, address } = person;
// const { street } = address;

const {
  address: { street, city, zipcode = "1207" },
} = person;

// console.log(fname);
// console.log(age);
// console.log(address);
console.log(street);
console.log(city);
console.log(zipcode);

function addMul(a, b) {
  return { sum: a + b, prod: a * b };
}

const { sum, prod: product } = addMul(2, 3);

console.log(sum);
console.log(product);
