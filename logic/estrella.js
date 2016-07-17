var Estrella = function(pIdCC, pNombreCuerpoCeleste, pMasa, pTemperaturaMedia, pDuracionDia, pId, pEdad, pComposicion, pIntensidadLuminica, pTamanno){
    CuerpoCeleste.call(this, pIdCC, pNombreCuerpoCeleste, pMasa, pTemperaturaMedia, pDuracionDia);
    var id = pId,
        edad = pEdad,
        composicion = pComposicion,
        intensidadLuminica = pIntensidadLuminica,
        tamanno = pTamanno,
        listaMisiones = [];

    this.getId = function(){
        return id;
    }

    this.setEdad = function(pEdad){
        edad = pEdad;
    }; 

    this.getEdad = function(){
        return edad;
    };

    this.setComposicion = function(pComposicion){
        composicion = pComposicion;
    };

    this.getComposicion = function(){
        return composicion;
    };

    this.setIntensidadLuminica = function(pIntensidadLuminica){
        intensidadLuminica = pIntensidadLuminica;
    };

    this.getIntensidadLuminica = function(){
        return intensidadLuminica;
    };

    this.setTamanno = function(pTamanno){
        tamanno = pTamanno;
    };

    this.getTamanno = function(){
        return tamanno;
    };

    this.setAgregarMisiones = function(objMision){
        listaMisiones.push(objMision);
    };

    this.getMisiones = function(){
        return listaMisiones;
    };

    this.getListaMisiones= function() {
        var arrMisiones= this.getMisiones(),
            arrNombresMisiones=[],
            listaNombresMisiones=[];

        for(i=0; i<arrMisiones.length;i++){
            arrNombresMisiones.push(arrMisiones[i].getNombre());
        }

        listaNombresMisiones= arrNombresMisiones.toString();

        return listaNombresMisiones;
    };
};