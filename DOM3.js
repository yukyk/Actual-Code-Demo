const list = document.getElementsByTagName('li');

list[4].style.color = 'blue';
for (var i = 0; i < list.length; i++){
    list[i].style.fontStyle = 'italic';
}