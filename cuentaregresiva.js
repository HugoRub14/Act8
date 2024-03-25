const output = document.querySelector('.output');
let i = 10;

while (i >= 0) {
    const para = document.createElement('p');

    if (i === 0) {
        para.textContent = "Blast off!";
    } else if (i === 10) {
        para.textContent = "Cuenta regresiva 10";
    } else {
        para.textContent = i;
    }

    output.appendChild(para);
    i--;
}
