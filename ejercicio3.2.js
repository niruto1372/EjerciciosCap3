
let hTrabajadas = +prompt("ingresa la cantidad de horas trabajadas");
let pHora = +prompt("Ingresa el monto pagado por hora trabajada");
let sSemanal= 0;
const max=40;

if(hTrabajadas <= 40){
    sSemanal = hTrabajadas*pHora;
    console.log(`Tu sueldo semanal es: ${sSemanal}`);
}else{
    let exedente = hTrabajadas-max;
    sSemanal=max*pHora+(exedente*pHora*2);
    console.log(`Tu sueldo semanal es: ${sSemanal}`);
}