// Replace with your unique CRUD CRUD endpoint
const apiURL = "https://crudcrud.com/api/d5bdf7e98d1d41c98aa31e702153d1cb";

const titleInput = document.getElementById("title");
const descriptionInput = document.getElementById("description");
const dateInput = document.getElementById("date");
const addNoteBtn = document.getElementById("addNoteBtn");
const notesContainer = document.getElementById("notesContainer");
const searchTitle = document.getElementById("searchTitle");
const noteCount = document.getElementById("noteCount");

// Load existing notes when page loads
window.addEventListener("DOMContentLoaded", getNotes);

// Add new note
addNoteBtn.addEventListener("click", () => {
  const note = {
    title: titleInput.value.trim(),
    description: descriptionInput.value.trim(),
    date: dateInput.value
  };

  if (!note.title || !note.description) {
    alert("Please fill out all fields before saving!");
    return;
  }

  axios.post(apiURL, note)
    .then(() => {
      titleInput.value = "";
      descriptionInput.value = "";
      dateInput.value = "";
      getNotes();
    })
    .catch(err => console.error("Error adding note:", err));
});

// Get all notes
function getNotes() {
  axios.get(apiURL)
    .then(res => {
      displayNotes(res.data);
    })
    .catch(err => console.error("Error fetching notes:", err));
}

// Display notes
function displayNotes(notes) {
  notesContainer.innerHTML = "";
  notes.forEach(note => {
    const noteEl = document.createElement("div");
    noteEl.classList.add("note");

    noteEl.innerHTML = `
      <button onclick="deleteNote('${note._id}')">Delete</button>
      <h3>${note.title}</h3>
      <p>${note.description}</p>
      <small>${note.date ? note.date : "No date"}</small>
    `;

    notesContainer.appendChild(noteEl);
  });

  noteCount.textContent = `Showing ${notes.length} note${notes.length !== 1 ? "s" : ""}`;
}

// Delete note
function deleteNote(id) {
  axios.delete(`${apiURL}/${id}`)
    .then(() => getNotes())
    .catch(err => console.error("Error deleting note:", err));
}

// Search notes
searchTitle.addEventListener("input", e => {
  const search = e.target.value.toLowerCase();
  axios.get(apiURL)
    .then(res => {
      const filtered = res.data.filter(n => n.title.toLowerCase().includes(search));
      displayNotes(filtered);
    })
    .catch(err => console.error("Search error:", err));
});
