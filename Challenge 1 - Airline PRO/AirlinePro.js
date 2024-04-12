const flights = [
    { id: 0, to: "New York", from: "Barcelona", cost: 700, layover: false },
    { id: 1, to: "Los Angeles", from: "Madrid", cost: 1100, layover: true },
    { id: 2, to: "Paris", from: "Barcelona", cost: 210, layover: false },
    { id: 3, to: "Roma", from: "Barcelona", cost: 150, layover: false },
    { id: 4, to: "London", from: "Madrid", cost: 200, layover: false },
    { id: 5, to: "Madrid", from: "Barcelona", cost: 90, layover: false },
    { id: 6, to: "Tokyo", from: "Madrid", cost: 1500, layover: true },
    { id: 7, to: "Shangai", from: "Barcelona", cost: 800, layover: true },
    { id: 8, to: "Sydney", from: "Barcelona", cost: 150, layover: true },
    { id: 9, to: "Tel-Aviv", from: "Madrid", cost: 150, layover: false },
  ];

  const userName = prompt('Bienvenido a la aerolínea ¿Cuál es tu nombre?');

  console.log(`Hola ${userName} estos son los vuelos disponibles:`);
    
    let sumaCostes = 0;
    let contEscala = 0;

    for (let i = 0; i < flights.length; i++){

        if (flights[i].layover == true){
            console.log(`El vuelo con origen ${flights[i].from}, y destino ${flights[i].to} tiene un coste de ${flights[i].cost}€ y SI realiza escala`);
            contEscala++;
        } else {
            console.log(`El vuelo con origen ${flights[i].from}, y destino ${flights[i].to} tiene un coste de ${flights[i].cost}€ y NO realiza escala`);
        }
    sumaCostes += flights[i].cost
    }
    let costeMedio = sumaCostes / flights.length;

    // El usuario verá el coste medio de los vuelos
    console.log(`El coste medio de los vuelos es ${costeMedio} y hay ${contEscala} vuelos que hacen escala`);

    // Ultimos 5 vuelos
    console.log(`Los ultimos 5 vuelos del dia viajan a ${flights[5].to}, ${flights[6].to}, ${flights[7].to}, ${flights[8].to} y ${flights[9].to}`);

const userType = prompt('Por favor indique si es ADMIN o USER').toLowerCase();

const addFlight = () =>{
    console.log('Se va a añadir su vuelo...')
    let addingFlights = true;
    while (addingFlights && flights.length<=15){
        let newFlight = { 
            id: flights.length,
            to: prompt('Introduce el nuevo destino:'), 
            from: prompt('Introduce el nuevo origen:'), 
            cost: parseInt(prompt('Introduce el costo del vuelo:')),
            layover: prompt('¿Realiza escala? (Si/No): ') === 'si'
    };
    flights.push(newFlight);
    console.log('Vuelo añadido.');
    addingFlights = prompt('¿Desea añadir otro vuelo? (Si/No): ').toLowerCase() === 'si';
    if (flights.length === 16){
        alert('No se pueden agregar mas vuelos');
    }  
}
console.log(flights);
}

const deleteFlightById = () =>{
    const idToDelete = parseInt(prompt('Inserte el id del vuelo a eliminar: '));

    const indexToDelete = flights.findIndex(flight => flight.id === idToDelete);

    if (indexToDelete !== -1){
        flights.splice(indexToDelete,1);
        console.log(`Elemento con id: ${indexToDelete} eliminado`);
        console.log(flights);
    
        let continueDeleting = prompt('¿Desea eliminar otro vuelo? (Si/No):').toLowerCase();
        if (continueDeleting === 'si'){
            deleteFlightById();
        } else {
            let continueAdmin = confirm('¿Desea realizar otra operación?');
            if (continueAdmin === true){
                isAdmin();
            } else if (continueAdmin !== true) {
                console.log('Gracias por usar la aplicacion de la aerolínea');
                return alert('Hasta Pronto!')
            }
        }
    } else {
    alert(`Elemento no encontrado con id: ${idToDelete}, ingrese un id valido`);
    console.log(`Elemento no encontrado con id: ${idToDelete}`);
    return deleteFlightById();
    }
}

const interfaceAdmin = () =>{
    console.log(`Modo ADMIN activado, bienvenido ${userName}`);

    const addFlights = prompt('¿Desea añadir vuelos? (Si/No): ').toLowerCase();
    if (addFlights === 'si'){
        addFlight();
    }

    const deleteFlights = prompt('¿Desea eliminar un vuelo? (Si/No): ').toLowerCase();
    if (deleteFlights === 'si'){
       deleteFlightById();
    } else{
        console.log('Gracias por utilizar la app de la aerolinea')
        return alert('Hasta Pronto!');
    }
}

const interfaceUser = () =>{

    let priceFromUser = parseFloat(prompt('Indique el maximo precio que desea pagar:'));
    
    let filteredFligths = flights.filter(function(flight) {
        return flight.cost <= priceFromUser;
    });
    console.log(`Los vuelos con precio menor o igual que €${priceFromUser} son:`);
    filteredFligths.forEach(function(flight) {
        console.log("Vuelo " + flight.id + " - Destino: " + flight.to + " - Precio: $" + flight.cost);
    });

    alert('Los vuelos disponibles por debajo de ese monto se encuentran en la consola.');

    let continueUser = confirm('¿Desea realizar otra operación?');
    if (continueUser === true){
        isAdmin();
    } else if (continueUser !== true) {
        console.log('Gracias por usar la aplicacion de la aerolínea');
        return alert('Hasta Pronto!');
    }
}

const isAdmin = () =>{

    if (userType === 'admin' ){
        return interfaceAdmin();
    } else if (userType === 'user'){
        return interfaceUser();
    } else {
        alert('Por favor indroduce "admin" o "user"')
    }
}
isAdmin();