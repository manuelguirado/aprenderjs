    function obtenterinfocuenta(user,password){
        if ( user  === "admin" && password === "123456") {
            return {
                nombre: "Administrador",
                cuenta: "1234567890",
                saldo: 1000000
            };
        }else{
            console.log("Usuario o contraseña incorrectos");
            return 1;
        }
    }
    function obtenersaldo(cuenta){
        console.log("Tu saldo es :" + cuenta.saldo);
        return cuenta.saldo;
        

    }
    function retirarDinero(cuenta){
        let retirar = parseInt(prompt("¿Cuánto dinero deseas retirar?"));
        
        if ( retirar > cuenta.saldo ) {
            console.log("Saldo insuficiente");
            return 1;

        }else{
            cuenta.saldo -= retirar;
            console.log("retiraste €:" + retirar + ", tu nuevo saldo es :" + cuenta.saldo);
        }   
    }
    function depositarDinero(cuenta){
        let depositarDinero = parseInt(prompt("¿Cuánto dinero deseas depositar?"));
            cuenta.saldo += depositarDinero;
        console.log("depositaste €:" + depositarDinero  + ", tu nuevo saldo es :" + cuenta.saldo);

    }
    let user = prompt("Ingrese su nombre de usuario:");
    let password = prompt("Ingrese su contraseña:");
    let cuenta = obtenterinfocuenta(user, password);
    let salir  = false;

    while (!salir) {
        alert("1- depositar dinero\n2- retirar dinero\n3 obtener info cuenta  \n4 obtener saldo \n5 salir");
        let opcion = parseInt(prompt("Elija una opción:"));

    switch (opcion) {
        case 1:
            depositarDinero(cuenta);
            break;
        case 2:
            retirarDinero(cuenta);
            break;
        case 3:
            console.log(cuenta);
            break;
        case 4:
            obtenersaldo(cuenta);
            break;
        case 5:
            console.log("Gracias por utilizar nuestra app");
            salir = true;
            break;
        default:
            console.log("Opción no válida");
            salir = true;
            break;
        
        
    } 

    if (!salir) {
        let continuar = confirm("¿Desea salir de la app?");
        if (!continuar) {
            salir = true;
            console.log("Gracias por utilizar nuestra app");
        }

    }
    }
