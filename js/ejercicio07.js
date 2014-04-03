function ejercicio07(dia) {
    var dias=["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"];
    var obj={};
    for(var i=0;i<dia.length-1;i++){
        if(dias[i]==dia){
            var aux=i;
            obj.dia_actual=dias[i];
            if(i==0){
                i=i+7;
            }
            obj.dia_anterior=dias[i-1];
            i=aux;
            if(i==6){
                i=i-7;
            }
            obj.dia_siguiente=dias[i+1];
        }
    }
    return obj;
}