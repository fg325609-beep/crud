let yigim = [];

const input = document.getElementById('input');
const List = document.getElementById('List');

function renderList() {
    List.innerHTML = yigim.map((item, index) => `
        <li>
            ${item}
            <button onclick="editItem(${index})">Tahrirlash</button>
            <button onclick="deleteItem(${index})">O‘chirish</button>
        </li>
    `).join('');
}

function add(e) {
    if (e) e.preventDefault();

    if (input.value.trim() !== "") {
        yigim.push(input.value.trim());
        input.value = "";
        renderList();
    }
}

function editItem(index) {
    let yangi = prompt("Yangi qiymatni kiriting:", yigim[index]);
    
    if (yangi !== null && yangi.trim() !== "") {   
        yigim[index] = yangi.trim();
        renderList();
    }
}

function deleteItem(index) {
    if (confirm("Bu elementni o‘chirishni xohlaysizmi?")) {
        yigim.splice(index, 1);
        renderList();
    }
}