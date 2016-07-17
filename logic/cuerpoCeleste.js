var CuerpoCeleste = function(pIdCC, pNombreCuerpoCeleste, pMasa, pTemperaturaMedia, pDuracionDia){
    var idCC= pIdCC,
        nombreCuerpoCeleste = pNombreCuerpoCeleste,
        masa = pMasa,
        temperaturaMedia = pTemperaturaMedia,
        duracionDia = pDuracionDia;

    this.getIdCC = function(){
        return idCC;
    }

    this.setNombre = function(pNombreCuerpoCeleste){
        nombreCuerpoCeleste = pNombreCuerpoCeleste;
    };

    this.getNombre = function(){
        return nombreCuerpoCeleste;
    };

    this.setMasa = function(pMasa){
        masa = pMasa;
    };

    this.getMasa = function(){
        return masa;
    };

    this.setTemperaturaMedia = function(pTemperaturaMedia){
        temperaturaMedia = pTemperaturaMedia;
    };

    this.getTemperaturaMedia = function(){
        return temperaturaMedia;
    };

    this.setDuracionDia = function(pDuracionDia){
        duracionDia = pDuracionDia;
    };

    this.getDuracionDia = function(){
        return duracionDia;
    };

};