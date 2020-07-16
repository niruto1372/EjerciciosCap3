let antiguedad2=+prompt("Ingresa tu antiguedad en la empresa:");

switch(antiguedad2){
    case 1: 
        console.log(`se te otorga un bono de: $100`);
        break;
    case 2: 
        console.log(`se te otorga un bono de: $200`);
        break; 
    case 3: 
        console.log(`se te otorga un bono de: $300`);
        break;
    case 4: 
        console.log(`se te otorga un bono de: $400`);
        break;
    case 5: 
        console.log(`se te otorga un bono de: $500`);
        break;                              
    default:
        console.log(`se te otorga un bono de: $1000`);
        break;
}
    
