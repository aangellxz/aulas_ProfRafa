// ATV 1
// let numero = 0;

// function btnHelloWorldMais(){
//     while( numero >= 0){
//     console.log("Hello world");
//     return numero ++;  
// };   
// };

// function btnHelloWorldMenos(){
//     while( numero < numero){
//     console.log("Hello world");
//     return  numero --;  
// };   
// };


// ATV 2
// for (let numero = 0; numero <= 50; numero++) {
//     if (numero % 2 == 0) {
//         console.log(`${numero} é par!`);
//     } else {
//         console.log(`${numero} é impar!`);
//     }
// };


//  for( numero = 0; numero <= 50; numero ++){
//      console.log(`${numero}: Hello world`);
// };   

// ATV 3

//   for( numero = 100; numero >= 50; numero --){
//      console.log(`${numero}: Hello world`);
//  }; 


// ATV 4

// let numero = 7;
// let divisoes = 0;

// for(let i = 1; i <= numero; i ++){
//     if(numero % i == 0){
//         divisoes++
//     };
// };
//  if(divisoes == 2){
//     console.log(`O numero ${numero} é primo`);
    
//  } else{
//       console.log(`O numero ${numero} não é primo`);
//  };


// ATV 5 
let nome = prompt(`Digite o seu nome: `)
let idade = Number(prompt(`Informe a sua Idade`));
let cnh = true;

if (idade >= 18 && cnh == true){
    alert (`Olá, ${nome}. Pode dirigir`);    
} else if (idade >= 18 && cnh == false){
    alert (`Olá, ${nome}. Não pode dirigir`); alert (`Olá, ${nome}. Não pode dirigir`);    
} else{
     alert (`Olá, ${nome}. Não pode dirigir`);
};