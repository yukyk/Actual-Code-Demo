function handleFormSubmit(event) {
    event.preventDefault();
    const username = event.target.username.value
    const email = event.target.email.value
    const phone = event.target.phone.value

    const obj = {
        username,email, phone
    }
    const stingObj = JSON.stringify(obj);
    localStorage.setItem(email, stingObj);

    displayUser(obj)
};

function displayUser(obj) {
    const ul = document.querySelector("ul");
    const li = document.createElement("li");

    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => {
        li.remove();
        localStorage.removeItem(obj.email);
    })

    li.textContent = obj.username + "-" + obj.email + "-" + obj.phone;
    li.appendChild(deleteBtn);
    

    ul.appendChild(li)
}

module.exports = handleFormSubmit;





function handleFormSubmit(event) {
    event.preventDefault();
    const username = event.target.username.value
    const email = event.target.email.value
    const phone = event.target.phone.value

    const obj = {
        username,email,phone
    }
    const stingObj = JSON.stringify(obj);
    localStorage.setItem(email, stingObj);
    displayUser(obj)

}
function displayUser(obj) {
    const ul = document.querySelector("ul");
    const li = document.createElement("li");

    li.textContent = obj.username + "-" + obj.email + "-" + obj.phone;
    ul.appendChild(li)
}

module.exports = handleFormSubmit;




document.addEventListener("DOMContentLoaded", initialize);


// Don't remove anything just complete the functions


// When the page get load display all users
function initialize() {
    const usersList = JSON.parse(localStorage.getItem("usersList")) || [];
    for (var i = 0; i < usersList.length; i++){
        display(usersList[i]);
    }
}


// add new users in usersList array
function handleFormSubmit(event) {
    event.preventDefault();
    const username = event.target.username.value
    const email = event.target.email.value
    const phone = event.target.phone.value

    const userDetails = {
        username, email, phone
    }
    const userList = JSON.parse(localStorage.getItem("usersList")) || [];

    userDetails.id = Date.now();
    userList.push(userDetails);
    display(userDetails);
    localStorage.setItem("usersList", JSON.stringify(userList));
}


 // use this function to display user on screen
function display(data) {
    const ul = document.querySelector("ul");
    const li = document.createElement("li");


    li.textContent = `${data.username} - ${data.email} - ${data.phone}`;

    const deleteBtn = document.createElement('button');

    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", () => deleteData(data.id, li))

    li.appendChild(deleteBtn);
    ul.appendChild(li);


    
 
}


 // use this function to delete the user details from local store and DOM (screen)
function deleteData(id, li) {
    const userList = JSON.parse(localStorage.getItem("usersList")) || [];

    const updatedUserList = [];
    for (let i = 0; i < userList.length; i++){
        if (id !== userList[i].id) {
            updatedUserList.push(userList[i]);
        }
    }
    localStorage.setItem("usersList", JSON.stringify(updatedUserList));

    li.remove();
 }

 module.exports = handleFormSubmit
