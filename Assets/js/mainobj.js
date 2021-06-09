function Articulo(codigoArt, descripcion, proveedor1, costo1, proveedor2, costo2, proveedor3, costo3, stockActual, precioVtaMay, precioVtaMin) {
  this.codigoArt=codigoArt;
  this.descripcion=descripcion;
  this.proveedor1=proveedor1;
  this.costo1=costo1;
  this.proveedor2=proveedor2;
  this.costo2=costo2;
  this.proveedor3=proveedor3;
  this.costo3=costo3;
  this.stockActual=stockActual;
  this.precioVtaMay=precioVtaMay;
  this.precioVtaMin=precioVtaMin;
}
const articulo1=new Articulo(100,'Balde de albañil','Fieltret',50 ,'Voss XXI', 48, 'Durador', 45, 25, 100, 125);
const articulo2=new Articulo(200,'Cable unipolar','cecam',1500 ,'Codesil', 1600, 'Cablefactory', 1600, 5, 3000, 3300);
const articulo3=new Articulo(300,'Latex exterior lavable 20 litros blanco','Madersol',1500 ,'Castelbianco', 1600, 'Micam', 1600, 5, 3000, 3300);

console.log(articulo1);
console.log(articulo2);
console.log(articulo3);

