const productos = [
    {nombre: "Capuchino", precio: 100},
    {nombre: "Espresso", precio: 120},
    {nombre: "Mocchiato", precio: 160},
    {nombre: "Mocca", precio: 180},
];

let carrito = []

let seleccion = prompt("Hola usted desea comprar algun producto si o no")

while(seleccion != "si" && seleccion != "no"){
    alert("Ingresa si o no")
    seleccion = prompt ("Hola usted desea comprar algun producto si o no")
}

if(seleccion == "si"){
    alert("a continuacion se muesta nuestra lista de productos")
    let todoslosProductos = productos.map (
    (producto) => producto.nombre + " " +     producto.precio + "$");
    alert(todoslosProductos.join (" - "))
} 

else if (seleccion == "no"){
alert("Gracias por venir, te esperamos pronto!!")    
}