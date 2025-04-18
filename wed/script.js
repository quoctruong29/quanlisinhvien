let students = [];
let editIndex = null;
let isAuthenticated = false;

// Fake user data for login
const users = [
    { username: "admin", password: "1234" }
];

function renderTable() {
    const table = document.getElementById("student-table");
    table.innerHTML = ""; // Clear table

    students.forEach((student, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>
                <button onclick="editStudent(${index})">Edit</button>
                <button onclick="deleteStudent(${index})">Delete</button>
            </td>
        `;
        table.appendChild(row);
    });
}

function addStudent() {
    const id = document.getElementById("student-id").value;
    const name = document.getElementById("student-name").value;

    if (id && name) {
        students.push({ id, name });
        renderTable();
        clearForm();
    } else {
        alert("Please enter both ID and Name.");
    }
}

function editStudent(index) {
    const student = students[index];
    document.getElementById("student-id").value = student.id;
    document.getElementById("student-name").value = student.name;

    document.getElementById("add-btn").style.display = "none";
    document.getElementById("update-btn").style.display = "inline";
    editIndex = index;
}

function updateStudent() {
    const id = document.getElementById("student-id").value;
    const name = document.getElementById("student-name").value;

    if (id && name) {
        students[editIndex] = { id, name };
        renderTable();
        clearForm();
    } else {
        alert("Please enter both ID and Name.");
    }
}

function deleteStudent(index) {
    students.splice(index, 1);
    renderTable();
}

function clearForm() {
    document.getElementById("student-id").value = "";
    document.getElementById("student-name").value = "";
    document.getElementById("add-btn").style.display = "inline";
    document.getElementById("update-btn").style.display = "none";
    editIndex = null;
}

function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        isAuthenticated = true;
        document.getElementById("login-screen").style.display = "none";
        document.getElementById("main-app").style.display = "block";
    } else {
        document.getElementById("login-error").style.display = "block";
    }
}

function logout() {
    isAuthenticated = false;
    document.getElementById("login-screen").style.display = "block";
    document.getElementById("main-app").style.display = "none";
}

document.getElementById("login-btn").addEventListener("click", login);
document.getElementById("logout-btn").addEventListener("click", logout);
document.getElementById("add-btn").addEventListener("click", addStudent);
document.getElementById("update-btn").addEventListener("click", updateStudent);

renderTable();
