// To-Do UL grabben
const toDoList = document.querySelector(".todo-list");

// Submit event maken
document.getElementById("createTodoForm").addEventListener("submit", addTodo)
renderTodo()

async function renderTodo() {
    const result = await fetch('http://localhost:3000/', { method: "GET", headers: { "Content-Type": "application/json" } })
    const responseData = await result.json()
    // Lijst renderen uit database
    clearTodo();

    responseData.forEach(todo => {
        const listSection = document.createElement("div");
        listSection.classList.add("todo");
        const newListItem = document.createElement("li");
        newListItem.innerText = todo.name;
        newListItem.classList.add("list-item");
        listSection.appendChild(newListItem);
        const deleteButton = document.createElement("button");
        deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
        deleteButton.setAttribute("id", "delete-button");
        deleteButton.onclick = () => (removeItem(todo._id))
        listSection.appendChild(deleteButton);
        toDoList.appendChild(listSection);
    });
}

// lijst leegmaken
function clearTodo() {
    toDoList.innerHTML = "";
}

