debugger;
let horas = +prompt("Ingresa la cantidad de horas que vas a usar la cochera:");
let totalAPagar=0;
if (horas<=2){
    totalAPagar=horas*5;
    console.log(`El monto total a pagar por ${horas} horas es: ${totalAPagar}`);
}else if(horas>2 && horas <=5){
    let ex=horas-2;
    totalAPagar=(horas-ex)*5 +ex*4;
    console.log(`El monto total a pagar por ${horas} horas es: ${totalAPagar}`);
}else if(horas>5 && horas<=10){
    let ex=horas-2;
    let ex1=ex-3;
    totalAPagar=(horas-ex)*5 +ex*4+ex1*3;
    console.log(`El monto total a pagar por ${horas} horas es: ${totalAPagar}`);
}else if(horas>10){
    let ex=horas-2;
    let ex1=ex-3;
    let ex2=ex1-5;
    totalAPagar=(horas-ex)*5 +ex*4+ex1*3+ex2*2;
    console.log(`El monto total a pagar por ${horas} horas es: ${totalAPagar}`);
}