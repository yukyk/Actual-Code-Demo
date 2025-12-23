const API_URL = "http://localhost:3000/users";

const userForm = document.getElementById("userForm");
const userList = document.getElementById("userList");


userForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    try {
        await axios.post(API_URL, {
            name: name,
            email: email
        });

        userForm.reset();
        fetchUsers(); 
    } catch (err) {
        alert("Error adding user");
    }
});


const fetchUsers = async () => {
    try {
        const response = await axios.get(API_URL);
        const users = response.data;

        userList.innerHTML = "";

        users.forEach(user => {
            const li = document.createElement("li");
            li.innerHTML = `
                ${user.name} (${user.email})
                <button onclick="deleteUser(${user.id})">Delete</button>
            `;
            userList.appendChild(li);
        });

    } catch (err) {
        console.log("Error fetching users");
    }
};


fetchUsers();

const deleteUser = async (id) => {
    try {
        await axios.delete(`${API_URL}/${id}`);
        fetchUsers();
    } catch (err) {
        alert("Error deleting user");
    }
};

