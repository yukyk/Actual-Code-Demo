const API = "http://localhost:3000/blogs";

const blogForm = document.getElementById("blogForm");
const blogArea = document.getElementById("blogArea");

/* ADD BLOG */
blogForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const name = document.getElementById("author").value; // BACKEND EXPECTS "name"
  const description = document.getElementById("description").value;

  await axios.post(API, { title, name, description });
  blogForm.reset();
  fetchBlogs();
});

/* FETCH BLOGS */
async function fetchBlogs() {
  const res = await axios.get(API);
  blogArea.innerHTML = "";
  res.data.forEach(renderBlog);
}

function renderBlog(blog) {
  const card = document.createElement("div");
  card.className = "blog-card";

  card.innerHTML = `
    <div class="blog-header">
      <div>
        <div class="blog-title">${blog.title}</div>
        <div class="blog-author">by ${blog.name}</div>
      </div>
      <button class="delete-btn">🗑</button>
      <button class="expand-btn">▼</button>
    </div>

    <div class="blog-content">
      <p>${blog.description}</p>

      <input placeholder="Add comment and press Enter"
        onkeydown="addComment(event, ${blog.id})" />

      <div id="comments-${blog.id}"></div>
    </div>
  `;

  // Expand/collapse only when header (or expand button) is clicked
  const header = card.querySelector(".blog-header");
  const expandBtn = card.querySelector(".expand-btn");

  expandBtn.onclick = (e) => {
    e.stopPropagation();
    card.classList.toggle("active");
  };

  const deleteBtn = card.querySelector(".delete-btn");
  deleteBtn.onclick = (e) => deleteBlog(blog.id, e);

  blogArea.appendChild(card);

  blog.Comments?.forEach(c => renderComment(blog.id, c));
}


/* DELETE BLOG */
async function deleteBlog(id, e) {
  e.stopPropagation();
  await axios.delete(`${API}/${id}`);
  fetchBlogs();
}

/* ADD COMMENT */
async function addComment(e, blogId) {
  if (e.key === "Enter" && e.target.value.trim()) {
    const res = await axios.post(`${API}/${blogId}/comments`, {
      content: e.target.value
    });

    e.target.value = "";
    renderComment(blogId, res.data.comment);
  }
}

/* RENDER COMMENT */
function renderComment(blogId, comment) {
  const box = document.getElementById(`comments-${blogId}`);
  const div = document.createElement("div");
  div.className = "comment";

  div.innerHTML = `
    <span>${comment.content}</span>
    <button onclick="deleteComment(${comment.id}, this)">✖</button>
  `;

  box.appendChild(div);
}

/* DELETE COMMENT */
async function deleteComment(id, btn) {
  await axios.delete(`http://localhost:3000/blogs/comments/${id}`);
  btn.parentElement.remove();
}

fetchBlogs();
