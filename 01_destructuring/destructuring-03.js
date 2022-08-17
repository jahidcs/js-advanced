function nameToFIrstLast(fullname) {
  const [first, last] = fullname.split(" ");
  return {
    firstName: first,
    lastName: last,
  };
}

const { firstName, lastName } = nameToFIrstLast("Kyle cook");

console.log(firstName);
console.log(lastName);

function addMul(options) {
  //   const a = options.a;
  //   const b = options.b;
  const { a, b } = options;
  return [a + b, a * b];
}

const [sum, product] = addMul({ a: 2, b: 3 });
console.log(sum, product);
