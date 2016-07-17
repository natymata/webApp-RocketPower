	/*****************************VAR************************************/
/*Botones principales*/
var 
	//botones de seleccion de clases
	btnEstrella= document.getElementById("btnEstrella"),
	btnPlaneta= document.getElementById("btnPlaneta"),
	btnSatelite= document.getElementById("btnSatelite"),
	btnProgramaEspacial= document.getElementById("btnProgramaEspacial"),
	btnMision= document.getElementById("btnMision"),
	//botones de enviar la info de un nuevo objeto para ser agregado
	btnSendEstrella= document.getElementById("btnSendEstrella"),
	btnSendPlaneta= document.getElementById("btnSendPlaneta"),
	btnSendSatelite= document.getElementById("btnSendSatelite"),
	btnSendProgram= document.getElementById("btnSendProgram"),
	btnSendMision= document.getElementById("btnSendMision"),
	//botones para iniciar AGREGACIONES
	btnAddSatellPlanet= document.getElementById("btnAddSatellPlanet"),
	btnAddMisionPrograma= document.getElementById("btnAddMisionPrograma"),
	btnAddCuerpoMision= document.getElementById("btnAddCuerpoMision"),

	// btnUserIcon= document.getElementById("btnUserIcon"),
	// btnSignIn= document.getElementById("btnSignIn"),

/*Elementos principales DOM*/
	h1Class= document.getElementById("h1Class"),
	formEstrella= document.getElementById("formEstrella"),
	formPlaneta= document.getElementById("formPlaneta"),
	formSatelite= document.getElementById("formSatelite"),
	formProgEspacial= document.getElementById("formProgEspacial"),
	formMision= document.getElementById("formMision"),
	
	resultEstrellas= document.getElementById("resultEstrellas"),
	resultadosPlanetas= document.getElementById("resultadosPlanetas"),
	resultadosSatelites= document.getElementById("resultadosSatelites"),
	resultadosProgramas= document.getElementById("resultadosProgramas"),
	resultadosMisiones= document.getElementById("resultadosMisiones"),

	rowEstrellas= document.getElementById("rowEstrellas"),
	rowPlanetas= document.getElementById("rowPlanetas"),
	rowSatelites= document.getElementById("rowSatelites"),
	rowProgramas= document.getElementById("rowProgramas"),
	rowMisiones= document.getElementById("rowMisiones"),

	sltEstrella= document.getElementById("sltEstrella"),
	sltPlaneta= document.getElementById("sltPlaneta"),
	sltSatelite=document.getElementById("sltSatelite"),
	sltMisionPrograma=document.getElementById("sltMisionPrograma"),
	sltCuerpoMision=document.getElementById("sltCuerpoMision"),

/*otros DOM*/
	arrSections=[seccionObjetos, resultEstrellas, resultadosPlanetas, resultadosSatelites, resultadosProgramas, resultadosMisiones],
	arrForms= document.querySelectorAll("#seccionObjetos form"),

/*listas arreglos*/
	listaEstrellas=[],
	listaPlanetas=[],
	listaSatelites=[],
	listaProgramas=[],
	listaMisiones=[],
	listaCuerposCelestes=[],

	listaSatelitesSlt=[],
	listaMisionesSlt=[],
	listaCuerposCelestesSlt=[],

/*objetos del usuario*/
	userStar,
	userPlanet,
	userSatell,
	userProgram,
	userMission,

/*idSetters*/
	nIdCuerpoSetter=1,
	nIdStarSetter=1,
	nIdPlanetSetter=1,
	nIdSateliSetter=1,
	nIdProgramSetter=1,
	nIdMissionSetter=1;

/*booleans datos quemados*/
	bEstrellasAgregadas= false,
	bPlanetasAgregados= false,
	bSatelAgregados= false,
	bProgAgregados= false,
	bMisionesAgregadas= false;
/*********************************FIN VAR***************************************/

/******************************START PROGRAM**************************************/

/***funcionaes para manejar el posicionamiento de los divs con respecto al navbar fixed***/
	document.addEventListener("DOMContentLoaded", function() { 
  		document.querySelector(".wrapper").style.visibility = "visible";
	});//ocultar la pagina hasta que carguen la mayoria de los camponentes.
	
	window.onbeforeunload= function(){
		window.scrollTo(0,-175);
	}//lleva a la posicion inicial cuando se refresca la pagina
//---------------------------fin funciones posicionamiento--------------------------------//

	displayNoneArray (arrSections);
	startStars();

	btnEstrella.addEventListener("click", startStars);
	btnPlaneta.addEventListener("click", startPlanets);
	btnSatelite.addEventListener("click", startSatellite);
	btnProgramaEspacial.addEventListener("click", startProgram);
	btnMision.addEventListener("click", startMission);

	btnSendEstrella.addEventListener("click", addStar);
	btnSendPlaneta.addEventListener("click", addPlanet);
	btnSendSatelite.addEventListener("click", addSatellite);
	btnSendProgram.addEventListener("click", addProgram);
	btnSendMision.addEventListener("click", addMission);

	btnAddSatellPlanet.addEventListener("click", fillSelectPlaneta);
	btnAddMisionPrograma.addEventListener("click", fillSelectProgram);
	btnAddCuerpoMision.addEventListener("click", fillSelectMision);

	sltPlaneta.addEventListener("change", addSatelPlanet);
	sltMisionPrograma.addEventListener("change", addMissionProgram);
	sltCuerpoMision.addEventListener("change", addCelBMission);

	quemarEstrellas();
	quemarPlanetas();
	quemarSatelites();
	quemarProgramas();
	quemarMisiones();

	// btnSignIn.addEventListener("click", getUserName);
	// displayUserName();

/***************************FIN PROGRAM********************************/

/*****************************FUNCTIONS*****************************/

//----------------------FUNCIONES GENERALES--------------------------//
function scrollWin() {
    window.scrollBy(0,-175);
}

function displayNoneArray(arrElements) {
	for(i=0;i<arrElements.length;i++){
		arrElements[i].style.display="none";
	}
}//fin function

function displayNone(pElement) {
	pElement.style.display="none";
}//fin function

function displayBlockArray(arrElements) {
	for(i=0;i<arrElements.length;i++){
		arrElements[i].style.display="block";
	}
}//fin function

function displayBlock(pElement) {
	pElement.style.display="block";
}//fin function

function visibilityHidden (pElement) {
	pElement.style.visibility="hidden";
	// pElement.classList.add("visibilityHidden");
	// pElement.classList.remove("visibilityVisible");
}//fin function

function visibilityVisible (pElement) {
	pElement.style.visibility="visible";
	// pElement.classList.add("visibilityVisible");
	// pElement.classList.remove("visibilityHidden");
}//fin function

function activeClass(btnActivo) {
	var arrBtn= document.querySelectorAll(".sidebar li");
	for(i=0;i<arrBtn.length;i++){
		arrBtn[i].classList.remove("active");
	}
	btnActivo.parentNode.classList.add("active");
}//fin function

//-------------------------VALIDACIONES DE FORMULARIOS-----------------------//
function validarForm(arrImput, arrPatrones, pError) {
	var bError= false;

	for(i=0;i<arrImput.length;i++){
		if(validarPatron(arrImput[i], arrPatrones[i])){
			removeError(arrImput[i]);
		}else{
			addError(arrImput[i]);
			bError= true;
		}
	}

	if(bError==true){
		displayBlock(pError);
		pError.innerHTML="Revise los campos en rojo";
		return false;
	}else{
		displayNone(pError);
		return true;
	}
}//fin function

function validarPatron (pCampo, pPatron) {
	if(pCampo.value==""){ //error, campo en blanco
		return false;
	}
	else{
		if(pPatron.test(pCampo.value)){
			return true; //campo lleno y cumple con el patron
		}else{
			return false; // error, no cumple con el patron
		}
	}
}//fin function

function clearForm(pArrImput) {
	for(i=0;i<pArrImput.length;i++){
			pArrImput[i].value="";
		}
}//fin function

function addError (pCampo) {
	pCampo.classList.add("error");
}//fin function

function removeError (pCampo) {
	pCampo.classList.remove("error");
}//fin function


/**--MUESTRAN EL PANEL CORRESPONDIENTE A LA CATEGORIA ESCOGIDA POR EL USUARIO--**/

function startStars() {
		var arrShow=[seccionObjetos, resultEstrellas];
	displayNoneArray(arrSections);
	displayBlockArray(arrShow);
	displayNoneArray(arrForms);
	displayBlock(formEstrella);
	displayNone(rowEstrellas);
	h1Class.innerHTML= "Estrellas";
	activeClass(btnEstrella);
	scrollWin();
}

function startPlanets() {
		var arrShow=[seccionObjetos, resultadosPlanetas];
	displayNoneArray(arrSections);
	displayBlockArray(arrShow);
	displayNoneArray(arrForms);
	displayBlock(formPlaneta);
	displayNone(rowPlanetas);
	h1Class.innerHTML= "Planetas";
	activeClass(btnPlaneta);
	scrollWin();
}

function startSatellite() {
		var arrShow=[seccionObjetos, resultadosSatelites];
	displayNoneArray(arrSections);
	displayBlockArray(arrShow);
	displayNoneArray(arrForms);
	displayBlock(formSatelite);
	displayNone(rowSatelites);
	h1Class.innerHTML= "Satélites";
	activeClass(btnSatelite);
	scrollWin();
}

function startProgram() {
		var arrShow=[seccionObjetos, resultadosProgramas];
	displayNoneArray(arrSections);
	displayBlockArray(arrShow);
	displayNoneArray(arrForms);
	displayBlock(formProgEspacial);
	displayNone(rowProgramas);
	h1Class.innerHTML= "Programas Espaciales";
	activeClass(btnProgramaEspacial);
	scrollWin();
}

function startMission() {
		var arrShow=[seccionObjetos, resultadosMisiones];

displayNoneArray(arrSections);
	displayBlockArray(arrShow);
	displayNoneArray(arrForms);
	displayBlock(formMision);
	displayNone(rowMisiones);
	h1Class.innerHTML= "Misiones Espaciales";
	activeClass(btnMision);
	// quemarMisiones();
}


/***************************FUNCIONES PRINCIPALES******************************/

//AGREGAN NUEVAS CANCIONES, ALBUMS, ARTISTAS, DISQUERAS A LAS LISTAS DE OBJETOS//

function addStar() {
	var arrImput= document.querySelectorAll("#formEstrella input[type=text]"),
		tblEstrellas= document.querySelector("#tblEstrellas tbody"),
		arrPatrones=[/^([A-Za-z0-9_-\s\&]*)$/, /^\d+/, /^\d+/, /^\d+/, /^\d+/, /^([A-Za-z0-9_-\s\&\,]*)$/, /^([A-Za-z0-9_-\s\&\,]*)$/, /^([A-Za-z0-9_-\s\&]*)$/],
		clase="estrella",
		pEstrellaError= document.getElementById("pEstrellaError");

	if(validarForm(arrImput, arrPatrones, pEstrellaError)){
		var objEstrella= newEstrella(arrImput[0].value, arrImput[1].value, arrImput[2].value, arrImput[3].value, arrImput[4].value, arrImput[5].value, arrImput[6].value,arrImput[7].value);
		llenarTabla(listaEstrellas, tblEstrellas, clase);
		clearForm (arrImput);
	}
}//fin function

function newEstrella(pNombreCuerpoCeleste, pMasa, pTemperaturaMedia, pDuracionDia, pEdad, pComposicion, pIntensidadLuminica, pTamanno) {
	var objEstrella = new Estrella(nIdCuerpoSetter, pNombreCuerpoCeleste, pMasa, pTemperaturaMedia, pDuracionDia, nIdStarSetter, pEdad, pComposicion, pIntensidadLuminica, pTamanno);
    listaEstrellas.push(objEstrella);
    listaCuerposCelestes.push(objEstrella);
    listaCuerposCelestesSlt.push(objEstrella);
    nIdStarSetter++;
    nIdCuerpoSetter++;
}

function addPlanet() {
	var arrImput= document.querySelectorAll("#formPlaneta input[type=text], #formPlaneta input[type=number]"),
		tblPlanetas= document.querySelector("#tblPlanetas tbody"),
		arrPatrones=[/^([A-Za-z0-9_-\s\&]*)$/, /^\d+/, /^\d+/, /^\d+/, /^\d+/, /^\d+/],
		clase="planeta",
		pPlanetaError= document.getElementById("pPlanetaError");

	if(validarForm(arrImput, arrPatrones, pPlanetaError)){
		var objPlaneta= newPlaneta(arrImput[0].value, arrImput[1].value, arrImput[2].value, arrImput[3].value, arrImput[4].value, arrImput[5].value);
		llenarTabla(listaPlanetas, tblPlanetas, clase);
		clearForm (arrImput);
	}
}//fin function

function newPlaneta(pNombreCuerpoCeleste, pMasa, pTemperaturaMedia, pDuracionDia, pDistanciaMediaSol, pDuracionAnno) {
	var objPlaneta = new Planeta(nIdCuerpoSetter, pNombreCuerpoCeleste, pMasa, pTemperaturaMedia, pDuracionDia, nIdPlanetSetter, pDistanciaMediaSol, pDuracionAnno);
    listaPlanetas.push(objPlaneta);
    listaCuerposCelestes.push(objPlaneta);
    listaCuerposCelestesSlt.push(objPlaneta);
    nIdPlanetSetter++;
    nIdCuerpoSetter++;
}

function addSatellite() {
	var arrImput= document.querySelectorAll("#formSatelite input[type=text], #formSatelite input[type=number]"),
		tblSatelites= document.querySelector("#tblSatelites tbody"),
		arrPatrones=[/^([A-Za-z0-9_-\s\&]*)$/, /^\d+/, /^\d+/, /^\d+/, /^\d+/, /^([A-Za-z0-9_-\s\&\,]*)$/],
		clase="satelite",
		pSateliteError= document.getElementById("pSateliteError");

	if(validarForm(arrImput, arrPatrones, pSateliteError)){
		var objSatelite= newSatelite(arrImput[0].value, arrImput[1].value, arrImput[2].value, arrImput[3].value, arrImput[4].value, arrImput[5].value);
		llenarTabla(listaSatelites, tblSatelites, clase);
		clearForm (arrImput);
	}
}//fin function

function newSatelite(pNombreCuerpoCeleste, pMasa, pTemperaturaMedia, pDuracionDia, pDistanciaMediaPlaneta, pCaracteristicas) {
	 var objSatelite = new Satelite(nIdCuerpoSetter, pNombreCuerpoCeleste, pMasa, pTemperaturaMedia, pDuracionDia, nIdSateliSetter, pDistanciaMediaPlaneta, pCaracteristicas);
    listaSatelites.push(objSatelite);
    listaSatelitesSlt.push(objSatelite);
    listaCuerposCelestes.push(objSatelite);
    listaCuerposCelestesSlt.push(objSatelite);
    nIdSateliSetter++;
    nIdCuerpoSetter++;
}

function addProgram() {
	var arrImput= document.querySelectorAll("#formProgEspacial input[type=text], #formProgEspacial input[type=number]"),
		tblProgramas= document.querySelector("#tblProgramas tbody"),
		arrPatrones=[/^([A-Za-z0-9_-\s\&]*)$/, /^(0?[1-9]|1[012])[\/\-]\d{2}$/, /^(0?[1-9]|1[012])[\/\-]\d{2}$/, /^([A-Za-z0-9_-\s\&]*)$/],
		clase="programa",
		pProgEspacialError= document.getElementById("pProgEspacialError");

	if(validarForm(arrImput, arrPatrones, pProgEspacialError)){
		var objProgram= newProgram(arrImput[0].value, arrImput[1].value, arrImput[2].value, arrImput[3].value);
		llenarTabla(listaProgramas, tblProgramas, clase);
		clearForm (arrImput);
	}
}//fin function

function newProgram(pNombrePrograma, pFechaInicio, pFechaFinalizacion, pAlcance) {
	var objPrograma = new ProgramaEspacial(nIdProgramSetter, pNombrePrograma, pFechaInicio, pFechaFinalizacion, pAlcance);
    listaProgramas.push(objPrograma);
    nIdProgramSetter++;
}

function addMission() {
	var arrImput= document.querySelectorAll("#formMision input[type=text], #formMision input[type=number]"),
		tblMisiones= document.querySelector("#tblMisiones tbody"),
		arrPatrones=[/^([A-Za-z0-9_-\s\&]*)$/, /^([A-Za-z0-9_-\s\&\,]*)$/, /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{2}$/, /^\d+/, /^([A-Za-z0-9_-\s\&\,]*)$/, /^([A-Za-z0-9_-\s\&\,]*)$/, /^([A-Za-z0-9_-\s\&\,]*)$/, /^([A-Za-z0-9_-\s\&\,]*)$/],
		clase="mision",
		pMisionError= document.getElementById("pMisionError");

	if(validarForm(arrImput, arrPatrones, pMisionError)){
		var objMision= newMission(arrImput[0].value, arrImput[1].value, arrImput[2].value, arrImput[3].value, arrImput[4].value, arrImput[5].value, arrImput[6].value,arrImput[7].value);
		llenarTabla(listaMisiones, tblMisiones, clase);
		clearForm (arrImput);
	}
}//fin function

function newMission(pNombreMision, pTripulantes, pFechaLanzamiento, pDuracionTiempo, pDatosInteres, pResultado, pInsignia, pNave, pCuerpoCelesteDestino) {
	var objMision = new Mision(nIdMissionSetter, pNombreMision, pTripulantes, pFechaLanzamiento, pDuracionTiempo, pDatosInteres, pResultado, pInsignia, pNave, pCuerpoCelesteDestino);
    listaMisiones.push(objMision);
    listaMisionesSlt.push(objMision);
    nIdMissionSetter++;
}

//***************LLENAR TABLAS PRINCIPALES*********************//

//Llena tablas principales//
function llenarTabla(pListaObjetos, pElementTable, pClase) {
	pElementTable.innerHTML="";

	for(i=0; i<pListaObjetos.length;i++){
		var newRow= document.createElement("tr"),
			newTd= document.createElement("td"),
			newAnchor= document.createElement("a"),
			newTextNode;

		newTextNode=document.createTextNode(pListaObjetos[i].getNombre());
		newAnchor.appendChild(newTextNode);

		switch(pClase){
			case "estrella":
				newAnchor.id= "estrella"+pListaObjetos[i].getId();
			break;
			case "planeta":
				newAnchor.id= "planeta"+pListaObjetos[i].getId();
			break;	
			case "satelite":
				newAnchor.id= "satelite"+pListaObjetos[i].getId();
			break;	
			case "programa":
				newAnchor.id= "programa"+pListaObjetos[i].getId();
			break;	
			case "mision":
				newAnchor.id= "mision"+pListaObjetos[i].getId();
			break;		
		}
		
		newTd.appendChild(newAnchor);
		newRow.appendChild(newTd);
		pElementTable.appendChild(newRow);

		switch(pClase){
			case "estrella":
				newAnchor.addEventListener("click", mostrarEstrella, false);
				newAnchor.href="#rowEstrellas";
				//userStar=pListaObjetos[i];
			break;
			case "planeta":
				newAnchor.addEventListener("click", mostrarPlaneta, false);
				newAnchor.href="#rowPlanetas";
				//userPlanet=pListaObjetos[i];
			break;	
			case "satelite":
				newAnchor.addEventListener("click", mostrarSatelite, false);
				newAnchor.href="#rowSatelites";
				//userSatell=pListaObjetos[i];
			break;	
			case "programa":
				newAnchor.addEventListener("click", mostrarPrograma, false);
				newAnchor.href="#rowProgramas";
				//userProgram=pListaObjetos[i];
			break;	
			case "mision":
				newAnchor.addEventListener("click", mostrarMision, false);
				newAnchor.href="#rowMisiones";
				//userMission=pListaObjetos[i];
			break;		
		}
	}
}//fin function

//MOSTRAR Y LLENAR PANEL DE ELEMENTOS ELEGIDOS
//--------------------ALBUM--------------------//

function mostrarEstrella() {
	var arrDatosEstrella = document.querySelectorAll('#infoEstrella span'),
		selectControlEstrella= document.querySelector('#selectControlEstrella'),
		tblMisionXEstrella= document.querySelector("#rowEstrellas tbody"),
		userStarId= this.id,
		clase="estrella";
		arrDatosObjEstrella=[];

//encuentra el objeto elegido por el usuario
    for(i=0; i<listaEstrellas.length;i++){
    	if(userStarId===("estrella"+listaEstrellas[i].getId())){
    		userStar= listaEstrellas[i];
    	}
    }

    arrDatosObjEstrella = [userStar.getNombre(), userStar.getMasa(), userStar.getTemperaturaMedia(), userStar.getDuracionDia(), userStar.getEdad(), userStar.getComposicion(), userStar.getIntensidadLuminica(), userStar.getTamanno(), userStar.getListaMisiones()];

//llena los campos
    for(var i = 0; i < arrDatosEstrella.length; i++) {
        arrDatosEstrella[i].innerHTML = arrDatosObjEstrella[i];
    }

    displayBlock(rowEstrellas);
}

function mostrarPlaneta() {
	 var arrDatosPlaneta = document.querySelectorAll('#infoPlanetas span'),
        selectControlPlaneta = document.querySelector('#selectControlPlaneta'),
        tblSatelXPlanet= document.querySelector("#tblSatelXPlanet tbody"),
        userPlanetId = this.id,
        clase="planeta",
        arrDatosObjPlaneta = [];

    for(i = 0; i < listaPlanetas.length;i++){
        if(userPlanetId === ("planeta"+listaPlanetas[i].getId())){
            userPlanet = listaPlanetas[i];
        }
    };

    arrDatosObjPlaneta = [userPlanet.getNombre(), userPlanet.getMasa(), userPlanet.getTemperaturaMedia(), userPlanet.getDuracionDia(), userPlanet.getDistanciaMediaSol(), userPlanet.getDuracionAnno(), userPlanet.getCantidadSatelites(), userPlanet.getListaMisiones()];

    for(var i = 0; i < arrDatosPlaneta.length; i++) {
        arrDatosPlaneta[i].innerHTML = arrDatosObjPlaneta[i];
    };

    visibilityHidden(selectControlPlaneta);
    displayBlock(rowPlanetas);
    fillSecondaryTable(tblSatelXPlanet, userPlanet.getSatelitesEnOrbita());
}

function mostrarSatelite() {
	 var arrDatosSatelite = document.querySelectorAll('#infoSatelites span'),
        selectControlSatelite = document.querySelector('#selectControlSatelite'),
        tblSatelites = document.querySelector('#rowSatelites tbody'),
        userSatelltId = this.id,
        clase="satelite",
        arrDatosObjSatelites = [];

    for(i = 0; i < listaSatelites.length;i++){
        if(userSatelltId === ("satelite"+listaSatelites[i].getId())){
            userSatell = listaSatelites[i];
        }
    }

    arrDatosObjSatelites = [userSatell.getNombre(), userSatell.getMasa(), userSatell.getTemperaturaMedia(), userSatell.getDuracionDia(), userSatell.getDistanciaMediaPlaneta(), userSatell.getCaracteristicas(), userSatell.getPlanetaOrbita(), userSatell.getListaMisiones()];

    for(var i = 0; i < arrDatosSatelite.length; i++) {
        arrDatosSatelite[i].innerHTML = arrDatosObjSatelites[i];
    };

    displayBlock(rowSatelites);
}

function mostrarPrograma() {
	var arrDatosProgramas = document.querySelectorAll('#infoProgramas span'),
        selectControlProgram = document.querySelector('#selectControlProgram'),
        tblPrograms = document.querySelector('#rowProgramas tbody'),
        userProgramId = this.id,
        clase="programa",
        arrDatosObjProgramas = []; 
        
    for(i = 0; i < listaProgramas.length;i++){
        if(userProgramId === ("programa" + listaProgramas[i].getId())){
            userProgram = listaProgramas[i];
        }
    };

    arrDatosObjProgramas = [userProgram.getNombre(), userProgram.getFechaInicio(), userProgram.getfechaFinalizacion(), userProgram.getAlcance()];

    for(var i = 0; i < arrDatosProgramas.length; i++) {
        arrDatosProgramas[i].innerHTML = arrDatosObjProgramas[i];
 
    };

    visibilityHidden(selectControlProgram);
    displayBlock(rowProgramas);
    fillSecondaryTable(tblPrograms, userProgram.getMisiones(), clase);
}

function mostrarMision() {
	var arrDatosMisiones = document.querySelectorAll('#infoMsiones span'),
        selectControlMision = document.getElementById('selectControlMision'),
        tblMisions = document.querySelector('#rowMisiones tbody'),
        userMissionId = this.id,
        clase="mision",
        arrDatosObjMisiones = [];
        
    for(i = 0; i < listaMisiones.length;i++){
        if(userMissionId === ("mision" + listaMisiones[i].getId())){
            userMission = listaMisiones[i];
        }
    };

    arrDatosObjMisiones = [userMission.getNombre(), userMission.getTripulantes(), userMission.getFechaLanzamiento(), userMission.getDuracionTiempo(), userMission.getDatosInteres(), userMission.getResultado(), userMission.getInsignia(), userMission.getNave()];

    for(var i = 0; i < arrDatosMisiones.length; i++) {
        arrDatosMisiones[i].innerHTML = arrDatosObjMisiones[i];
    };

    visibilityHidden(selectControlMision);
    displayBlock(rowMisiones);
    fillSecondaryTable(tblMisions, userMission.getObjetosCelestes(), clase);
}

function fillSelectPlaneta() {
	var selectControlPlaneta = document.getElementById('selectControlPlaneta'),
        sltPlaneta = document.getElementById('sltPlaneta'),
        newOptionDefault = document.createElement('option'),
        newTextNode,
        newOption;

    visibilityVisible(selectControlPlaneta);
    sltPlaneta.innerHTML = '';
    newOptionDefault.innerHTML = '--Seleccione--';
    sltPlaneta.appendChild(newOptionDefault);

    for(i = 0;i < listaSatelitesSlt.length;i++){
        newOption = document.createElement('option');
        newOption.value = listaSatelitesSlt[i].getId();
        newTextNode = document.createTextNode(listaSatelitesSlt[i].getNombre());
        newOption.appendChild(newTextNode);
        sltPlaneta.appendChild(newOption);
    }
}

function fillSelectProgram() {
	var selectControlProgram = document.getElementById('selectControlProgram'),
        sltMisionPrograma = document.getElementById('sltMisionPrograma'),
        newOptionDefault=document.createElement("option"),
        newTextNode,
        newOption;

    visibilityVisible(selectControlProgram);
    sltMisionPrograma.innerHTML = '';
    newOptionDefault.innerHTML = '--Seleccione--';
    sltMisionPrograma.appendChild(newOptionDefault);

    for(i = 0;i < listaMisionesSlt.length;i++){
        newOption = document.createElement('option');
        newOption.value = listaMisionesSlt[i].getId();
        newTextNode = document.createTextNode(listaMisionesSlt[i].getNombre());
        newOption.appendChild(newTextNode);
        sltMisionPrograma.appendChild(newOption);
    }
}

function fillSelectMision() {
	var selectControlMision = document.getElementById('selectControlMision'),
        sltCuerpoMision = document.getElementById('sltCuerpoMision'),
        newOptionDefault = document.createElement('option'),
        newTextNode,
        newOption;

    visibilityVisible(selectControlMision);
    sltCuerpoMision.innerHTML = '';
    newOptionDefault.innerHTML = '--Seleccione--';
    sltCuerpoMision.appendChild(newOptionDefault);

    for(i = 0;i < listaCuerposCelestesSlt.length;i++){
        newOption = document.createElement('option');
        newOption.value = listaCuerposCelestesSlt[i].getIdCC();
        newTextNode = document.createTextNode(listaCuerposCelestesSlt[i].getNombre());
        newOption.appendChild(newTextNode);
        sltCuerpoMision.appendChild(newOption);
    }
}

function addSatelPlanet() {
	var sltPlaneta= document.getElementById("sltPlaneta"),
		tblSatelXPlanet= document.querySelector("#tblSatelXPlanet tbody"),
		cantSat=document.getElementById("cantSat"),
		idSatell;

	for(i=0; i<listaSatelitesSlt.length;i++){
		if(sltPlaneta.value==listaSatelitesSlt[i].getId()){
			userPlanet.setSatelitesEnOrbita(listaSatelitesSlt[i]);
			listaSatelitesSlt.splice([i],1);
			idSatell= sltPlaneta.value;
		}
	}

	for(i=0; i<listaSatelites.length;i++){
		if(listaSatelites[i].getId()==idSatell){
			listaSatelites[i].setPlanetaOrbita(userPlanet.getNombre());
		}
	}

	cantSat.innerHTML= userPlanet.getCantidadSatelites();
	fillSecondaryTable(tblSatelXPlanet, userPlanet.getSatelitesEnOrbita());
	fillSelectPlaneta();

}

function addMissionProgram() {
	var sltMisionPrograma = document.getElementById('sltMisionPrograma'),
    	tblMisionesxPrograma = document.querySelector('#tblMisionesxPrograma tbody');

    for(i=0; i<listaMisionesSlt.length;i++){
        if(sltMisionPrograma.value == listaMisionesSlt[i].getId()){
         userProgram.setAgregarMisiones(listaMisionesSlt[i]);
         listaMisionesSlt.splice([i],1);
        }
    }

    fillSecondaryTable(tblMisionesxPrograma, userProgram.getMisiones());
    fillSelectProgram();

}

function addCelBMission() {
	var sltCuerpoMision = document.getElementById('sltCuerpoMision'),
        tblCuerposxMision = document.querySelector('#tblCuerposxMision tbody'),
        idCuerpoCeleste;

    for( i = 0; i < listaCuerposCelestesSlt.length;i++){
        if(sltCuerpoMision.value == listaCuerposCelestesSlt[i].getIdCC()){
         	userMission.setAgregarObjetosCelestes(listaCuerposCelestesSlt[i]);
         	idCuerpoCeleste= sltCuerpoMision.value;
        }
    }

    for(i=0; i<listaCuerposCelestes.length;i++){
		if(listaCuerposCelestes[i].getIdCC()==idCuerpoCeleste){
			listaCuerposCelestes[i].setAgregarMisiones(userMission);
		}
	}

    fillSecondaryTable(tblCuerposxMision, userMission.getObjetosCelestes());
    fillSelectMision();
}

//---------llenar tablas secundarias o tablas de elementos hijos------------//
function fillSecondaryTable (pElementTable, pListaObjetos, pClase) {
	pElementTable.innerHTML="";

	for(i=0; i<pListaObjetos.length;i++){
		var newRow= document.createElement("tr"),
			//newBtn= document.createElement("input"),
			newSpan= document.createElement("span"),
			newTd= document.createElement("td"),
			newTextNode;

		newSpan.classList.add("displayNone");
		newSpan.innerHTML= (pListaObjetos[i].getId());
		newTd.appendChild(newSpan);

		newTextNode=document.createTextNode(pListaObjetos[i].getNombre());

		newTd.appendChild(newTextNode);
		newRow.appendChild(newTd);
		pElementTable.appendChild(newRow);
		}
}//fin function

/*************************************AGREGAR DATOS QUEMADOS****************************************/

function quemarEstrellas(){
    var table=document.querySelector("#tblEstrellas tbody"),
        clase="estrella",
        arrObjetos= [
     ["Sol", "1,9891x10<SUP>30</SUP> kg", "5778k", "25 días", "4.500 millones de años", "Hidrógeno, Helio, Oxígeno", "–26,8", "1 392 000 km"],
     ["Centauri", "2,446 × 10<SUP>29</SUP> kg", "1500 K ", "80 días", "5.700 millones de años", "Vanadio, Bario, Europio y Neodimio", "0,17% de la luminosidad  del Sol", "100.900 km"],
     ["La estrella de Barnard", "2,864 × 10<SUP>29</SUP> kg", " 3.134 K ", "130 días", "12.000 millones de años", "Helio", "4,10.000 de la luminosidad solar,", "136.400 km"],
     ["Wolf 359", "1,79 × 10<SUP>29</SUP> kg", "2.800 K", "130 días", "100 - 350 millones de años", "Helio", "2,100.000 de la luminosidad solar,", "116.250 km"]
    ];

    if(bEstrellasAgregadas==false){
	     for(i=0;i<arrObjetos.length;i++){
	      newObjet=newEstrella(arrObjetos[i][0],arrObjetos[i][1],arrObjetos[i][2],arrObjetos[i][3], arrObjetos[i][4], arrObjetos[i][5],arrObjetos[i][6], arrObjetos[i][7]);
	    }
    llenarTabla(listaEstrellas, table, clase);
    bEstrellasAgregadas=true;
	}
}//btnEstrellas

function quemarPlanetas(){
    var table=document.querySelector("#tblPlanetas tbody"),
        clase="planeta",
        arrObjetos= [
    ["Mercurio", "0.055 tierras", "178.9 C", "59 días terrestres", "0.39AU", "0.241 años terrestres"],
    ["Venus", "0.815 tierras", "462 C", "243 días terrestres", "0.72AU", "0.615 años terrestres"],
    ["Tierra", "5,9737x10<SUP>24</SUP>", "20 C", "1 días terrestres", "1AU", "1 años terrestres"],
    ["Marte", "0,10744 tierras", "-55 C", "1,026 días terrestres", "1AU", "1,8807 años terrestres"]
    ];

    if(bPlanetasAgregados==false){
	     for(i=0;i<arrObjetos.length;i++){
	      newObjet=newPlaneta(arrObjetos[i][0],arrObjetos[i][1],arrObjetos[i][2],arrObjetos[i][3], arrObjetos[i][4], arrObjetos[i][5],arrObjetos[i][6], arrObjetos[i][7]);
	     }
     llenarTabla(listaPlanetas, table, clase);
     bPlanetasAgregados=true;
 	}
}//fin function

function quemarSatelites() {
	var table=document.querySelector("#tblSatelites tbody"),
        clase="satelite",
        arrObjetos = [
     ["Luna","7,349 × 10 <SUP>22</SUP>","107 °C","27,32","384.400 km","ND","Tierra"],
	["Fobos","1.08×10<SUP>16</SUP>","233 K","7,66","9377 km","ND","Marte"],
	["Deimos","2×10<SUP>15</SUP>","233 K","30,35","23460 km","ND","Marte"],
	["Metis","1,2×10<SUP>17</SUP>","ND","0,295","128 000 km","ND","Jupiter"],
	["Adrastea","7,5×10<SUP>15</SUP>","ND","0,298","129 000 km","ND","Jupiter"]
    ];

    if(bSatelAgregados==false){
    	for(i=0;i<arrObjetos.length;i++){
    		newObjet=newSatelite(arrObjetos[i][0],arrObjetos[i][1],arrObjetos[i][2],arrObjetos[i][3], arrObjetos[i][4], arrObjetos[i][5],arrObjetos[i][6]);
    	}
    	llenarTabla(listaSatelites, table, clase);
     	bSatelAgregados=true;
    }
}//fin function

function quemarProgramas(){
    var table=document.querySelector("#tblProgramas tbody"),
        clase="programa",
        arrObjetos = [
    ["Gemini", " 3 de enero de 1962 ", "15 de noviembre 1966", "Ganar experiencia para poder llevar al hombre alas luna"]
    ]; 

    if(bProgAgregados==false){
         for(i=0;i<arrObjetos.length;i++){ 
          newObjet=newProgram(arrObjetos[i][0],arrObjetos[i][1],arrObjetos[i][2],arrObjetos[i][3]);
         }
    llenarTabla(listaProgramas, table, clase);
     bProgAgregados=true;
    }
}//Fin function

function quemarMisiones(){
    var table=document.querySelector("#tblMisiones tbody"),
        clase="mision",
        arrObjetos= [
    ["Gemini 3","Virgil I.Grissom, John W.Young","23 de marzo de 1965","4 horas, 52 minutos, 31 segundos","Primer vuelo tripulado del programa Gemini","Exitoso","https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/STS-126_patch.png/200px-STS-126_patch.png","Gemini 3"],
["Gemini 4","James McDivitt, Edward White","3 de junio de 1965","4 días, 1 hora, 56 minutos, 12 segundos","Primer paseo espacial de Estados Unidos, realizado por White, duró 22 minutos","Exitoso","https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Gemini_Four_patch.jpg/70px-Gemini_Four_patch.jpg","Gemini 4"],
["Gemini 5","Gordon Cooper, Charles Conrad","21 de agosto de 1965","7 días, 22 horas, 55 minutos, 14 segundos","Maniobras de acoplamiento. Primer uso de células de combustible para obtener energía eléctrica","Exitoso","https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Gemini5insignia.png/70px-Gemini5insignia.png","Gemini 5"],
    ];

    if(bMisionesAgregadas==false){
         for(i=0;i<arrObjetos.length;i++){
          newObjet=newMission(arrObjetos[i][0],arrObjetos[i][1],arrObjetos[i][2],arrObjetos[i][3],arrObjetos[i][4],arrObjetos[i][5],arrObjetos[i][6],arrObjetos[i][7]);
         }
     llenarTabla(listaMisiones, table, clase);
     bMisionesAgregadas=true;
    }
}//fin function