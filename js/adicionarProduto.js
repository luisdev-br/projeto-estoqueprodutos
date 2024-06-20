// Validacao do formulario
function validacaoFormulario(){
    var nome = document.getElementById("nome").value;
    var quantidade = document.getElementById("quantidade").value;
    var preco = document.getElementById("preco").value;
    var codigoindent = document.getElementById("codigoindent").value;

    if (nome == "") {
        alert("Nome e requerido");
        return false;
    }

    if (quantidade == "") {
        alert("Digite um numero valido");
        return false;
    }
    else if (quantidade < 1) {
        alert("Digite um numero positivo");
        return false;
    }

    if (preco == "") {
        alert("Digite um preco correto.");
        return false;
    }

    if (codigoindent == "") {
        alert("Digite um codigo correto.");
        return false;
    }

    return true;
}

// TESTE

function calcularValorTotal() {
    let total = 0;
    let detalhesProdutos = '';

    document.querySelectorAll('#crudTable tbody tr').forEach(row => {
        const nome = row.cells[0].textContent;
        const quantidade = parseFloat(row.cells[1].textContent) || 0;
        const preco = parseFloat(row.cells[2].textContent) || 0;
        const subtotal = quantidade * preco;
        total += subtotal;

        detalhesProdutos += `
            <p>
                <strong>Produto:</strong> ${nome}<br>
                <strong>Quantidade:</strong> ${quantidade}<br>
                <strong>Preço:</strong> R$ ${preco.toFixed(2)}<br>
                <strong>Subtotal:</strong> R$ ${subtotal.toFixed(2)}
            </p>
            <hr>
        `;
    });

    detalhesProdutos += `<p><strong>Valor Total:</strong> R$ ${total.toFixed(2)}</p>`;

    document.getElementById('valorTotalModalBody').innerHTML = detalhesProdutos;

    const valorTotalModal = new bootstrap.Modal(document.getElementById('valorTotalModal'));
    valorTotalModal.show();
}

// 

// Funcao para mostrar todos os dados.

function mostrarDados() {
    var listaProdutos;
    if (localStorage.getItem("listaProdutos") == null) {
        listaProdutos = [];
    }
    else {
        listaProdutos = JSON.parse(localStorage.getItem("listaProdutos"));
    }

    var html = "";

    listaProdutos.forEach(function(element, index) {
        html += "<tr>";
        html += "<td>" + element.nome + "</td>";
        html += "<td>" + element.quantidade + "</td>";
        html += "<td>" + element.preco + "</td>";
        html += "<td>" + element.codigoindent + "</td>";
        html += '<td><button onclick="deleteData(' +
            index +
            ')" class="btn btn-danger">Deletar</button><button onclick="updateData(' + 
            index +
            ')" class="btn btn-warning m-2">Editar</button></td>';
        html += "</tr>";
    });

    document.querySelector("#crudTable tbody").innerHTML = html;
}
// Carrega todos os dados quando o documento ou pagina e carregada.

document.onload = mostrarDados();

// funcao para adicionar produtos

function adicionar() {
    if (validacaoFormulario() == true) {
        var nome = document.getElementById("nome").value;
        var quantidade = document.getElementById("quantidade").value;
        var preco = document.getElementById("preco").value;
        var codigoindent = document.getElementById("codigoindent").value;

    var listaProdutos;
    if (localStorage.getItem("listaProdutos") == null) {
        listaProdutos = [];
    }
    else {
        listaProdutos = JSON.parse(localStorage.getItem("listaProdutos"));
    }

    listaProdutos.push({
        nome: nome,
        quantidade: quantidade,
        preco: preco,
        codigoindent: codigoindent,
    });

    localStorage.setItem("listaProdutos", JSON.stringify(listaProdutos));
    mostrarDados();
    document.getElementById("nome").value = "";
    document.getElementById("quantidade").value = "";
    document.getElementById("preco").value = "";
    document.getElementById("codigoindent").value = "";
    }
}

// Funcao para deletar produtos

function deleteData(index) {
    var listaProdutos;
    if (localStorage.getItem("listaProdutos") == null) {
        listaProdutos = [];
    }
    else {
        listaProdutos = JSON.parse(localStorage.getItem("listaProdutos"));
    }

    listaProdutos.splice(index, 1);
    localStorage.setItem("listaProdutos", JSON.stringify(listaProdutos));
    mostrarDados();
}

// Funcao para editar produtos

function updateData(index) {
    document.getElementById("Submit").style.display = "none";
    document.getElementById("Update").style.display = "block";

    var listaProdutos;
    if (localStorage.getItem("listaProdutos") == null) {
        listaProdutos = [];
    }
    else {
        listaProdutos = JSON.parse(localStorage.getItem("listaProdutos"));
    }

    document.getElementById("nome").value = listaProdutos[index].nome;
    document.getElementById("quantidade").value = listaProdutos[index].quantidade;
    document.getElementById("preco").value = listaProdutos[index].preco;
    document.getElementById("codigoindent").value = listaProdutos[index].codigoindent;

    document.querySelector("#Update").onclick = function() {
        if (validacaoFormulario() == true) {
            listaProdutos[index].nome = document.getElementById("nome").value;
            listaProdutos[index].quantidade = document.getElementById("quantidade").value;
            listaProdutos[index].preco = document.getElementById("preco").value;
            listaProdutos[index].codigoindent = document.getElementById("codigoindent").value;

            localStorage.setItem("listaProdutos", JSON.stringify(listaProdutos));
            mostrarDados();

            document.getElementById("nome").value = "";
            document.getElementById("quantidade").value = "";
            document.getElementById("preco").value = "";
            document.getElementById("codigoindent").value = "";

            document.getElementById("Submit").style.display = "block";
            document.getElementById("Update").style.display = "none";
        }
    }
}


