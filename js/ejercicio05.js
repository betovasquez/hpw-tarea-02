function ejercicio05(arreglo) {
    var res=[];
    var aux=0;
    for(var j in arreglo){
        aux=0;
        for(var i in arreglo[j]){
            aux=aux+arreglo[j][i];       
        }
        res[j]=aux;
    }
    return res;
}