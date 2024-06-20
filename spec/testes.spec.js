// validacao.spec.js
const { calcularValorTotal, validacaoFormulario, adicionar } = require('../js/testes');


describe('Testes de validação do formulário', function() {
    it('deve retornar mensagem de erro se o nome estiver vazio', function() {
        expect(validacaoFormulario("", "10", "100.00", "123")).toBe("Nome e requerido");
    });

    it('deve retornar mensagem de erro se o nome estiver vazio', function() {
        expect(validacaoFormulario("","10", "100.00", "123")).toBe("Nome e requerido");
    });

});

describe('Testes de cálculo do valor total', function() {
    it('deve calcular o valor total dos produtos como uma string', function() {
        const mockListaProdutos = [
            { preco: "10.00", quantidade: "2" },
            { preco: "5.00", quantidade: "1" }
        ];

        const valorTotal = calcularValorTotal(mockListaProdutos);
        expect(valorTotal).toBe("25.00"); // Isso verifica se o valor retornado é a string '25.00'
    });

});

describe('Testes da função adicionar', function() {
    it('deve adicionar um produto à lista', function() {
        const mockListaProdutos = [];
        const novoProduto = {
            nome: "Produto Teste",
            quantidade: "1",
            preco: "10.00",
            codigoindent: "123"
        };

        const listaAtualizada = adicionar(novoProduto.nome, novoProduto.quantidade, novoProduto.preco, novoProduto.codigoindent, mockListaProdutos);
        expect(listaAtualizada).toContain(jasmine.objectContaining(novoProduto));
    });


    // Essa parte contem erro de proposito
    it('deve adicionar um produto à lista', function() {
        const mockListaProdutos = [];
        const novoProduto = {
            nome: "",
            quantidade: "1",
            preco: "10.00",
            codigoindent: "123"
        };

        const listaAtualizada = adicionar(novoProduto.nome, novoProduto.quantidade, novoProduto.preco, novoProduto.codigoindent, mockListaProdutos);
        expect(listaAtualizada).toContain(jasmine.objectContaining(novoProduto));
    });

    it('deve adicionar um produto à lista', function() {
        const mockListaProdutos = [];
        const novoProduto = {
            nome: "Produto Teste2",
            quantidade: "1",
            preco: "10.00",
            codigoindent: "1234"
        };

        const listaAtualizada = adicionar(novoProduto.nome, novoProduto.quantidade, novoProduto.preco, novoProduto.codigoindent, mockListaProdutos);
        expect(listaAtualizada).toContain(jasmine.objectContaining(novoProduto));
    });



    
});

// products.spec.js
// describe('Display products in the DOM', function() {
//     let tbody;

//     beforeEach(function() {
//         tbody = jasmine.createSpyObj('tbody', ['innerHTML']);
//         spyOn(document, 'querySelector').and.returnValue(tbody);
//     });

//     it('deve inserir HTML no tbody', async function() {
//         const mockProducts = [{
//             id: 1,
//             title: "Produto Teste",
//             category: "Categoria Teste",
//             price: 9.99,
//             image: "url-da-imagem"
//         },]; // Um array simulado de produtos

//         await displayProducts(mockProducts);

//         expect(tbody.innerHTML).toEqual(jasmine.any(String));
//     });
// });
