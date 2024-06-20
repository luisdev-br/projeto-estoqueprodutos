// validacao.js
function validacaoFormulario(nome, quantidade, preco, codigoindent) {
    if (nome == "") {
        return "Nome e requerido";
    }

    if (quantidade == "") {
        return "Digite um numero valido";
    } else if (quantidade < 1) {
        return "Digite um numero positivo";
    }

    if (preco == "") {
        return "Digite um preco correto.";
    }

    if (codigoindent == "") {
        return "Digite um codigo correto.";
    }

    return true;
}

// calculo.js
function calcularValorTotal(listaProdutos) {
    let valorTotal = 0;

    if (listaProdutos) {
        listaProdutos.forEach(function(produto) {
            const preco = parseFloat(produto.preco);
            const quantidade = parseInt(produto.quantidade);

            valorTotal += preco * quantidade;
        });
    }

    return valorTotal.toFixed(2); // Isso retornará uma string com duas casas decimais
}

function adicionar(nome, quantidade, preco, codigoindent, listaProdutos) {
    if (validacaoFormulario(nome, quantidade, preco, codigoindent) == true) {
        listaProdutos.push({
            nome: nome,
            quantidade: quantidade,
            preco: preco,
            codigoindent: codigoindent,
        });
    }
    return listaProdutos;
}

// describe('Fetch and display products', function() {
//     beforeEach(function() {
//         spyOn(window, 'fetch').and.returnValue(Promise.resolve({
//             json: () => Promise.resolve(mockProducts) // mockProducts é um array simulado de produtos
//         }));
//     });

//     it('deve chamar fetch e exibir produtos', async function(done) {
//         spyOn(window, 'displayProducts').and.callThrough();

//         await fetchProducts(); // fetchProducts é a função que chama fetch e depois displayProducts

//         expect(fetch).toHaveBeenCalled();
//         expect(displayProducts).toHaveBeenCalledWith(mockProducts);
//         done();
//     });
// });

module.exports = {
    calcularValorTotal,
    validacaoFormulario,
    adicionar
};
