
monto=+prompt("Cual es el monto que vas a recibir?");
if(monto>50000){
    console.log("Puedes comprarte: una televisión, un modular, tres pares de zapatos, cinco camisas y cinco pantalones. ");
}else if(monto<=50000 && monto>=20000){
    console.log("Puedes comprarte: una grabadora, tres pares de zapatos,    cinco camisas y cinco pantalones.");
}else if(monto<20000 && monto>=10000){
    console.log("Puedes comprarte: dos pares de zapatos, tres camisas y tres     pantalones.");
}else if(monto<10000){
    console.log("Puedes comprarte: un par de zapatos, dos camisas y dos pantalones.");
}