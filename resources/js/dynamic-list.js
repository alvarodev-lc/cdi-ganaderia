//Carga de datos
var family = '';

var data = {

    "VACAS": [
    {
        "Nombre": "Carmen",
        "ID": 1,
        "Nac": "2010-01-18",
        "Sexo": "Hembra",
        "Raza": "Bos Indicus",
        "Estado": "Sano"
    },
    {
        "Nombre": "Paca",
        "ID": 2,
        "Nac": "2011-01-19",
        "Sexo": "Hembra",
        "Raza": "Bos Indicus",
        "Estado": "Sano"
    },
    {
        "Nombre": "Milka",
        "ID": 3,
        "Nac": "2011-01-19",
        "Sexo": "Hembra",
        "Raza": "Vogelsberger",
        "Estado": "Sano"
    },
    {
        "Nombre": "Alicia",
        "ID": 4,
        "Nac": "2011-11-13",
        "Sexo": "Hembra",
        "Raza": "Vogelsberger",
        "Estado": "Sano"
    },
    {
        "Nombre": "Eli",
        "ID": 5,
        "Nac": "2006-01-09",
        "Sexo": "Hembra",
        "Raza": "Bos Indicus",
        "Estado": "Sano"
    }],

    "GALLINAS":[
        {
            "Nombre": "Lori",
            "ID": 6,
            "Nac": "2012-04-17",
            "Sexo": "Hembra",
            "Raza": "Padovana",
            "Estado": "Sano",
        }, 
        {
            "Nombre": "Molly",
            "ID": 7,
            "Nac": "2015-05-17",
            "Sexo": "Hembra",
            "Raza": "Faverolles",
            "Estado":"Sano",
        }, 
        {
            "Nombre": "Pati",	
            "ID": 8,
            "Nac": "2026-08-18",
            "Sexo": "Hembra",
            "Raza": "Padovana",
            "Estado": "Sano",
        }, 
        {
            "Nombre": "Pica",
            "ID": 9,
            "Nac": "2018-09-19",
            "Sexo": "Macho",
            "Raza": "Borbonesa",
            "Estado": "Sano",
        }],

    "CERDOS":[
        {
            "Nombre": "Babe",
            "ID": 10,
            "Nac": "2020-09-20",
            "Sexo": "Macho",
            "Raza": "Berkshire",
            "Estado": "Sano",
        }, 
        {
            "Nombre": "Brenda",
            "ID": 11,
            "Nac": "2001-04-16",
            "Sexo": "Hembra",
            "Raza": "Ibérico",
            "Estado": "Enfermo",
        }, 
        {
            "Nombre": "Manolo",
            "ID": 12,
            "Nac": "2006-01-15",
            "Sexo": "Macho",
            "Raza": "Ibérico",
            "Estado": "Sano",
        }, 
        {
            "Nombre": "Romeo",
            "ID": 13,
            "Nac": "2013-02-19",
            "Sexo": "Macho",
            "Raza": "Ibérico",
            "Estado": "Sano",
        }],

    "CABRAS":[
        {
            "Nombre": "Vincent van Goat",
            "ID": 14,
            "Nac": "2014-03-19",
            "Sexo": "Macho",
            "Raza": "Boer",
            "Estado": "Sano",
        }, 
        {
            "Nombre": "Ramsey",
            "ID": 15,
            "Nac": "2009-05-13",
            "Sexo": "Macho",
            "Raza": "Alpina",
            "Estado": "Sano",
        }, 
        {
            "Nombre": "Margarita",
            "ID": 16,
            "Nac": "2010-11-17",
            "Sexo": "Hembra",
            "Raza": "Damasco",
            "Estado": "Sano",
        }, 
        {
            "Nombre": "Copo de nieve",
            "ID": 17,
            "Nac": "2021-12-16",
            "Sexo": "Macho",
            "Raza": "Alpina",
            "Estado": "Sano",
        }],

    "OVEJAS":[
        {
            "Nombre": "Tormentoso",
            "ID": 18,
            "Nac": "2016-07-11",
            "Sexo": "Macho",
            "Raza": "Romanov", 
            "Estado": "Sano",
        }, 
        {
            "Nombre": "Regaliz",
            "ID": 19,
            "Nac": "2021-01-20",
            "Sexo": "Hembra",
            "Raza": "Dorper",
            "Estado": "Sano",
        }, 
        {
            "Nombre": "Arenoso",
            "ID": 20,
            "Nac": "2003-12-19",
            "Sexo": "Macho",
            "Raza": "Merina",			
            "Estado": "Sano",
        }, 
        {
            "Nombre": "Rizada",
            "ID": 21,
            "Nac": "2023-06-13",
            "Sexo": "Hembra",
            "Raza": "Merina",
            "Estado": "Enfermo",
        }]
}

if (localStorage.getItem("familias") == null) {
    var setUp = ['VACAS', 'GALLINAS', 'CERDOS', 'CABRAS', 'OVEJAS']
    localStorage.setItem("familias", setUp);

}

var familyArray = localStorage.getItem("familias").split(",");

if (localStorage.getItem("animals") == null) {
    localStorage.setItem("animals", JSON.stringify(data));
}

var localData = JSON.parse(localStorage.getItem("animals"))

if (localStorage.getItem("familias").length != 0) {
    var familyArray = localStorage.getItem("familias").split(",");
    var ref = document.getElementById("afamily");
    for (var i=0;familyArray.length != null && i < familyArray.length; i++){
        //console.log("Dibujando familia " + familyArray[i]);

        var fitem = document.createElement("familia");
        fitem.innerHTML = "<div class='' id='"+familyArray[i]+"Container'><div class='container-fluid bg-grey text-center'><img src='resources/img/fence.svg' class='low-op mx-sm-2' width='30' height='30'><p class='lead category d-inline-block align-middle'>"+familyArray[i]+"</p><img src='resources/img/fence.svg' class='low-op mx-sm-2' width='30' height='30'></div><div class='px-sm-4 bg-darkwhite'><div class='row'><div class='card-deck py-sm-3' id='"+familyArray[i]+"'></div></div></div>      <div class='row bg-lightgrey pl-sm-4'> <div class='py-sm-3 px-sm-1' onclick='setFamily(`"+familyArray[i]+"`)'>   <button type='button' class='btn btn-outline-danger' data-toggle='modal' data-target='#removeForm'><svg class='bi bi-trash' width='1.5em' height='1.5em' viewBox='0 0 16 16' fill='currentColor' xmlns='http://www.w3.org/2000/svg'><path d='M5.5 5.5A.5.5 0 016 6v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm2.5 0a.5.5 0 01.5.5v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm3 .5a.5.5 0 00-1 0v6a.5.5 0 001 0V6z' />              <path fill-rule='evenodd'                d='M14.5 3a1 1 0 01-1 1H13v9a2 2 0 01-2 2H5a2 2 0 01-2-2V4h-.5a1 1 0 01-1-1V2a1 1 0 011-1H6a1 1 0 011-1h2a1 1 0 011 1h3.5a1 1 0 011 1v1zM4.118 4L4 4.059V13a1 1 0 001 1h6a1 1 0 001-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z'                clip-rule='evenodd' />            </svg>            Eliminar Familia          </button>        </div>        <div class='py-sm-3 px-sm-1' onclick='setFamily(`"+familyArray[i]+"`)'>          <button type='button' class='btn btn-success' data-toggle='modal' data-target='#addForm'>            <svg class='bi bi-plus' width='1.5em' height='1.5em' viewBox='0 0 16 16' fill='currentColor'              xmlns='http://www.w3.org/2000/svg'>              <path fill-rule='evenodd' d='M8 3.5a.5.5 0 01.5.5v4a.5.5 0 01-.5.5H4a.5.5 0 010-1h3.5V4a.5.5 0 01.5-.5z'                clip-rule='evenodd' />              <path fill-rule='evenodd' d='M7.5 8a.5.5 0 01.5-.5h4a.5.5 0 010 1H8.5V12a.5.5 0 01-1 0V8z'                clip-rule='evenodd' />            </svg>            Nuevo Animal          </button>        </div>      </div>    </div>";

        ref.appendChild(fitem);
    }
}

for (var f = 0; f < familyArray.length; f++) {

    var ref = document.getElementById(familyArray[f])

    var vectorAnim = localData[familyArray[f]]

    for (var a = 0; typeof vectorAnim != 'undefined' && a < vectorAnim.length; a++){
        var item = document.createElement("animal");
        var sexImg = ''
        if (vectorAnim[a].Sexo == 'Hembra') {
            sexImg = 'woman.svg'
        } else {
            sexImg = 'male.svg'
        }
        item.innerHTML = "<div class='card shadow-sm' style='width: 15rem;' id='"+vectorAnim[a].Nombre+"'>            <div class='card-body'>              <h5 class='card-title d-inline-block'>"+vectorAnim[a].Nombre+"</h5>              <img class='mb-sm-1' src='resources/img/"+sexImg+"' width='18' height='18'>              <ul class='list-group list-group-flush'>                <li class='list-group-item'>Id: "+vectorAnim[a].ID+"</li>                <li class='list-group-item'><svg class='bi bi-calendar' width='1em' height='1em' viewBox='0 0 16 16' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>                    <path fill-rule='evenodd' d='M14 0H2a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z' clip-rule='evenodd'/>                    <path fill-rule='evenodd' d='M6.5 7a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm-9 3a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm-9 3a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2z' clip-rule='evenodd'/>                  </svg>                  "+vectorAnim[a].Nac+"</li>                <li class='list-group-item'>Raza: "+vectorAnim[a].Raza+"</li>                <li class='list-group-item'>Estado: "+vectorAnim[a].Estado+"</li>              </ul>              <a href='vacunacion.html' class='btn btn-info'>                <svg class='bi bi-clipboard' width='1em' height='1em' viewBox='0 0 16 16' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>                  <path fill-rule='evenodd' d='M4 1.5H3a2 2 0 00-2 2V14a2 2 0 002 2h10a2 2 0 002-2V3.5a2 2 0 00-2-2h-1v1h1a1 1 0 011 1V14a1 1 0 01-1 1H3a1 1 0 01-1-1V3.5a1 1 0 011-1h1v-1z' clip-rule='evenodd'/>                  <path fill-rule='evenodd' d='M9.5 1h-3a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h3a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5zm-3-1A1.5 1.5 0 005 1.5v1A1.5 1.5 0 006.5 4h3A1.5 1.5 0 0011 2.5v-1A1.5 1.5 0 009.5 0h-3z' clip-rule='evenodd'/>                </svg>              </a>              <button href='#' class='btn btn-outline-danger' onClick='preEdit(`"+vectorAnim[a].Nombre+"`,`"+familyArray[f]+"`, 1)' data-toggle='modal' data-target='#editAForm'>                <svg class='bi bi-pencil-square' width='1em' height='1em' viewBox='0 0 16 16' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>                  <path d='M15.502 1.94a.5.5 0 010 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 01.707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 00-.121.196l-.805 2.414a.25.25 0 00.316.316l2.414-.805a.5.5 0 00.196-.12l6.813-6.814z'/>                  <path fill-rule='evenodd' d='M1 13.5A1.5 1.5 0 002.5 15h11a1.5 1.5 0 001.5-1.5v-6a.5.5 0 00-1 0v6a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-11a.5.5 0 01.5-.5H9a.5.5 0 000-1H2.5A1.5 1.5 0 001 2.5v11z' clip-rule='evenodd'/>                </svg>              </button>              <button href='#' class='btn btn-outline-danger' onClick='targetAnimal(`"+vectorAnim[a].Nombre+"`, `"+familyArray[f]+"`)' data-toggle='modal' data-target='#removeAForm'>                <svg class='bi bi-x' width='1em' height='1em' viewBox='0 0 16 16' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>                  <path fill-rule='evenodd' d='M11.854 4.146a.5.5 0 010 .708l-7 7a.5.5 0 01-.708-.708l7-7a.5.5 0 01.708 0z' clip-rule='evenodd'/>                  <path fill-rule='evenodd' d='M4.146 4.146a.5.5 0 000 .708l7 7a.5.5 0 00.708-.708l-7-7a.5.5 0 00-.708 0z' clip-rule='evenodd'/>                </svg>              </button>            </div>          </div>";

        ref.appendChild(item);
        //console.log(localData[familyArray[f]][a])
    }
}


// Familias
function addFamily() {

    var familyName = document.getElementById("familyName");

    if (family == '' && es == 0){
        var fam = localStorage.getItem('familias');
        localStorage.setItem('familias', fam + ', ' + familyName.value)
        window.location.href = "animales.html";
    }
}

function removeFamily() {
    var fam = localStorage.getItem('familias');
    var vec = fam.split(",");

    for (var i = 0; i < vec.length; i++) {
        if (vec[i] == family) {
            removable = vec.indexOf(family);
            if (removable > -1) {
                vec.splice(removable, 1);
                console.log(vec);
                localStorage.setItem('familias', vec);
            }
        }
    }

    window.location.href = "animales.html";

}

function setFamily(familyName){
    family = familyName;
    console.log(familyName);
}


//Animales
function createAnimal() {

    if (family != '' && es == 0) {

        //Obiene datos del formulario
        var name = document.getElementById("name");
        var id = document.getElementById("id");
        var date = document.getElementById("date");
        var sex = document.getElementById("sex");
        var race = document.getElementById("race");
        var state = document.getElementById("state");

        console.log(date.value)

        var plantilla = {
            "Nombre": name.value,
            "ID": id.value,
            "Nac": date.value,
            "Sexo": sex.value,
            "Raza": race.value,
            "Estado": state.value
        }

        //console.log(state.value);

        var json = JSON.parse(localStorage.getItem("animals"));
        if (typeof json[family] != 'undefined') {
            json[family].push(plantilla);
        } else {
            json[family] = [plantilla];
        }

        localStorage.setItem("animals", JSON.stringify(json));
        window.location.href = "animales.html";

    }
}

function setFam() {
    family = ''
    console.log("moved cancelled")
}

// Elimina elemento de la sección especificada.

var targetN = '' 
var targetSec = ''
var es = 0

function targetAnimal(name, family) {
    targetN = name
    targetSec = family
}

function preEdit(n, f, flag) {
    es = flag
    targetAnimal(n, f)

    console.log(n)

    var animals = JSON.parse(localStorage.getItem("animals"))
    var vector = animals[targetSec]
    for (var i = 0; i < vector.length; i++) {
        if (vector[i].Nombre == targetN) {
            document.getElementById("namee").setAttribute("value", vector[i].Nombre)
            document.getElementById("ide").setAttribute("value", vector[i].ID)
            document.getElementById("racee").setAttribute("value", vector[i].Raza)
            document.getElementById("datee").setAttribute("value", vector[i].Nac)
            
            if (vector[i].Sexo == "Macho") {
                document.getElementById("om").setAttribute("selected", "true")
            } else if (vector[i].Sexo == "Hembra"){
                document.getElementById("oh").setAttribute("selected", "true")
            }

            if (vector[i].Estado == "Sano") {
                document.getElementById("osa").setAttribute("selected", "true")
            } else if (vector[i].Estado == "Enfermo"){
                document.getElementById("oen").setAttribute("selected", "true")
            }
        }
    
    }
    
}

function cancelEdit() {
    console.log("Edit Cancelado")
    es = 0
}

function endEdit() {
    if (es == 1){
        //Obiene datos del formulario
        var name = document.getElementById("namee");
        var id = document.getElementById("ide");
        var date = document.getElementById("datee");
        var sex = document.getElementById("sexe");
        var race = document.getElementById("racee");
        var state = document.getElementById("statee");

        console.log(date.value)

        var plantilla = {
            "Nombre": name.value,
            "ID": id.value,
            "Nac": date.value,
            "Sexo": sex.value,
            "Raza": race.value,
            "Estado": state.value
        }

        //console.log(state.value);

        var json = JSON.parse(localStorage.getItem("animals"));
        var vec = json[targetSec];
        for (var i = 0; i < vec.length; i++ ) {
            if (vec[i].Nombre == targetN) {
                vec[i] = plantilla
                json[targetSec] = vec
            }
        }

        localStorage.setItem("animals", JSON.stringify(json));
        window.location.href = "animales.html";
    }
    
}

function deleteElement() {
    
    var animals = JSON.parse(localStorage.getItem("animals"))
    var vector = animals[targetSec]
    for (var i = 0; i < vector.length; i++) {
        if (vector[i].Nombre == targetN) {
            var ind = vector.indexOf(vector[i])
            console.log(ind)
            if (ind > -1) {
                vector.splice(ind, 1);
                animals[targetSec] = vector
            }
            
            localStorage.setItem("animals", JSON.stringify(animals))
        }
    }

    window.location.href = "animales.html";
}