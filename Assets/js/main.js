   //Ingreso un articulo a comprar, precio y cantidad a comprar
   var articulo = prompt("Ingrese articulo: ");
   var precio = parseInt(prompt("Ingrese precio neto: "));
   var cant = parseInt(prompt("Ingrese la cantidad: "));
  
   //calculo el subtotal
   var subt = calculosubtotal();
   //calculo el iva
   var precioiva = calculoiva(subt);
   //calculo el costo del envio
   var envio = calculoenvio(subt)
   //calculo el total de la compra
   preciofinal = (subt + precioiva + envio);
   alert("Articulo: " + articulo + "  -  Precio final (incluye costo de envio):  $" + preciofinal); 
   

function calculosubtotal () {
  st = (precio * cant);
  return st;
}

function calculoiva (parsubt) {
    var iva = 21;
    precioiva = ( parsubt * iva )/100;
    return precioiva;
}

function calculoenvio (parsubt) {
    var gastoenvio = 10;
    envio = ( parsubt * gastoenvio )/100;
    return envio;
}