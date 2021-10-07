function addProdutoAoCarrinho(carrinho, produto) {
    let existe = false;
    for (let item of carrinho.produtos) {
        if (produto.id === item.id) {
            item.qtd += produto.qtd;
            existe = true;
        }
    }
    for (let item of carrinho.produtos) {
        if (!existe) {
            carrinho.produtos.push(produto);
            break;
        }

    }
    function imprimirResumoDoCarrinho(carrinho) {
        let total = 0;
        let itens = 0;
        for (let item of carrinho.produtos) {

            total += (item.precoUnit * item.qtd);
            itens += item.qtd;

        }
        console.log(`Cliente: ${carrinho.nomeDoCliente} \nTotal de itens: ${itens}\nTotal a pagar: R$ ${(total)}`);
    }
}

const carrinho = {
    nomeDoCliente: "Guido Bernal",
    produtos: [
        {
            id: 1,
            nome: "Camisa",
            qtd: 3,
            precoUnit: 3000
        },
        {
            id: 2,
            nome: "Bermuda",
            qtd: 2,
            precoUnit: 5000
        }
    ],
    imprimirResumo: function () {

        console.log(`Cliente: ${this.nomeDoCliente} \nTotal de itens: ${this.calcularTotalDeItens()}\nTotal a pagar: R$ ${this.calcularTotalAPagar() / 100}`);
    },
    addProduto: function (produto) {
        let existe = false;
        for (let item of this.produtos) {
            if (produto.id === item.id) {
                item.qtd += produto.qtd;
                existe = true;
            }
        }
        for (let item of carrinho.produtos) {
            if (!existe) {
                this.produtos.push(produto);
                break;
            }

        }

    },
    imprimirDetalhes: function () {
        let cont = 0;
        for (let item of this.produtos) {
            cont++;
            console.log(`Item ${cont} - ${item.nome} - ${item.qtd} und - R$ ${(item.qtd * item.precoUnit) / 100}`);
        }
        console.log(`Total de itens: ${this.calcularTotalDeItens()} itens \nTotal a pagar: R$ ${this.calcularTotalAPagar() / 100}`);
    },
    calcularTotalDeItens: function () {
        let itens = 0;
        for (let item of this.produtos) {
            itens += item.qtd;
        }
        return itens;
    },
    calcularTotalAPagar: function () {
        let total = 0;
        for (item of this.produtos) {
            total += item.precoUnit * item.qtd;
        }

        return total;
    },
    calcularDesconto: function () {
        let menor = 0;
        let primeiroDesconto = 0;
        let segundoDesconto = 0;
        if (this.calcularTotalDeItens() > 4) {
            for (let item of this.produtos) {
                if (menor < item.precoUnit) {
                    menor = item.precoUnit;
                }
            }

        }
        if (this.calcularTotalAPagar() > 10000) {
            segundoDesconto = this.calcularTotalAPagar() - (this.calcularTotalAPagar() * 0.1);

        }
        if (menor < segundoDesconto) {
            console.log(`O valor do desconto será de ${(menor / 100).toFixed(2)} reais \ne o total que o cliente pagará com o desconto será de R$ ${(primeiroDesconto = (this.calcularTotalAPagar() - menor) / 100).toFixed(2)}`);
        } else {
            console.log(`O valor do desconto será de ${((this.calcularTotalAPagar() * 0.1) / 100).toFixed(2)} reais \ne o total que o cliente pagará com o desconto será de R$ ${(segundoDesconto / 100).toFixed(2)}`);
        }

    }

}
const novaBermuda = {
    id: 2,
    nome: "Bermuda",
    qtd: 3,
    precoUnit: 5000
}


const novoTenis = {
    id: 3,
    nome: "Tenis",
    qtd: 1,
    precoUnit: 10000
}
carrinho.addProduto(novaBermuda);
carrinho.addProduto(novoTenis);
carrinho.imprimirDetalhes();
carrinho.imprimirResumo();
carrinho.calcularDesconto();
