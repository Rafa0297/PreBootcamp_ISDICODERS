const calculadoraPro = () => {
    console.log('Bienvenido a la calculadora!')

    const obtenerNumeros = () => {
        const entradaNumeros = prompt('Ingrese números separados por coma (,):');
        const numeros = entradaNumeros.split(',').map(numero => parseFloat(numero.trim()));
        return numeros;
    };

    const numeros = obtenerNumeros();

    if (numeros.some(isNaN) || numeros.some(num => num === '')) {
        alert('Alguno de los valores no es válido. Por favor, ingrese números válidos.');
        return calculadoraPro();
    }

    const repetirOperacion = () => {
        const otraOperacion = prompt('¿Desea realizar otra operación? (Si/No): ').toLowerCase();
        if (otraOperacion === 'si') {
            calculadoraPro();
        } else if (otraOperacion === 'no') {
            alert('Gracias por utilizar la calculadora.');
            console.log('Gracias por utilizar la calculadora.');
        } else {
            alert('Por favor introduce si o no.');
            repetirOperacion();
        }
    };

    const calcular = (...numeros) => {
        let suma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
        let resta = numeros.reduce((acumulador, numero) => acumulador - numero);
        let multiplicacion = numeros.reduce((acumulador, numero) => acumulador * numero, 1);
        let division = numeros.some(num => num === 0)
            ? "No es posible dividir entre 0"
            : numeros.reduce((acumulador, numero) => acumulador / numero);

        let resultado = {
            'El resultado para la suma es': suma.toFixed(3),
            'El resultado para la resta es': resta.toFixed(3),
            'El resultado para la multiplicacion es': multiplicacion.toFixed(3),
            'El resultado para la division es': division.toFixed(3)
        };

        return resultado;
    };

    console.log(calcular(...numeros));
    return repetirOperacion();
};

calculadoraPro();
