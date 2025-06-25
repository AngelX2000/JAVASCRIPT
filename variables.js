var x=2;
console.log(x)
//comentario de una linea

/*
comentario de 
multiples lineas
*/

//3 maneras de definir variables
//var -> mas antigua ECMA script 5
//let -> ECMA script 6
//const -> proteger la informacion


var b=2; //definicion
b=4  //modificando la variable
var b=8  //redefiniendo
console.log(b)

const c=8 //definicion
//c=10  //modificando la variable
//const c=12  //redefiniendo
console.log(c)

let d=6  //definicion
d=12  //modificando la variable
//let d=24 //redefiniendo
console.log(d)

//OPERADORES MATEMATICOS
console.log(2+4)//6
console.log("2"+4)//24
console.log("b"+4)//b4
console.log("2"*8)//16  javascript intenta convertir el str en numero
console.log(typeof(8+8))
console.log(typeof(8+8.3))


//potencia
console.log(2**3)
console.log(Math.pow(2,3))
console.log(`texto con variable ${d}`)

console.log(2==2)//true
console.log(2=="2")//true
console.log(2==="2")//false confirma tipos de datos

var usuario="andres"
var usuario='andres'
console.log(usuario.length)

//boolean
var login=true
console.log(typeof(login))
console.log(2!==2) //false