
function Fecha(dia,mes,año){
    this.dia = dia;
    this.mes = mes;
    this.año = año;
}

function Producto( nombre , existencia, precios,fecha){
    this.nombre     = nombre;
    this.existencia = existencia
    this.fechaVecn  = fecha,
    this.precios    = precios;
    this.aumentar   = function (){ 
        this.precios = this.precios*1.2; 
    };
}
var f = new Fecha(5,10,2018)
var p = new Producto("harina",10,[250,270,300],f )

var q = new Producto("arroz",55,[],new Fecha(15,10,2019) )
q.precios.push(150);
var productos = [];

productos.push(p);
productos.push(q);
productos.push(new Producto("pasta",620,[156,180],new Fecha(10,10,2020)))

for (j=0;j<productos.length;j++){
    // se accede a los atributos del producto J
    console.log("Precios de ",productos[j].nombre)
    for (i=0;i<productos[j].precios.length;i++){
        // se muestra el precio I del producto J
        console.log(productos[j].precios[i]+" Bs")
    }
    console.log("Se vence el año ",productos[j].fechaVecn.año)
    // un ciclo para recorrer los precios del producto J
    console.log("  ");
}
