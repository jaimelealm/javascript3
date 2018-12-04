var productos = [
    {
        nombre  :"harina",
        fechaVecn   :{
            dia :15,
            mes :12,
            año :2019
        },
        precios     :[150,200,225],
    },
    {
        nombre  :"arroz",
        fechaVecn   :{
            dia :22,
            mes :10,
            año :2020
        },
        precios     :[160,190]
    }
]

for (i=0;i<productos.length;i++){
    console.log("Nombre del Producto: "+productos[i].nombre);
    console.log("La fecha de Vencimiento es: "+productos[i].fechaVecn.dia+"/"+productos[i].fechaVecn.mes+"/"+productos[i].fechaVecn.año);
    for (j=0;j<productos[i].precios.length;j++){
        console.log("El precio "+ (j+1) +" es "+productos[i].precios[j]);
    }
    console.log(" ");
}