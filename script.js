const h2 = document.createElement('h2');
h2.textContent = "Professional Experience";
document.querySelector('body').appendChild(h2);
const button1 = document.createElement('button');
button1.textContent = "Chemistry"
document.querySelector('body').appendChild(button1);
const button2 = document.createElement('button');
button2.textContent = "Software Engineering";
document.querySelector('body').appendChild(button2);
const p = document.createElement('p');


button1.id = "button1";
button2.id = "button2";

// Adding click functionality

const p2 = document.createElement('p');
p2.textContent = "Software Engineering at Flatirons School (Denver, CO)";

function showChemistry() {
    const chemExp = document.getElementById('chemical-experience');
    const seExp = document.getElementById('se-experience');
    seExp.style.display = 'none';
    chemExp.style.display = 'block';
}

const input1 = document.getElementsByClassName('button1');
input1.addEventListener('click', showChemistry());
