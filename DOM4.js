const mainHead = document.querySelector('#main-heading');
mainHead.style.textAlign = 'center';

const fruit = document.querySelector('.fruits');
fruit.style.backgroundColor = 'grey';
fruit.style.padding = '30px';
fruit.style.margin = '20px';
fruit.style.width = 'px';
fruit.style.borderRadius = '5px';
fruit.style.listStyleType = 'none';


const basketHead = document.querySelector('h2');
basketHead.style.marginLeft = '30px';

const fruitItems = document.querySelectorAll('.fruit');
for (var i = 0; i < fruitItems.length; i++){
    fruitItems[i].style.backgroundColor = 'white';
    fruitItems[i].style.padding = '10px';
    fruitItems[i].style.margin = '10px';
    fruitItems[i].style.borderRadius = '5px';
}


// Write answer to the questions asked below:
const oddFruits = document.querySelectorAll('.fruit:nth-child(odd)');
for (var i = 0; i < oddFruits.length; i++){
    oddFruits[i].style.backgroundColor = 'lightgrey';
}

const title = document.querySelector('#basket-heading');
title.style.color = 'brown'

mainHead.style.textAlign = 'right';

const evenFruits = document.querySelectorAll('.fruit:nth-child(even)');

for (var i = 0; i < evenFruits.length; i++){
    evenFruits[i].style.color = 'white';
    evenFruits[i].style.backgroundColor = 'brown';
}

