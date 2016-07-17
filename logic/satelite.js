var Satelite = function(pIdCC, pNombreCuerpoCeleste, pMasa, pTemperaturaMedia, pDuracionDia, pId, pDistanciaMediaPlaneta, pCaracteristicas){
    CuerpoCeleste.call(this, pIdCC, pNombreCuerpoCeleste, pMasa, pTemperaturaMedia, pDuracionDia);
    var id = pId, 
        distanciaMediaPlaneta = pDistanciaMediaPlaneta,
        caracteristicas = pCaracteristicas,
        planetaOrbita,
        listaMisiones = [];

    this.getId = function(){
        return id;
    }

    this.setDistanciaMediaPlaneta = function(pDistanciaMediaPlaneta){
    	distanciaMediaPlaneta = pDistanciaMediaPlaneta;
    };

    this.getDistanciaMediaPlaneta = function(){
        return distanciaMediaPlaneta;
    };

    this.setCaracteristicas = function(pCaracteristicas){
    	caracteristicas = pCaracteristicas;
    };

    this.getCaracteristicas = function(){
    	return caracteristicas;
    };

    this.setPlanetaOrbita = function(pPlanetaOrbita){
    	planetaOrbita = pPlanetaOrbita;
    };

    this.getPlanetaOrbita = function(){
       return planetaOrbita;
    };

    this.getNombrePlanetaOrbita= function() {
        var planeta; 

        if(this.getPlanetaOrbita()==undefined){
            planeta="";
        }else{
            planeta= this.getPlanetaOrbita().getNombre();
        }
        return planeta;
    }

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

