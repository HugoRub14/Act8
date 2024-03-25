const myArray = ['Papeel', 'Lapiz', 'Borrador', 'Sacapuntas'];
const ul = document.getElementById('myArraylist');

for (let i = 0; i < myArray.length; i++) {
  const li = document.createElement('li'); 
  li.textContent = myArray[i]; 
  ul.appendChild(li);
}
