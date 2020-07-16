let antiguedad=+prompt("Ingresa tu antiguedad en la empresa:");
let sueldo=+prompt("Ingresa el monto de tu sueldo");
let bono=0;
if (antiguedad>sueldo){
    if(antiguedad>2 && antiguedad<5){
        bono=(sueldo*20)/100;
        console.log(`te corresponde un bono del 20%: ${bono}`);
    }else if(antiguedad>=5){
        bono=(sueldo*30)/100;
        console.log(`te corresponde un bono del 20%: ${bono}`);
    }
}else{
    if(sueldo<=1000){
        bono=(sueldo*25)/100;
        console.log(`te corresponde un bono del 20%: ${bono}`);
    }else if(sueldo>1000 && sueldo<=3500){
        bono=(sueldo*15)/100;
        console.log(`te corresponde un bono del 20%: ${bono}`);
    }else if(sueldo >3500){
        bono=(sueldo*10)/100;
        console.log(`te corresponde un bono del 20%: ${bono}`);
    }
}
