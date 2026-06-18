// Exercícios 
// ATV 1 
function peba(){
    let vitorias = Number(prompt("Quantas Vitórias?"));
    let empates = Number(prompt("Quantos Empates?"));
    let pontos = (vitorias * 3) + empates;
     alert(`O time possui ${pontos} pontos.`);
};

// ATV 2
function pePequeno(){
    let sapato = Number(prompt("Qual o valor do sapato?"));
    let quantidade = Number(prompt("Qual a quantidade?"));
    let total = sapato * quantidade;
    alert (`O valor total é R$${total}`);
};

// ATV 3 

function guilhermePortoes(){
    let estagiarios = Number(prompt("Quantos estagiarios?"));
    let clt = Number(prompt("Quantos clt?"));
    let pj = Number(prompt("Quantos pj?"));
    let total = estagiarios + clt + pj;
    alert (`O total de funcionaris é: ${total}.`);
};

// ATV 4
function trajetoPomar(){
    let inicial = Number(prompt("Quantidade inicial de Laranjas?"));
    let final = Number(prompt("Quantidade final de Laranjas?"));
    let total = inicial - final;
    alert (`Você vendeu ${final} laranjinhas`);
};

// ATV 5
function peernambuco(){
    let valorMensal = Number(prompt("Qual o valor mensal da Igreja?"));  // 1500
    let dizimo = 300;
    let dizimistas =  Number(prompt("Quantos dizimistas doaram?")); // 2
    let valorDoado = dizimo * dizimistas;
    
    alert (`Falta R$${valorMensal - valorDoado}`);
};

// ATV 6 

function junin(){
    let salarioMensal = Number(prompt("Digite o seu sálario mensal"));
    let diasTrabalhados = Number(prompt("Digite os dias Trabalhados"));
    let recebidoPorDia = salarioMensal / diasTrabalhados; 
    let recebidoPorSemana = recebidoPorDia * 5;

    alert (`Você recebeu R$${recebidoPorSemana} na semana, e R$${recebidoPorDia} ao dia.`)
};

// ATV 7

function tallesTransporte(){
    let tara = Number(prompt("Informe o peso do caminhão: "));
    let carga = Number(prompt("Informe a quilograma da carga do caminhão: "));
    let pesoBruto = tara + carga;

    alert (`O caminhão sem carga pesa ${tara}kg, a carga ${carga}kg. Seu peso bruto é ${pesoBruto}kg`);
};

// ATV 8
function monika(){
    let celular = 100
    let chance = (0.1/(1 + 500 * celular)) * 100;
    console.log (`Você olhou o celular ${celular} vezes, suas chances são de ${chance.toFixed(4)}!`);  
};

// ATV 9

function tellesTansportes2(){
   let peso = Number(prompt(`Informe o peso em kg: `));
   let distancia = Number(prompt(`Informe a distancia em km: `));
   let volume = Number(prompt(`Informe o volume em m³ : `));
   let frete=15+(2 * peso)+(0.05 * distancia)+(10 * volume);
   
   alert (`O frete ficou: R$${frete.toFixed(2)}`);
};

// ATV 10
function donaBete(){
     let brutoTotal =  Number(prompt(`Informe o faturamento total: `));
     let premiacoes =  Number(prompt(`Informe o valor pago em premiações: `));
     let presentes = Number(prompt(`Informe o valor pago em   suborno: `));
     let comissoes = Number(prompt(`Informe o valor pago em   comissão dos funcionários: `));
    
     let calculo = brutoTotal - (premiacoes + presentes + comissoes);

     alert (`O seu lucro de hoje foi de R$${calculo.toFixed(2)}.`)
}; 

// ATV 11
function captaoGanso(){
     let suprimento = Number(prompt("Quanto foi gasto em suprimento para o navio?"));

     let faturamentoIngresso = Number(prompt("Qual o valor faturado em ingresso?"));

     let faturamentoItem = Number(prompt("Qual o valor faturado em itens vendido?"));

     let totalFaturamento = faturamentoIngresso + faturamentoItem;

     let lucroReais = totalFaturamento - suprimento;

     let lucroPorcentagem = (lucroReais / suprimento) * 100;

     alert( "O lucro em reais foi: R$ " + lucroReais + " e o lucro e porcentagem é: " +  lucroPorcentagem.toFixed(2) + "%");

};


// ATV 12

function sarumano() {

    let qtdShow = Number(prompt("Quantos show estão agendados?"));

    let precoBomba = Number(prompt("Qual valor unitário de cada bomba?"));

    let qtdBomba = qtdShow * 7;

    let total = qtdBomba * precoBomba;

    alert("Ele precisa de " + qtdBomba + " bomba, o custo total R$ " + total);
};

// ATV 13
function manoJuca() {

    let salario = Number(prompt("Qual o salario por mês?"));

    let moradia = Number(prompt("Qual o valor do aluguel?"));

    let agua = Number(prompt("Qual o valor da conta D´agua"));

    let luz = Number(prompt("Qual o valor da conta de luz?"));

    let internet = Number(prompt("Qual o valor da conta da internet?"));

    let gasolina = Number(prompt("Qual o valor gasto em gasolina?"));

    let streamings = Number(prompt("Qual o valor da conta de streamings?"));

    let telefone = Number(prompt("Qual o valor da conta de telefone?"));

    let outros = Number(prompt("Qual o valor gasto em outros?"));

    let totalGasto = moradia + agua + luz + internet + gasolina + streamings + telefone + outros;

    let sobrou = salario - totalGasto;

    if (sobrou < 0) {
        alert(`Sobrou nada esse mês, ECONOMIZE AGORA!!!`)

    } else {

        alert(`O valor gasto durante o mês é R$${totalGasto}, sobrou do seu salário R$${sobrou}`)
    };
};

// ATV 14
function romeroBrique() {

    let valorObra = Number(prompt("Qual o valor pago na obra de arte?"));

    let revender =( valorObra * 2.0) + valorObra;

    alert(revender);
};

// ATV 15
function petShopp() {

    let racao = Number(prompt("Quantas gramas foi comprado de ração?"));

    let kg = racao / 1000;

    let total = kg * 10;

    alert(total);
};

// ATV 16
function Churrascaria() {

    let cliente = Number(prompt("Quantas pessoas irão?"));

    let carne = cliente * 0.5 ;
    let cerveja = cliente * 1;
    let agua = cliente * 0.5;;

    alert("Como vão " + cliente + " todos irão usar " + carne + "kg de carne " + cerveja + "L de cerveja " + agua + "L de agua e " + refri + "L de refri");
};

