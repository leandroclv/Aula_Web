function calcularCompra(produto, numParcelas) {
    const precoOriginal = produto.preco;
    let valorFinal;

    if (numParcelas === 0) {
        valorFinal = precoOriginal * 0.9; // 10% de desconto
        console.log(`Valor final com desconto: R$ ${valorFinal.toFixed(2)}`);
    } else if (numParcelas >= 1 && numParcelas <= 10) {
        const valorParcela = precoOriginal / numParcelas;
        console.log(`Valor de cada parcela (sem juros): R$ ${valorParcela.toFixed(2)}`);
    } else if (numParcelas >= 11 && numParcelas <= 12) {
        const valorTotalComJuros = precoOriginal * 1.02; // 2% de juros
        const valorParcelaComJuros = valorTotalComJuros / numParcelas;
        console.log(`Valor de cada parcela (com 2% de juros): R$ ${valorParcelaComJuros.toFixed(2)}`);
    } else {
        console.log('Número de parcelas não é permitido. O máximo é 12.');
    }
}