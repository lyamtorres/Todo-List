/* Agregar una nueva tarea */
document.getElementById("add-button").addEventListener("click", () => {
    const newTask = document.getElementById("task-field").value;
    const tag = document.createElement("li");
    const text = document.createTextNode(newTask);
    const element = document.getElementById("list");

    tag.appendChild(text);
    element.appendChild(tag);
});
