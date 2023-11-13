// Conexão com elementos html
// Encapsulando os elementos ema uma variáveis
const filter = document.getElementById("filter");
const form = document.getElementById("addForm");
//lista para receber novos item adicionadoas
const lista = document.getElementById("items");
filter.addEventListener('keyup', filtrarItem);
function filtrarItem(evento){
    let txt = evento.target.value.toLowerCase();
    let itens = document.getElementsByTagName('li');
    Array.from(itens).forEach(function (item){
        let itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(txt) != -1) {
            item.style.display = 'block'
        } else {
            item.style.display='none';
        }
    })
    
}
form.addEventListener('submit', addItem);

function addItem(evento){
    evento.preventDefault();
    //recebr valor do campo input
    const textoItem = document.getElementById('item').value;
    if (textoItem!=''){
    //criar lista
    const li = document.createElement("li");
    //atribuir classe
    li.className = "list-group-item";
    // inserinndo o texto no li
    li.appendChild(document.createTextNode(textoItem));
    const btn = document.createElement('button');
    btn.className = 'btn btn-danger btn-sm float-end delete';
    btn.appendChild(document.createTextNode('X'));
    li.appendChild(btn);
    //adicionar o li à lista
    lista.appendChild(li);
    //resetar o formulario
    form.reset(); 
    } else {
        alert('Digite algo, bobao');
    }
}
lista.addEventListener('click', removeItem);
function removeItem(evento){
    alert('você clicou em mim');
    if(evento.target.classList.contains('delete')) {
        let li = evento.target.parentElement;
        lista.removeChild(li);
    }
}