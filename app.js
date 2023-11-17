const shopContent = document.getElementById("shopContent");


const productos = [
    {
        id:1,
        nombre: "Capuchino", 
        precio: 100,
        img:
        "https://www.istockphoto.com/es/foto/filtro-de-caf%C3%A9-gm1033432408-276752868?utm_source=pixabay&utm_medium=affiliate&utm_campaign=SRP_image_sponsored&utm_content=https%3A%2F%2Fpixabay.com%2Fes%2Fimages%2Fsearch%2Fcaf%25C3%25A9%2F&utm_term=caf%C3%A9",

    },
        
    {
        id:2,
        nombre: "Espresso", 
        precio: 120,
        img:
        "https://www.istockphoto.com/es/foto/concepto-de-caf%C3%A9-turco-taza-de-caf%C3%A9-con-granos-de-caf%C3%A9-sobre-fondo-de-madera-gm1301467250-393504774?utm_source=pixabay&utm_medium=affiliate&utm_campaign=SRP_image_sponsored&utm_content=https%3A%2F%2Fpixabay.com%2Fes%2Fimages%2Fsearch%2Fcaf%25C3%25A9%2F&utm_term=caf%C3%A9",

    },


    {
        id:3,
        nombre: "Mocchiato", 
        precio: 160,
        img:
        "https://pixabay.com/es/photos/caf%C3%A9-bol%C3%ADgrafo-computadora-port%C3%A1til-2306471/",


    },
       
    {   
        id:4,
        nombre: "Mocca", 
        precio: 180,
        img:
        "https://pixabay.com/es/photos/taza-de-caf%C3%A9-caf%C3%A9-latido-del-coraz%C3%B3n-2317201/",
    },    
];

let carrito = [];

productos.forEach((product)=> {
    let content= document.createElement("div");
    content.className = "card";
    content.innerHTML = `
       <img src="${product.img}">
       <h3>${product.nombre}</h3>
       <p class="price">${product.precio} $</p>
    
    `;

    shopContent.append(content);


    let comprar = document.createElement("button")
    comprar.innerText = "comprar"
    comprar.className = "comprar"

    content.append(comprar);


});