// Add the Edit Button:
const form = document.querySelector('form');
const fruits = document.querySelector('.fruits');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    //Selected the input Element
    const fruitToAdd = document.getElementById('fruit-to-add');
    //creating the LI
    const newLi = document.createElement('li');
    newLi.className = 'fruit';
    newLi.innerHTML = fruitToAdd.value + '<button class="delete-btn">x</button>' + '<button class="edit-btn">Edit</button>';


    //Adding Li as the last Element in the Unordered List
    fruits.appendChild(newLi);
    fruitToAdd.value = " "
})
fruits.addEventListener('click', function (event) {
    if (event.target.classList.contains('delete-btn')) {
        const fruitDelete = event.target.parentElement;
        fruits.removeChild(fruitDelete);
    }
});
// Implement the code as in video but with one extra 'Edit' button in 'li'

