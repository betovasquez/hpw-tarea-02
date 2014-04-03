function ejercicio01(arreglo) {
	var pares=[];
	for(var i=0;i<arreglo.length;i++){
		if((arreglo[i]%2)==0){
			pares.push(arreglo[i]);
		}
	}
	return pares;
}


