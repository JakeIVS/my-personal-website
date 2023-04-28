const h2 = document.createElement('h2');
h2.textContent = "Professional Experience";
document.querySelector('body').appendChild(h2);
const h3 = document.createElement('h3')
h3.textContent = "Chemistry"
document.querySelector('body').appendChild(h3);
const h3_2 = document.createElement('h3');
h3_2.textContent = "Software Engineering";
document.querySelector('body').appendChild(h3_2);

h3.className = "button1";
h3_2.className = "button2";

// Adding mouse-over functionality

const p2 = document.createElement('p');
p2.textContent = "Software Engineering at Flatirons School (Denver, CO)";

function chemistryShow() {
    const p1 = document.createElement('p');
    p1.textContent = 'BS in Chemistry, Colorado State University';
    document.querySelector('body').addChild(p1);
}

const input1 = document.getElementsByClassName('button1');
input1.addEventListener('click', chemistryShow);
