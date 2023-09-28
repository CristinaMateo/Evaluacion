//1) Diseña un algoritmo que cuente las veces que aparece una determinada letra en una frase.

function contarLetras(frase, letra){
    let total = [];
    if(typeof frase !== String){ 
        frase = frase.toString(); 
    }
    for(let i = 0; i < frase.length; i++) {
      if (frase[i].toLowerCase() === letra.toLowerCase()) total.push(i);
    }
      return total.length;
  }
console.log(contarLetras(["hoja", "bote", "planta"], "a")) // expected output: 3
console.log(contarLetras("Se mE han ColadO los Espaguetis en El dEsagüe", "e")) //expected output: 8
console.log(contarLetras("en este no hay nada que buscar", "f"))// espected output: 0
console.log(contarLetras("no uppercase in here", "E"))//expected output: 4

//Creo la funcion contarLetras que acepta una frase y una letra. En ella hay un array vacío que va a servir para almacenar la cantidad de veces que aparece determinada letra. Incluyo un condicional (if) en el que convierte la "frase" en un string,  pongo este paso por si a alguien, por algún motivo, se le ocurre insertar una frase en forma de array. Paso un bucle por la frase que itere por todo su largo i si un elemento de la frase (puesta en minúscula) en la iteración coincide con la letra(también en minúscula), se añade i al array vacío del principio. También podría añadir frase[i], pero así almacena en el "total" la posición en la que se encuentra esa letra y es más sencillo de seguir. La funcion debe devolverme el largo del "total", que es la cantidad de veces que aparece la letra.


//2)Diseña un algoritmo que imprima los números impares entre un número dado por el usuario y los siguientes 50 números


function impares(){
    //let num = parseInt(prompt("Introduzca un número entero."));
    let num = Math.floor(Math.random() * 1)
    let masCincuenta = (num+50)
     let arr =[]
     while(num <= masCincuenta){
       arr.push(num++)
 } 
 let resultado =[]
     for(i=0;i<arr.length;i++){
         if(arr[i] % 2 !== 0){
             resultado.push(arr[i])
         }
     }
     return resultado
 }
 
