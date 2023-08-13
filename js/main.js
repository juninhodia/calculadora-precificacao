const calcularButton = document.getElementById("calcular");
    const resultadoDiv = document.getElementById("resultado");

    calcularButton.addEventListener("click", () => {
      const custoProduto = parseFloat(document.getElementById("custoProduto").value);
      const descontoFornecedor = parseFloat(document.getElementById("descontoFornecedor").value);
      const impostoICMS = parseFloat(document.getElementById("impostoICMS").value);
      const custoFrete = parseFloat(document.getElementById("custoFrete").value);
      const embalagem = parseFloat(document.getElementById("embalagem").value);
      const lucroDesejado = parseFloat(document.getElementById("lucroDesejado").value);

      const custoTotal = custoProduto - (custoProduto * (descontoFornecedor / 100)) + custoFrete + embalagem;
      const impostoTotal = custoTotal * (impostoICMS / 100);
      const custoComImposto = custoTotal + impostoTotal;
      const precoVenda = custoComImposto + (custoComImposto * (lucroDesejado / 100));

      resultadoDiv.innerHTML = `Preço de Venda: R$ ${precoVenda.toFixed(2)} <br><br>`;
      resultadoDiv.innerHTML += `<button id="verPrecos">Ver Preços por Tipo de Cartão</button>`;
    });

    resultadoDiv.addEventListener("click", (event) => {
      if (event.target.id === "verPrecos") {
        const taxaDebito = parseFloat(prompt("Digite a taxa de Cartão de Débito (%):"));
        const taxaCredito = parseFloat(prompt("Digite a taxa de Cartão de Crédito (%):"));

        const precoVenda = parseFloat(resultadoDiv.textContent.match(/\d+\.\d+/)[0]);

        const precoDebito = precoVenda + (precoVenda * (taxaDebito / 100));
        const precoCredito = precoVenda + (precoVenda * (taxaCredito / 100));

        resultadoDiv.innerHTML += `<br>Preço com Cartão de Débito: R$ ${precoDebito.toFixed(2)}`;
        resultadoDiv.innerHTML += `<br>Preço com Cartão de Crédito: R$ ${precoCredito.toFixed(2)}`;
      }
    });