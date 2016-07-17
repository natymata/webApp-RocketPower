var Planeta = function(pIdCC, pNombreCuerpoCeleste, pMasa, pTemperaturaMedia, pDuracionDia, pId, pDistanciaMediaSol, pDuracionAnno){
    CuerpoCeleste.call(this,  pIdCC, pNombreCuerpoCeleste, pMasa, pTemperaturaMedia, pDuracionDia);
    var id = pId, 
        distanciaMediaSol = pDistanciaMediaSol,
        duracionAnno = pDuracionAnno,
        listaSatelitesEnOrbita = [],
        listaMisiones = [];

    this.getId = function(){
        return id;
    }

    this.setDistanciaMediaSol = function(pDistanciaMediaSol){
        distanciaMediaSol = pDistanciaMediaSol;
    };

    this.getDistanciaMediaSol = function(){
        return distanciaMediaSol;
    };

    this.setDuracionAnno = function(pDuracionAnno){
        duracionAnno = pDuracionAnno;
    };

    this.getDuracionAnno = function(){
        return duracionAnno;
    };

    this.getCantidadSatelites = function(){
        var cantidadSatelites = 0,
            arrSatelites = this.getSatelitesEnOrbita();

        for(i = 0; i < arrSatelites.length;i++){
            cantidadSatelites++;
        }
        return cantidadSatelites;
    };

    this.setSatelitesEnOrbita = function(objSatelite){
        listaSatelitesEnOrbita.push(objSatelite);
    };

    this.getSatelitesEnOrbita = function(){
        return listaSatelitesEnOrbita;
    };

    this.getListaNombresSatelites= function() {
        var arrSatelites= this.getSatelitesEnOrbita(),
            arrNombresSatelites=[],
            listaNombresSatelites=[];

        for(i=0; i<arrSatelites.length;i++){
            arrNombresSatelites.push(arrSatelites[i].getNombre());
        }

        listaNombresSatelites=arrNombresSatelites.toString();

        return listaNombresSatelites;
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