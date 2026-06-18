let media = 0;

function receberNotas(){
    let nota1 = Number(prompt("Digite a sua primiera nota: "));
    let nota2 = Number(prompt("Digite a sua segunda nota: "));
 
     media = verificarMedia(nota1, nota2);
}

function verificarMedia(nota1, nota2){
     return (nota1 + nota2 ) / 2;
    
}

function mostrarMedia() {
    alert ("A sua média é: " + media);
}




