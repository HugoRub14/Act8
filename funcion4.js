const names = ['John', 'Doe', 'Jane', 'Mark', 'Alice'];

function isShort(name) {
  return name.length < 5;
}

const shortNames = names.filter(isShort);

console.log(shortNames); // Output: ['John', 'Doe', 'Jane', 'Mark']
