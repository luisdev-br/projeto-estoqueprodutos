const sidebarToggle = document.querySelector("#sidebar-toggle");
sidebarToggle.addEventListener("click",function(){
    document.querySelector("#sidebar").classList.toggle("collapsed");
});

document.querySelector(".theme-toggle").addEventListener("click",() => {
    toggleLocalStorage();
    toggleRootClass();
});

function toggleRootClass(){
    const current = document.documentElement.getAttribute('data-bs-theme');
    const inverted = current == 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-bs-theme',inverted);
}

function toggleLocalStorage(){
    if(isLight()){
        localStorage.removeItem("light");
    }else{
        localStorage.setItem("light","set");
    }
}

function isLight(){
    return localStorage.getItem("light");
}

if(isLight()){
    toggleRootClass();
}

function paginaPrincipal(){
    // Defina o atraso em milissegundos (por exemplo, 2000 ms = 2 segundos)
    const delay = 170; 

    // Exiba uma mensagem enquanto o atraso está ocorrendo (opcional)

    // Use setTimeout para atrasar a navegação
    setTimeout(function() {
        // Defina o URL para onde você quer navegar
        const url = 'index.html'; 
        // Navegue para o URL especificado
        window.location.href = url;
    }, delay);
}

// function redirecionarAddProduto() {
//     let adicionarProduto = "adicionar_produto.html";
//     window.location.href = adicionarProduto;
// }

function redirecionarAddProduto() {
     // Defina o atraso em milissegundos (por exemplo, 2000 ms = 2 segundos)
     const delay = 170; 

     // Exiba uma mensagem enquanto o atraso está ocorrendo (opcional)
 
     // Use setTimeout para atrasar a navegação
     setTimeout(function() {
         // Defina o URL para onde você quer navegar
         const url = 'adicionar_produto.html'; 
         // Navegue para o URL especificado
         window.location.href = url;
     }, delay);
}

function redirecionarProdutosCadastrado() {
    // Defina o atraso em milissegundos (por exemplo, 2000 ms = 2 segundos)
    const delay = 170; 

    // Exiba uma mensagem enquanto o atraso está ocorrendo (opcional)

    // Use setTimeout para atrasar a navegação
    setTimeout(function() {
        // Defina o URL para onde você quer navegar
        const url = 'produtos_cadastrados.html'; 
        // Navegue para o URL especificado
        window.location.href = url;
    }, delay);
}

function redirecionarHomepage() {
    // Defina o atraso em milissegundos (por exemplo, 2000 ms = 2 segundos)
    const delay = 170; 

    // Exiba uma mensagem enquanto o atraso está ocorrendo (opcional)

    // Use setTimeout para atrasar a navegação
    setTimeout(function() {
        // Defina o URL para onde você quer navegar
        const url = 'index.html'; 
        // Navegue para o URL especificado
        window.location.href = url;
    }, delay);
}

