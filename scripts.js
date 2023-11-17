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


