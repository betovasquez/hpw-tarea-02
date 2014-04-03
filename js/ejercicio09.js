function ejercicio09(objeto) {
    var pro=0;
    for(var i in objeto.calificaciones){
        pro=pro+objeto.calificaciones[i];
    }
    pro=pro/(objeto.calificaciones.length);
    objeto.promedio=pro;
    return  objeto;
}