let totalGeral = 0
document.getElementById('lista-produtos').innerHTML = '';
document.getElementById('valor-total').textContent = 'R$ 0';

function adicionar() {
//Recuperar valores do formulario (nome /quantidade/ valor)
    let produto = document.getElementById('produto').value;
    let quantidade = document.getElementById('quantidade').value;
    let nomeProduto = produto.split('-')[0];
    let valorProduto = (produto.split('R$')[1]);

    if (quantidade > 0) {
        console.log('nome: ', nomeProduto);
        console.log('valor: ', valorProduto);
        console.log('quantidade: ', quantidade);
        
    //Calcular preço - subtotal
        let subtotal = 0
        subtotal = valorProduto * quantidade;
        console.log('subtotal: ', subtotal);
    
    //Somar total
    
        totalGeral = totalGeral + subtotal
    
    //Inserir valores no carrinho
        let carrinho = document.getElementById('lista-produtos');
        let total = document.getElementById('valor-total');
    
        carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
        <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${valorProduto}</span>
        </section>`
        console.log(carrinho);
    
        total.textContent = `R$ ${totalGeral}`;
    
        document.getElementById('quantidade').value = '';
    }else{
        alert('Insira uma quantidade válida antes de adicionar itens ao carrinho')
    }
    
}

function limpar() {
    if(confirm('Você tem certeza de que gostaria de limpar o seu carrinho de compras?')){
        totalGeral = 0;
        document.getElementById('lista-produtos').innerHTML = '';
        document.getElementById('valor-total').innerText = 'R$ 0';
    }
}