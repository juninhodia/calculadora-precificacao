 function calcular() {
        const inputs = document.querySelectorAll('input');
        let invalidInput = false;

        inputs.forEach(input => {
            if (!input.value || isNaN(input.value)) {
                input.classList.add('invalid');
                invalidInput = true;
            } else {
                input.classList.remove('invalid');
            }
        });

        if (invalidInput) return;

        const valorProduto = parseFloat(document.getElementById('valorProduto').value);
        const descontoFornecedor = parseFloat(document.getElementById('descontoFornecedor').value) / 100;
        const icms = parseFloat(document.getElementById('icms').value) / 100;
        const frete = parseFloat(document.getElementById('frete').value);
        const embalagem = parseFloat(document.getElementById('embalagem').value)
        const lucroDesejado = parseFloat(document.getElementById('lucroDesejado').value) / 100;


        const valorReal = ((valorProduto - (valorProduto * descontoFornecedor) + (valorProduto * icms)));
        const gastoOperacional = frete + embalagem;
        const valorFinal = valorReal + (valorReal * lucroDesejado) + (frete + embalagem);
        const lucroLiquido = valorFinal - valorReal - gastoOperacional ;
       

        document.getElementById('valorReal').innerText = valorReal.toFixed(2);
        document.getElementById('lucroLiquido').innerText = lucroLiquido.toFixed(2);
        document.getElementById('valorFinal').innerText = valorFinal.toFixed(2);
        document.getElementById('gastoOperacional').innerHTML = gastoOperacional.toFixed(2)
    }

    function resetFields() {
        document.querySelectorAll('input').forEach(input => {
            input.value = '';
            input.classList.remove('invalid');
        });
    }

  
  function toggleDiv() {
    var div = document.getElementById("duvida");
    if (div.classList.contains("showing")) {
        div.style.opacity = '0';
        div.style.transform = 'translateY(-50px)';
        setTimeout(function() {
            div.style.display = 'none';
        }, 500);
        div.classList.remove("showing");
    } else {
        div.style.display = 'block';
        setTimeout(function() {
            div.style.opacity = '1';
            div.style.transform = 'translateY(0)';
        }, 10);
        div.classList.add("showing");
    }
}

const text = "Defina seu valor, impulsione seus lucros!";
const typedOutput = document.getElementById("typed-output");
let index = 0;

function typeText() {
    if (index < text.length) {
        typedOutput.textContent += text.charAt(index);
        index++;
        setTimeout(typeText, 100); // Define a velocidade da "digitação"
    } else {
        // Após terminar a "digitação", remova a animação do cursor
        document.querySelector('.cursor').style.animation = 'none';
    }
}

typeText();
