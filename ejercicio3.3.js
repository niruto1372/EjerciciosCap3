let cash = +prompt("Ingresa la cantidad de dinero que dispones:");

if (cash <= 10){
    console.log("puedes regalar una tarjeta :v");
}else if (cash>10 && cash <= 100){
    console.log("puedes regalar chocolates");
}else if (cash>100 && cash<= 250){
    console.log("puedes regalar flores");
}else if (cash>250){
    console.log("puedes regalar un anillo, congrats!");
}
console.log("adios");