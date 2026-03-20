const todos = [
    { id: 1, task: "Mua bánh chưng", done: false },
    { id: 2, task: "Dọn nhà đón Tết", done: false },
    { id: 3, task: "Gói bánh chưng", done: false },
    { id: 4, task: "Trang trí nhà cửa", done: false },
];
const listElement = document.getElementById("todo-list");
const storedTodos = localStorage.getItem("myTodos");
if(!storedTodos) {
    localStorage.setItem("myTodos", JSON.stringify(todos));
    renderTodos(todos);
} else {
    let data = JSON.parse(storedTodos);
    renderTodos(data);
}
function renderTodos() {
    let str = "";
    for(let i = 0; i < todos.length; i++) {
        str += `<span class="task">${todos[i].task}</span>
            <span class="status">Chưa làm</span>`;
    }
    document.getElementById("todo-list").innerHTML = str;
}