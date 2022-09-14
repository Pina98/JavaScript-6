let par = 0
let impar = 0

for(let i = 0;i < 10; i++){
   let num = parseInt(prompt(`Digite o ${i + 1}º número`));
   
   if(num % 2 == 0){
    par++
    }
    else if(num % 2 != 0){
    impar++
    }

}
document.write(`há ${impar} números ímpar `);
document.write(`<br> há ${par} números número `);