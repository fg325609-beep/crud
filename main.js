let yigim = [];


function crudList(e){
    e.preventDefault();
   List.innerHTML = yigim.map((item,index) => `<li>${item} <button onclick="deleteItem(${index})">Delete</button></li>`).join("");
}

function add (){
    if (input.value.trim()){
        data.push(input.value.trim());
        input.value = "";
        crudList();

    }
}

function edit (i){
    let yangi = prompt ("tahrirlash",data [i]);
    if(yangi && yangi.trim()) data[i] = yangi.trim();
    crudList();
}

function del(i) {
    if(confirm("O'chirishni tasdiqlaysizmi?")) data.splice(i,1);
    crudList();
}