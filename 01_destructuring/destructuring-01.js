const array = ["A", "B", "C", "D", ["jahid", "Hassan"]];
const person = {
  name: "Kyle",
  age: 25,
  favouriteFood: "Rice",
  address: {
    street: "08 Mohammadpur",
    city: "Dhaka",
  },
};

const [first, second, , fourth, [fifth, sixth]] = array;
const [[one, two]] = array;

console.log(first);
console.log(second);
console.log(fourth);
console.log(fifth);

function addAndMultiply(a, b) {
  return [a + b, a * b];
}

const [sum, product] = addAndMultiply(2, 3);

console.log(sum);
console.log(product);
