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


const chemistryListItems = [
    'BS in Chemistry, Colorado State University',
    'Research on 3d conformation of Ubiquinone-2',
    '4 years expierience as Lead Chemist'
];

const seListItems = [
    'Nothing yet!'
];

let ul = document.createElement('ul');
ul.className = 'list';
document.body.appendChild(ul);

function updateList(listItems) {
    ul.innerHTML = "";
    listItems.forEach(function (item) {
        let li = document.createElement('li');
        li.textContent = item;
        ul.appendChild(li);
    })
}

const input1 = document.getElementById('button1');
input1.addEventListener('click', function() {
    updateList(chemistryListItems);
});
const input2 = document.getElementById('button2');
input2.addEventListener('click', function() {
    updateList(seListItems);
});