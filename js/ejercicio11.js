function ejercicio11(arreglo1,arreglo2) {
    var objeto={};
    for(var i in arreglo1){
        objeto[arreglo1[i]]=arreglo2[i];
    }
    return objeto;
}