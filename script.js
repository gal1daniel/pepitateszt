var button = document.getElementById('menubutton');
button.addEventListener('click', MenuOpen);

var menuopened = false;

function MenuOpen(){
    menuopened = !menuopened
    if (menuopened) {
        document.getElementById('menuCont').style.transform = 'translateX(0)'
        
    } else {
        document.getElementById('menuCont').style.transform = 'translateX(-101%)'
    }
}

var value = [0,0,0]

function changevalue(id, action){
    if (value[id-1]+action>=0) {   
    document.getElementById('countervalue'+id).innerHTML = value[id-1]+action
    value[id-1] = value[id-1]+action
    }
    if (value[id-1]>0) {
        document.getElementById('countervalue'+id).style.color='black'
    } else {
        document.getElementById('countervalue'+id).style.color='#D4D4D4'
    }

    let sum = 0;
    let totalvalue = 0;

    for (let i = 0; i < value.length; i++) {
        sum = sum+value[i]
    }
    totalvalue = sum*8

    document.getElementById('totalvalue').innerHTML = '$'+totalvalue
}






