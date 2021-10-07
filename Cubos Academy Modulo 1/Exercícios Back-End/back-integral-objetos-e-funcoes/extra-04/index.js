const contaBancaria = {
    nome: "Maria",
    saldo: 0,
    historicos: [],
    depositar: function (valor) {

        this.saldo += valor;
        this.historicos.push("Depósito", valor);
        console.log(`Depósito de R$ ${(valor / 100).toFixed(2)} realizado para o cliente: ${this.nome}`);
        return valor;
    },
    sacar: function (valor) {

        if (valor <= this.saldo) {
            this.saldo -= valor;
            this.historicos.push("Saque", valor);
            console.log(`Saque de R$${(valor / 100).toFixed(2)} realizado para o cliente: ${this.nome}`)
        } else {
            console.log(`Saldo insuficiente para o saque de: ${this.nome}`);
        }
        return valor;
    },
    extrato: function () {
        let totalDeposito = 0;
        let totalSaque = 0;

        totalDeposito += this.historicos.slice((this.historicos.indexOf("Depósito") + 1), (this.historicos.indexOf("Depósito")) + 2);
        totalDeposito = parseInt(totalDeposito, 10);



        totalSaque += this.historicos.slice((this.historicos.indexOf("Saque") + 1), (this.historicos.indexOf("Saque")) + 2);
        totalSaque = parseInt(totalSaque, 10);

        console.log(`Extrato de ${this.nome} - Saldo: R$${(this.saldo / 100).toFixed(2)}\nHistórico:\nDepósito de R$${(totalDeposito / 100).toFixed(2)}\nSaque de R$${(totalSaque / 100).toFixed(2)}`);

    }
}

contaBancaria.depositar(10000);
contaBancaria.sacar(50000);
contaBancaria.sacar(5000);
contaBancaria.extrato();