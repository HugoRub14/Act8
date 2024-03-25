const nameToFind = 'John'; 
const para = document.getElementById('result'); 
const phonebook = [ 
  { name: 'John', phone: '1234567890' },
  { name: 'Jane', phone: '0987654321' },
  { name: 'Doe', phone: '5555555555' }
];

for (let index in phonebook) {
  const entry = phonebook[index];
  if (entry.name === nameToFind) {
    para.textContent = `Name: ${entry.name}, Phone: ${entry.phone}`;
    break;
  }
}
