// // tienda de cafe, se vende cafe de 250 gr, el cliente pone cantidad, tipo de cafe, da como resultados valores a pagar y costo de envio calculuado por cantidad de cafe comprado.

// const cafeGrano = 557
// const cafeMolido  = 458
// const cafeDescafeinado = 619
// const cafeEspecial = 1841

// let cantidad; 
// let tipoCafe;
// let resultado;

// //operacion multiplicar
// function multiplicar(precioCafeelegido, cantidadCafe){
//     const resultado = precioCafeelegido * cantidadCafe;
//     return resultado;
// }
// //paso 1: que nos diga por prompt la cantidad cafe, teniendo en cuenta que 0. cierra el ciclo.


// while (cantidad != 0){
//     cantidad = parseInt(prompt("Ingresar cantidad de cafe, recuerde que 0 cero, termina la carga"));
    
//     if (cantidad === 0){
//         break;
//     }

// //paso 2: elija la marca de cafe que quiera comprar, con A B C y D.    
//     tipoCafe = prompt("Ingrese el tipo de cafe que quiere llevar:\n\ -Si quiere Cafe en grano ingrese = A \n\ -Si quiere Cafe Molido ingrese = B \n\ -Si quiere Cafe Descafeinado ingrese = C \n\ -Si quiere Cafe Especial ingrese = D ");
     
//     switch (tipoCafe){
//         case "A":
//            resultado = multiplicar(cafeGrano, cantidad);
//            alert("Debe abonar $ "+ resultado + " por su compra de cafe marca A");
//            break;
//         case "B":
//             resultado = multiplicar(cafeMolido, cantidad);
//             alert("Debe abonar $ "+ resultado + " por su compra de cafe marca B");
//             break;
//         case "C":
//             resultado = multiplicar(cafeDescafeinado, cantidad);
//             alert("Debe abonar $ "+ resultado+ " por su compra de cafe marca C");
//             break;
//         case "D":
//             resultado = multiplicar(cafeEspecial, cantidad);
//             alert("Debe abonar $ "+ resultado + " por su compra de cafe marca D");
//             break;    
//         default:
//             alert("Operacion Invalida");
//             break;
//     }

//     if (cantidad >= 10 ){
//         valorEnvio = 0
//         alert("Su costo de envio es $"+ valorEnvio);
//     }
//     else if (cantidad >=5 ){
//         valorEnvio = 100
//         alert("Su costo de envio es $"+ valorEnvio);
//     }
//     else {
//         valorEnvio = 200
//         alert("Su costo de envio es $"+ valorEnvio);
//     }
// }







let products = JSON.parse(localStorage.getItem("products")) || [];
let total = 0;



function add(product, price) {
    console.log(product,price);
    products.push(product);
    total = total + price;
    document.getElementById("checkout").innerHTML = `Pagar $${total}`
    saveLocal ();
}

function pay() {
    window.alert(products.join(",\n"));

}



function loguear()
{

let user=document.getElementById("usuario").value;
let pass=document.getElementById("clave").value;

if(user=="Juan" && pass=="1234") 
{
    window.location="bienvenida.html";

}

else
{
    alert("Datos incorrectos"); 
}

}




// set item
const saveLocal = () => {
    localStorage.setItem("products",JSON.stringify(products));
};

// get Item


