var Mision = function(pId, pNombreMision, pTripulantes, pFechaLanzamiento, pDuracionTiempo, pDatosInteres, pResultado, pInsignia, pNave){
    var id = pId,
        nombreMision = pNombreMision,
        tripulantes = pTripulantes,
        fechaLanzamiento = pFechaLanzamiento,
        duracionTiempo = pDuracionTiempo,
        datosInteres = pDatosInteres,
        resultado = pResultado,
        insignia = pInsignia,
        nave = pNave,
        listaCuerposCelestesDestino = [],
        progPertenece;

    this.getId = function(){
        return id;
    }

    this.setNombreMision = function(pNombreMision){
        nombreMision = pNombreMision;
    };

    this.getNombre = function(){
        return nombreMision;
    };

    this.setTripulantes = function(pTripulantes){
    	tripulantes = pTripulantes;
    };

    this.getTripulantes = function(){
        return tripulantes;
    };

    this.setFechaLanzamiento = function(pFechaLanzamiento){
        fechaLanzamiento = pFechaLanzamiento;
    };

    this.getFechaLanzamiento = function(){
        return fechaLanzamiento;
    };

    this.setDuracionTiempo = function(pDuracionTiempo){
        duracionTiempo = pDuracionTiempo;
    };

    this.getDuracionTiempo = function(){
        return duracionTiempo;
    };

    this.setDatosInteres = function(pDatosInteres){
        datosInteres = pDatosInteres;
    };

    this.getDatosInteres = function(){
    	return datosInteres;
    };

    this.setResultado = function(pResultado){
    	resultado = pResultado;
    };

    this.getResultado = function(){
    	return resultado;
    };

    this.setInsignia = function(pInsignia){
        insignia = pInsignia;
    };

    this.getInsignia = function(){
    	return insignia;
    };

    this.setNave = function(pNave){
        nave = pNave;
    };

    this.getNave = function(){
    	return nave;
    };

    this.setAgregarObjetosCelestes = function(objCuerposCelestes){
        listaCuerposCelestesDestino.push(objCuerposCelestes);
    };

    this.getObjetosCelestes = function(){
        return listaCuerposCelestesDestino;
    };

    this.setProgramaPertenece= function(pObjProg) {
        progPertenece= pObjProg;
    };

    this.getProgramaPertenece = function() {
        return progPertenece;
    };

    this.getNombreProgramaPertenece=function() {
        var programa;

        if(this.getProgramaPertenece()==undefined){
            programa="";
        }else{
            programa= this.getProgramaPertenece().getNombre();
        }
        return programa;
    };

};