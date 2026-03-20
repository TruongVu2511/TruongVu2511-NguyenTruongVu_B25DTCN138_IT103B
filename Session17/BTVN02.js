const initialTodos = [
    { id: 1, task: "Mua bánh chưng", done: false },
    { id: 2, task: "Dọn nhà đón Tết", done: false },
    { id: 3, task: "Gói bánh chưng", done: false },
    { id: 4, task: "Trang trí nhà cửa bằng hoa mai, hoa đào", done: false },
    { id: 5, task: "Mua phong bao lì xì", done: false },
    { id: 6, task: "Chuẩn bị mâm ngũ quả", done: false },
];
const storedTodos = localStorage.getItem("myTodos");
let data;
if(!storedTodos) {
    localStorage.setItem("myTodos", JSON.stringify(initialTodos));
    data = initialTodos;
} else {
    data = JSON.parse(storedTodos);
}
renderTodos(data);
function renderTodos() {
    let str = "";
    for(let i = 0; i < data.length; i++) {
        let status = data[i].done ? "completed" : "";
        let icon = "✓";
        str += `<div class="todo-item ${status}" onclick="toggleTodo(${data[i].id})">
                <span class="icon">${icon}</span>
                <span class="task">${data[i].task}</span>
            </div>
        `;
    }
    document.getElementById("todo-list").innerHTML = str;
}
function toggleTodo(id) {
    for(let i = 0; i < data.length; i++) {
        if(data[i].id === id) {
            data[i].done = !data[i].done;
            break; 
        }
    }
    localStorage.setItem("myTodos", JSON.stringify(data));
    renderTodos(data);
}