let encontrarnum = (arr,num)  =>{
    for (let i = 0; i < arr.array.length; i++) {
        if (arr.array[i] === num) {
            console.log("El número " + num + " se encuentra en la posición " +i);
        }
    }
}

let array = {array: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]};
let num = parseInt(prompt("Ingrese un número para buscarlo en el array:"));
encontrarnum(array, num); 