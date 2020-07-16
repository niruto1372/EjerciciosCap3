let polizaA=1200;
let polizaB=950;

let eleccion=+prompt("ingresa un numero dependiendo de tu poliza: 1) Poliza A 2) Poliza B");
let cargo=+prompt("1) bebes alcohol 2) usas lentes 3) Padeces alguna enfermedad 4) Eres mayo de 40 anios");

if(eleccion===1){
    if(cargo===1){
        console.log(`se hace un cargo de 10% por beber alcohol: ${polizaA*10/100}`);
    }else if(cargo===2){
        console.log(`se hace un cargo de 5% por usar lentes: ${polizaA*5/100}`);
    }else if(cargo===3){
        console.log(`se hace un cargo de 5% por padecer una enfermedad: ${polizaA*5/100}`);
    }else if(cargo===4){
        console.log(`se hace un cargo de 20% por tener mas de 40 anios: ${polizaA*20/100}`);
    }else{
        console.log(`se te hace un cargo del 10% sin razon alguna:  ${polizaA*10/100}`);
    }
}else{
    if(cargo===1){
        console.log(`se hace un cargo de 10% por beber alcohol: ${polizaB*10/100}`);
    }else if(cargo===2){
        console.log(`se hace un cargo de 5% por usar lentes: ${polizaB*5/100}`);
    }else if(cargo===3){
        console.log(`se hace un cargo de 5% por padecer una enfermedad: ${polizaB*5/100}`);
    }else if(cargo===4){
        console.log(`se hace un cargo de 20% por tener mas de 40 anios: ${polizaB*20/100}`);
    }else{
        console.log(`se te hace un cargo del 10% sin razon alguna:  ${polizaB*10/100}`);
    }
}