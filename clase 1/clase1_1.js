var producto = {
    nombre      :"harina pan",
    existencia  :0,
    precio      :250,
    excento     :false,
    moneda      :"Bs",
    marca       :"polar",
    aumentar    :function(){
        this.precio *= 1.2;
    },
    mostrar     :function(){
        console.log("El precio es "+this.precio+" "+this.moneda)
    }
}
producto.tipo = "amarilla";
console.log("la "+producto.nombre+" cuesta "+producto.precio)
console.log(producto.tipo+" "+producto.marca)
producto.mostrar();
producto.aumentar();
producto.mostrar();