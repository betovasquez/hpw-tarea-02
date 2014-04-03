function ejercicio10(arreglo) {
    var objeto={};
    var prom=0;
    arreglo.sort();
    arreglo.sort(function(a,b){
        return b-a;
    });
    objeto.mayor=arreglo[0];
    objeto.menor=arreglo[arreglo.length-1];
    for(var i in arreglo){
        prom=prom+arreglo[i];
    }
    prom=prom/arreglo.length;
    objeto.promedio=prom;
    return objeto;
}