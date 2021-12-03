// API URL aanmaken
const apiUrl = 'http://localhost:3000';

async function addTodo(event) {
    // ga naar de api en maak een nieuwe todo aan.
    event.preventDefault();

    //haal de value uit het input veld.
    const inputData = document.getElementById("input-field").value

    //post naar de api 
    await fetch(apiUrl, {
        method: "POST",
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: inputData })
    })

    // all de post klaar is, bouw de lijst met todo's opnieuw op.
    clearTodo()
    renderTodo()
}

async function removeItem(id) {
    const deleted = await fetch(apiUrl + '/' + id, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" }
    });

    renderTodo();
}