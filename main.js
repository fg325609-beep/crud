let yigim = [];

// Elementlarni olish
const input = document.getElementById('input');
const List = document.getElementById('List');

// Ro'yxatni chiqarish
function renderList() {
    List.innerHTML = yigim.map((item, index) => `
        <li>
            ${item}
            <button onclick="editItem(${index})">Tahrirlash</button>
            <button onclick="deleteItem(${index})">O‘chirish</button>
        </li>
    `).join('');
}

// Qo‘shish funksiyasi
function add(e) {
    if (e) e.preventDefault();

    if (input.value.trim() !== "") {
        yigim.push(input.value.trim());
        input.value = "";
        renderList();
    }
}

// Tahrirlash funksiyasi
function editItem(index) {
    let yangi = prompt("Yangi qiymatni kiriting:", yigim[index]);
    
    if (yangi !== null && yangi.trim() !== "") {   // null - cancel bosilganda
        yigim[index] = yangi.trim();
        renderList();
    }
}

// O‘chirish funksiyasi
function deleteItem(index) {
    if (confirm("Bu elementni o‘chirishni xohlaysizmi?")) {
        yigim.splice(index, 1);
        renderList();
    }
}