function executarSistema(){
    // Dados de entrada
    /* document.getElementById("---").value puxa
    dados colocados no site pelo ID do elemento */
    const nome = document.getElementById("inputNome").value;
    const idade = parseInt(document.getElementById("inputIdade").value);
    const valor = parseFloat(document.getElementById("inputValor").value);
    const cupom = document.getElementById("inputCupom").value === "true";

    // Dados de saída
    const msg = document.getElementById("mensagem-autorizacao");
    const lista = document.getElementById("lista-estoque");
    const relatorio = document.getElementById("relatorio-final");

    // Validação para campos vazios
    if (!nome || isNaN(idade) || isNaN(valor)){
        alert("Por favor, preencha todos os campos corretamente!");
        return;
    }

    // Regra de negócio
    if (idade >= 16){
        msg.innerText = `Venda autorizada: ${nome}`;
        msg.style.color = "#7aff77";

        // Desconto
        let valorFinal = (valor > 500 || cupom) ? valor * 0.85 : valor;

        // Estoque
        let estoque = ["Placa de vídeo", "Processador", "Memória RAM"];
        lista.innerHTML = ""; // Limpa a lista anterior

        // forEach: percorre o array e aplica uma ação pra cada elemento
        estoque.forEach(item => {
            let li = document.createElement("li");
            li.innerText = `Item ${item} reservado.`;
            lista.appendChild(li);  // usado para adicionar novo elemento
        });

        // Relatório
        relatorio.style.display = "block";
        relatorio.innerHTML = `
        <strong> RESUMO DO PEDIDO <\strong><br>
        Cliente: ${nome} <br>
        Total Original: R$ ${valor.toFixed(2)} <br>
        <strong> Total com Desconto: R$ ${valorFinal.toFixed(2)} <\strong>`;

    } else {
        msg.innerText = `Venda bloqueada: Menor de 16 anos.`;
        msg.style.color = "#ff4444";
        relatorio.style.display = "none";
        lista.innerHTML = "";
    }


}
