function calcularMedia(){
         
    // leitura de dados
    let n1 = Number(prompt("n1"));
    let n2 = Number(prompt("n2"));
    
    // processo
    let media = (n1 + n2) / 2
    
    // saidas
    // console.log(media);
    alert("Sua média aqui : " + media + "🖕" );
};


function converterDolar(){
    let numeroReal = Number(prompt("Digite a quantia em REAL: ")); 
    let dolar = 5.02;
    
    let conversao = numeroReal / dolar;

    return alert(`A quantia de R$${numeroReal}, em dolár, fica: $${conversao.toFixed(2)}`)
}
