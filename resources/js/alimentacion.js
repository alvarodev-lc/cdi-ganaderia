var pienso = '';
var header='';
var botones='';
var animal='';

setTimeout(throwAlert,20000)

function throwAlert() {
    $('#alert').modal()
}

function setAnimal(nombre){
    animal=nombre;
}

function setHeader(nombre){
    header=nombre;
}

function setBotones(nombre){
    botones=nombre;
}

function setPienso(nombre){
    pienso=nombre;
}



function addPienso(){

    var nombrePienso=document.getElementById("Piensos");
    var piensoNuevo = document.createElement("piensoNuevo");
    var nombre=document.getElementById("nombrePienso");
    piensoNuevo.innerHTML="<div class='container-fluid bg-grey text-center' id='Header2'>    <img src='resources/img/piensos.svg' class='low-op' width='30' height='30'>    <p class='lead category d-inline-block align-middle'>"+nombre.value+"</p>    <img src='resources/img/piensos.svg' class='low-op' width='30' height='30'></div><div class='py-sm-3 px-sm-4 bg-darkwhite'>    <div class='row'>        <div class='card-deck' id='Pienso2'>        </div>    </div></div><div class='row bg-lightgrey pl-sm-4' id = 'Botones2'>    <div class='py-sm-3 px-sm-1' onclick='setPienso(`Pienso2`),setHeader(`Header2`),setBotones(`Botones2`)'>        <button type='button' class='btn btn-outline-danger' data-toggle='modal' data-target='#removeForm'>            <svg class='bi bi-trash' width='1.5em' height='1.5em' viewBox='0 0 16 16' fill='currentColor'                xmlns='http://www.w3.org/2000/svg'>                <path                    d='M5.5 5.5A.5.5 0 016 6v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm2.5 0a.5.5 0 01.5.5v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm3 .5a.5.5 0 00-1 0v6a.5.5 0 001 0V6z' />                <path fill-rule='evenodd'                    d='M14.5 3a1 1 0 01-1 1H13v9a2 2 0 01-2 2H5a2 2 0 01-2-2V4h-.5a1 1 0 01-1-1V2a1 1 0 011-1H6a1 1 0 011-1h2a1 1 0 011 1h3.5a1 1 0 011 1v1zM4.118 4L4 4.059V13a1 1 0 001 1h6a1 1 0 001-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z'                    clip-rule='evenodd' />            </svg>            Eliminar Pienso        </button>    </div>    <div class='py-sm-3 px-sm-1' onclick='setPienso(`Pienso2`)'>        <button type='button' class='btn btn-success' data-toggle='modal' data-target='#addForm'>            <svg class='bi bi-plus' width='1.5em' height='1.5em' viewBox='0 0 16 16' fill='currentColor'                xmlns='http://www.w3.org/2000/svg'>                <path fill-rule='evenodd'                    d='M8 3.5a.5.5 0 01.5.5v4a.5.5 0 01-.5.5H4a.5.5 0 010-1h3.5V4a.5.5 0 01.5-.5z'                    clip-rule='evenodd' />                <path fill-rule='evenodd' d='M7.5 8a.5.5 0 01.5-.5h4a.5.5 0 010 1H8.5V12a.5.5 0 01-1 0V8z'                    clip-rule='evenodd' />            </svg>            Añadir Animal        </button>    </div></div>";
    nombrePienso.appendChild(piensoNuevo);
    
}

function addAnimal(){

    var nombreAnimal=document.getElementById(pienso);
    var animalNuevo=document.createElement("animalNuevo");
    var nombrePropio=document.getElementById("nombrePropio");

    if(nombrePropio.value=='Carmen'){
        animalNuevo.innerHTML="<div class='card shadow-sm' id='Carmen'>       <div class='card-body'>        <h5 class='card-title'>Carmen</h5>        <ul class='list-group list-group-flush'>            <li class='list-group-item'>Id: 1</li>            <li class='list-group-item'>Estado: SANO</li>            <li class='list-group-item'>Ingestia diaria: "+ingestaDiaria.value+"</li>        </ul>        <p class='card-text'> </p> <button href='#' class='btn btn-outline-danger'> <svg class='bi bi-pencil-square'                width='1em' height='1em' viewBox='0 0 16 16' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>                <path                    d='M15.502 1.94a.5.5 0 010 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 01.707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 00-.121.196l-.805 2.414a.25.25 0 00.316.316l2.414-.805a.5.5 0 00.196-.12l6.813-6.814z'>                </path>                <path fill-rule='evenodd'                    d='M1 13.5A1.5 1.5 0 002.5 15h11a1.5 1.5 0 001.5-1.5v-6a.5.5 0 00-1 0v6a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-11a.5.5 0 01.5-.5H9a.5.5 0 000-1H2.5A1.5 1.5 0 001 2.5v11z'                    clip-rule='evenodd'></path>            </svg> </button> <button href='#' class='btn btn-outline-danger'data-toggle ='modal' data-target='#removeAForm' onclick='setAnimal(`Carmen`)'> <svg class='bi bi-x' width='1em'                height='1em' viewBox='0 0 16 16' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>                <path fill-rule='evenodd'                    d='M11.854 4.146a.5.5 0 010 .708l-7 7a.5.5 0 01-.708-.708l7-7a.5.5 0 01.708 0z' clip-rule='evenodd'>                </path>                <path fill-rule='evenodd' d='M4.146 4.146a.5.5 0 000 .708l7 7a.5.5 0 00.708-.708l-7-7a.5.5 0 00-.708 0z'                    clip-rule='evenodd'></path>            </svg> </button>    </div></div>";
    }
    else if(nombrePropio.value=='Paca'){
        animalNuevo.innerHTML="<div class='card shadow-sm' id='Paca'>        <div class='card-body'>        <h5 class='card-title'>Paca</h5>        <ul class='list-group list-group-flush'>            <li class='list-group-item'>Id: 2</li>            <li class='list-group-item'>Estado: SANO</li>            <li class='list-group-item'>Ingestia diaria: "+ingestaDiaria.value+"</li>        </ul>        <p class='card-text'> </p> <button href='#' class='btn btn-outline-danger'> <svg class='bi bi-pencil-square'                width='1em' height='1em' viewBox='0 0 16 16' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>                <path                    d='M15.502 1.94a.5.5 0 010 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 01.707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 00-.121.196l-.805 2.414a.25.25 0 00.316.316l2.414-.805a.5.5 0 00.196-.12l6.813-6.814z'>                </path>                <path fill-rule='evenodd'                    d='M1 13.5A1.5 1.5 0 002.5 15h11a1.5 1.5 0 001.5-1.5v-6a.5.5 0 00-1 0v6a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-11a.5.5 0 01.5-.5H9a.5.5 0 000-1H2.5A1.5 1.5 0 001 2.5v11z'                    clip-rule='evenodd'></path>            </svg> </button> <button href='#' class='btn btn-outline-danger' data-toggle ='modal' data-target='#removeAForm' onclick='setAnimal(`Paca`)'> <svg                class='bi bi-x' width='1em' height='1em' viewBox='0 0 16 16' fill='currentColor'                xmlns='http://www.w3.org/2000/svg'>                <path fill-rule='evenodd'                    d='M11.854 4.146a.5.5 0 010 .708l-7 7a.5.5 0 01-.708-.708l7-7a.5.5 0 01.708 0z' clip-rule='evenodd'>                </path>                <path fill-rule='evenodd' d='M4.146 4.146a.5.5 0 000 .708l7 7a.5.5 0 00.708-.708l-7-7a.5.5 0 00-.708 0z'                    clip-rule='evenodd'></path>            </svg> </button>    </div></div>";
    }
    else if(nombrePropio.value=='Ramsey'){
        animalNuevo.innerHTML="<div class='card shadow-sm' id='Ramsey'>        <div class='card-body'>        <h5 class='card-title'>Ramsey</h5>        <ul class='list-group list-group-flush'>            <li class='list-group-item'>Id: 15</li>            <li class='list-group-item'>Estado: SANO</li>            <li class='list-group-item'>Ingestia diaria: "+ingestaDiaria.value+"</li>        </ul>        <p class='card-text'> </p> <button href='#' class='btn btn-outline-danger'> <svg class='bi bi-pencil-square'                width='1em' height='1em' viewBox='0 0 16 16' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>                <path                    d='M15.502 1.94a.5.5 0 010 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 01.707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 00-.121.196l-.805 2.414a.25.25 0 00.316.316l2.414-.805a.5.5 0 00.196-.12l6.813-6.814z'>                </path>                <path fill-rule='evenodd'                    d='M1 13.5A1.5 1.5 0 002.5 15h11a1.5 1.5 0 001.5-1.5v-6a.5.5 0 00-1 0v6a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-11a.5.5 0 01.5-.5H9a.5.5 0 000-1H2.5A1.5 1.5 0 001 2.5v11z'                    clip-rule='evenodd'></path>            </svg> </button> <button href='#' class='btn btn-outline-danger' data-toggle ='modal' data-target='#removeAForm' onclick='setAnimal(`Ramsey`)'> <svg                class='bi bi-x' width='1em' height='1em' viewBox='0 0 16 16' fill='currentColor'                xmlns='http://www.w3.org/2000/svg'>                <path fill-rule='evenodd'                    d='M11.854 4.146a.5.5 0 010 .708l-7 7a.5.5 0 01-.708-.708l7-7a.5.5 0 01.708 0z' clip-rule='evenodd'>                </path>                <path fill-rule='evenodd' d='M4.146 4.146a.5.5 0 000 .708l7 7a.5.5 0 00.708-.708l-7-7a.5.5 0 00-.708 0z'                    clip-rule='evenodd'></path>            </svg> </button>    </div></div>";
    }
    else if(nombrePropio.value=='Copo de nieve'){
        animalNuevo.innerHTML="<div class='card shadow-sm' id='Copo de nieve'>        <div class='card-body'>        <h5 class='card-title'>Copo de nieve</h5>        <ul class='list-group list-group-flush'>            <li class='list-group-item'>Id: 17</li>            <li class='list-group-item'>Estado: SANO</li>            <li class='list-group-item'>Ingestia diaria: "+ingestaDiaria.value+"</li>        </ul>        <p class='card-text'> </p> <button href='#' class='btn btn-outline-danger'> <svg class='bi bi-pencil-square'                width='1em' height='1em' viewBox='0 0 16 16' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>                <path                    d='M15.502 1.94a.5.5 0 010 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 01.707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 00-.121.196l-.805 2.414a.25.25 0 00.316.316l2.414-.805a.5.5 0 00.196-.12l6.813-6.814z'>                </path>                <path fill-rule='evenodd'                    d='M1 13.5A1.5 1.5 0 002.5 15h11a1.5 1.5 0 001.5-1.5v-6a.5.5 0 00-1 0v6a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-11a.5.5 0 01.5-.5H9a.5.5 0 000-1H2.5A1.5 1.5 0 001 2.5v11z'                    clip-rule='evenodd'></path>            </svg> </button> <button href='#' class='btn btn-outline-danger' data-toggle ='modal' data-target='#removeAForm' onclick='setAnimal(`Copo de nieve`)'> <svg                class='bi bi-x' width='1em' height='1em' viewBox='0 0 16 16' fill='currentColor'                xmlns='http://www.w3.org/2000/svg'>                <path fill-rule='evenodd'                    d='M11.854 4.146a.5.5 0 010 .708l-7 7a.5.5 0 01-.708-.708l7-7a.5.5 0 01.708 0z' clip-rule='evenodd'>                </path>                <path fill-rule='evenodd' d='M4.146 4.146a.5.5 0 000 .708l7 7a.5.5 0 00.708-.708l-7-7a.5.5 0 00-.708 0z'                    clip-rule='evenodd'></path>            </svg> </button>    </div></div>";
    }
    else if(nombrePropio.value=='Margarita'){
        animalNuevo.innerHTML="<div class='card shadow-sm' id='Margarita'>        <div class='card-body'>        <h5 class='card-title'>Margarita</h5>        <ul class='list-group list-group-flush'>            <li class='list-group-item'>Id: 16</li>            <li class='list-group-item'>Estado: SANO</li>            <li class='list-group-item'>Ingestia diaria: "+ingestaDiaria.value+"</li>        </ul>        <p class='card-text'> </p> <button href='#' class='btn btn-outline-danger'> <svg class='bi bi-pencil-square'                width='1em' height='1em' viewBox='0 0 16 16' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>                <path                    d='M15.502 1.94a.5.5 0 010 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 01.707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 00-.121.196l-.805 2.414a.25.25 0 00.316.316l2.414-.805a.5.5 0 00.196-.12l6.813-6.814z'>                </path>                <path fill-rule='evenodd'                    d='M1 13.5A1.5 1.5 0 002.5 15h11a1.5 1.5 0 001.5-1.5v-6a.5.5 0 00-1 0v6a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-11a.5.5 0 01.5-.5H9a.5.5 0 000-1H2.5A1.5 1.5 0 001 2.5v11z'                    clip-rule='evenodd'></path>            </svg> </button> <button href='#' class='btn btn-outline-danger' data-toggle ='modal' data-target='#removeAForm' onclick='setAnimal(`Margarita`)'> <svg                class='bi bi-x' width='1em' height='1em' viewBox='0 0 16 16' fill='currentColor'                xmlns='http://www.w3.org/2000/svg'>                <path fill-rule='evenodd'                    d='M11.854 4.146a.5.5 0 010 .708l-7 7a.5.5 0 01-.708-.708l7-7a.5.5 0 01.708 0z' clip-rule='evenodd'>                </path>                <path fill-rule='evenodd' d='M4.146 4.146a.5.5 0 000 .708l7 7a.5.5 0 00.708-.708l-7-7a.5.5 0 00-.708 0z'                    clip-rule='evenodd'></path>            </svg> </button>    </div></div>";
    }
    else if(nombrePropio.value=='Pati'){
        animalNuevo.innerHTML="<div class='card shadow-sm' id='Pati'>        <div class='card-body'>        <h5 class='card-title'>Pati</h5>        <ul class='list-group list-group-flush'>            <li class='list-group-item'>Id: 8</li>            <li class='list-group-item'>Estado: SANO</li>            <li class='list-group-item'>Ingestia diaria: "+ingestaDiaria.value+"</li>        </ul>        <p class='card-text'> </p> <button href='#' class='btn btn-outline-danger'> <svg class='bi bi-pencil-square'                width='1em' height='1em' viewBox='0 0 16 16' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>                <path                    d='M15.502 1.94a.5.5 0 010 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 01.707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 00-.121.196l-.805 2.414a.25.25 0 00.316.316l2.414-.805a.5.5 0 00.196-.12l6.813-6.814z'>                </path>                <path fill-rule='evenodd'                    d='M1 13.5A1.5 1.5 0 002.5 15h11a1.5 1.5 0 001.5-1.5v-6a.5.5 0 00-1 0v6a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-11a.5.5 0 01.5-.5H9a.5.5 0 000-1H2.5A1.5 1.5 0 001 2.5v11z'                    clip-rule='evenodd'></path>            </svg> </button> <button href='#' class='btn btn-outline-danger' data-toggle ='modal' data-target='#removeAForm' onclick='setAnimal(`Pati`)'> <svg                class='bi bi-x' width='1em' height='1em' viewBox='0 0 16 16' fill='currentColor'                xmlns='http://www.w3.org/2000/svg'>                <path fill-rule='evenodd'                    d='M11.854 4.146a.5.5 0 010 .708l-7 7a.5.5 0 01-.708-.708l7-7a.5.5 0 01.708 0z' clip-rule='evenodd'>                </path>                <path fill-rule='evenodd' d='M4.146 4.146a.5.5 0 000 .708l7 7a.5.5 0 00.708-.708l-7-7a.5.5 0 00-.708 0z'                    clip-rule='evenodd'></path>            </svg> </button>    </div></div>";
    }
    else if(nombrePropio.value=='Molly'){
        animalNuevo.innerHTML="<div class='card shadow-sm' id='Molly'>        <div class='card-body'>        <h5 class='card-title'>Molly</h5>        <ul class='list-group list-group-flush'>            <li class='list-group-item'>Id: 7</li>            <li class='list-group-item'>Estado: SANO</li>            <li class='list-group-item'>Ingestia diaria: "+ingestaDiaria.value+"</li>        </ul>        <p class='card-text'> </p> <button href='#' class='btn btn-outline-danger'> <svg class='bi bi-pencil-square'                width='1em' height='1em' viewBox='0 0 16 16' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>                <path                    d='M15.502 1.94a.5.5 0 010 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 01.707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 00-.121.196l-.805 2.414a.25.25 0 00.316.316l2.414-.805a.5.5 0 00.196-.12l6.813-6.814z'>                </path>                <path fill-rule='evenodd'                    d='M1 13.5A1.5 1.5 0 002.5 15h11a1.5 1.5 0 001.5-1.5v-6a.5.5 0 00-1 0v6a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-11a.5.5 0 01.5-.5H9a.5.5 0 000-1H2.5A1.5 1.5 0 001 2.5v11z'                    clip-rule='evenodd'></path>            </svg> </button> <button href='#' class='btn btn-outline-danger' data-toggle ='modal' data-target='#removeAForm' onclick='setAnimal(`Molly`)'> <svg                class='bi bi-x' width='1em' height='1em' viewBox='0 0 16 16' fill='currentColor'                xmlns='http://www.w3.org/2000/svg'>                <path fill-rule='evenodd'                    d='M11.854 4.146a.5.5 0 010 .708l-7 7a.5.5 0 01-.708-.708l7-7a.5.5 0 01.708 0z' clip-rule='evenodd'>                </path>                <path fill-rule='evenodd' d='M4.146 4.146a.5.5 0 000 .708l7 7a.5.5 0 00.708-.708l-7-7a.5.5 0 00-.708 0z'                    clip-rule='evenodd'></path>            </svg> </button>    </div></div>";
    }
    
    nombrePropio.value=''; //Arregla que se añada una tarjeta al clickar con los datos de la última vaca que se añadio
    nombreAnimal.appendChild(animalNuevo);

}

function removePienso(){

    var doc1 = document.getElementById(pienso);
    doc1.parentNode.removeChild(doc1);

    var doc2 = document.getElementById(header);
    doc2.parentNode.removeChild(doc2);

    var doc3 = document.getElementById(botones);
    doc3.parentNode.removeChild(doc3);
}

function editIngesta(){

    var gramos = document.getElementById("gramosIngesta");
    document.getElementById("ingestaEdit").innerHTML = 'Ingesta diaria: '+gramos.value+'g';
    
}

function bonitoIngesta(){ 
    var ingesta = document.getElementById("ingestaEdit").innerHTML
    var split = ingesta.split(': ')[1].split('g');
    console.log(split);
    document.getElementById("gramosIngesta").setAttribute("value",split[0]);
}

function removeAnimal(){
    console.log(animal);
    var doc=document.getElementById(animal);
    doc.parentNode.removeChild(doc);
}