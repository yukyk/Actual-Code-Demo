
const buy = document.createElement('h3');
buy.innerHTML = "Buy high quality organic fruits online"
buy.style.fontStyle = 'italic';
const div1 = document.getElementsByTagName('div')[0];
const mainHead = div1.getElementsByTagName('h1')[0];

mainHead.insertAdjacentElement("afterend", buy);

const para = document.createElement('p');
para.textNode = "Total Fruits: 4";
para.id = "fruits-total";

const dive2 = document.getElementsByTagName('div')[1];
const ul = dive2.getElementsByTagName('ul')[0];
dive2.insertBefore(para, ul);

