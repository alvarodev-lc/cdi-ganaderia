var switch1 = false
var switch2 = false
var switch3 = false
var switch4 = false
var switch5 = false

var switch0 = false


function OnOff(TempSlide){
    if(TempSlide=='Slide_TemperarturaVacas'){
        switch0 = switch1;
    }
    else if(TempSlide=='Slide_TemperarturaGallinas'){
        switch0 = switch2;
    }
    else if(TempSlide=='Slide_TemperarturaCerdos'){
        switch0 = switch3;
    }
    else if(TempSlide=='Slide_TemperarturaCabras'){
        switch0 = switch4;
    }
    else if(TempSlide=='Slide_TemperarturaOvejas'){
        switch0 = switch5;
    }


    if(!switch0){
        switch0 = true;
        document.getElementById(TempSlide).removeAttribute("disabled");
    }
    else{ switch0 = false;
        document.getElementById(TempSlide).setAttribute("disabled","");
    }


    if(TempSlide=='Slide_TemperarturaVacas'){
        switch1 = switch0;
    }
    else if(TempSlide=='Slide_TemperarturaGallinas'){
        switch2 = switch0;
    }
    else if(TempSlide=='Slide_TemperarturaCerdos'){
        switch3 = switch0;
    }
    else if(TempSlide=='Slide_TemperarturaCabras'){
        switch4 = switch0;
    }
    else if(TempSlide=='Slide_TemperarturaOvejas'){
        switch5 = switch0;
    }
}