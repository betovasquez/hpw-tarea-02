function ejercicio04(arreglo) {
    arreglo.sort();
    arreglo.sort(function(a,b){
        return b-a;
    });
    return arreglo;
}