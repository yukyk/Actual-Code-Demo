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



 //Updating User details with an edit button
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
    const username = event.target.username.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;

    const userDetails = {
        username,
        email,
        phone
    };
    //get previous users list
    const usersList = JSON.parse(localStorage.getItem("usersList")) || [];
    const editId = sessionStorage.getItem("editId")
    if (editId) {
        update(usersList, editId, userDetails)
    }
    else {

        add(usersList, userDetails)
    }

    // event.target.reset();

    localStorage.setItem("usersList", JSON.stringify(usersList));

    }

    // use this function to display user on screen
function display(data) {

    const ul = document.querySelector("ul");
    const li = document.createElement("li");
    li.textContent = `${data.username} ${data.email} ${data.phone}`;

    li.id = data.id;
    ul.appendChild(li);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => deleteData(data.id, li));
    li.appendChild(deleteButton);


    const editButton = document.createElement('button')
    editButton.textContent = "Edit";
    editButton.addEventListener("click", () => editData(data));

    li.appendChild(editButton);
    
    }

    // use this function to add user details into local storage
function add(userList, userDetails) {
    userDetails.id = Date.now();
    userList.push(userDetails);
    display(userDetails);
    
    }


    // use this function to delete the user details from local store and DOM (screen)
function deleteData() {
    const usersList = JSON.parse(localStorage.getItem("usersList")) || [];

    let updatedUserList = [];
    for (const user of usersList) {
        if (user.id !== id) {
            updatedUserList.push(user);
        }
    }
    localStorage.setItem("usersList", JSON.stringify("updatedUserList"));
    li.remove();
    
    }

    // use this function to update user details from local storage
function editData() {
    const usernameInput = document.querySelector('#username');
    const emailInput = document.querySelector('#email');
    const phoneInput = document.quertSelector('#phone');

    usernameInput.value = data.username;
    emailInput.value = data.email;
    phoneInput.value = data.phone;

    sessionStorage.setItem("editId", data.id);

    const submitBtn = document.querySelector("button[type=submit]");
    submitBtn.textContent = 'Updated;'

}

function update(usersList, editId, userDetails) {
    for (let i = 0; i < usersList.length; i++){
        if (usersList[i].id == editId) {
            usersList[i].username = userDetails.username;
            usersList[i].email = userDetails.email;
            usersList[i].phone = userDetails.phone
        }
    }


    const li = document.getElementById(editId)
    li.firstChild.textContent = `${userDetails.username} ${userDetails.email}  ${userDetails.phone}`;

    sessionStorage.removeItem("editId");

    const submitBtn = document.querySelector("button[type=submit]");
    submitBtn.textContent = "Submit";

}

    module.exports = handleFormSubmit
    
