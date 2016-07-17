var ProgramaEspacial = function(pIdPE, pNombrePrograma, pFechaInicio, pFechaFinalizacion, pAlcance){
    var id = pIdPE,
        nombrePrograma = pNombrePrograma,
        fechaInicio = pFechaInicio,
        fechaFinalizacion = pFechaFinalizacion,
        alcance = pAlcance,
        listaMisiones = [];

    this.getId = function(){
        return id;
    }

    this.setNombre = function(pNombrePrograma){
    	nombrePrograma = pNombrePrograma;
    };

    this.getNombre = function(){
        return nombrePrograma;
    };

    this.setFechaInicio = function(pFechaInicio){
    	fechaInicio = pFechaInicio;
    };

    this.getFechaInicio = function(){
    	return fechaInicio;
    };

    this.setfechaFinalizacion = function(pFechaFinalizacion){
        fechaFinalizacion = pFechaFinalizacion;
    };

    this.getfechaFinalizacion = function(){
        return fechaFinalizacion;
    };

    this.setAlcance = function(pAlcance){
    	alcance = pAlcance;
    };

    this.getAlcance = function(){
    	return alcance;
    };

    this.setAgregarMisiones = function(objMision){
        listaMisiones.push(objMision);
    };

    this.getMisiones = function(){
    	return listaMisiones;
    };

    this.getCantidadMisiones= function() {
        var nMisiones=0,
            arrMisiones= this.getMisiones();
        for(i=0;i<arrMisiones.length;i++){
            nMisiones++;
        }
        return nMisiones;
    }
};