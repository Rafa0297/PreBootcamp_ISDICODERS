const calculadoraPro = () =>{

    console.log('Bienvenido a la calculadora!')

    let num1 = parseFloat(prompt('Escriba el primer numero:'));

    let num2 = parseFloat(prompt('Escriba el segundo numero o deje el campo vacío para calcular la raiz cuadrada del primer numero:'));

    let arrayDeNumeros = [num1,num2];

    const agregarNumero = () =>{
        let numeroNuevo = parseFloat(prompt('Escriba un numero:'));
        if (numeroNuevo !== null){
            arrayDeNumeros.push(numeroNuevo);

            const continuar2 = confirm('Desea añadir mas valores? (Si/No)');
            if (continuar2){
                agregarNumero();  
        
            } else{
                alert ('cerrando...');
            }
        } else {
            alert('Operacion Cancelada');
        }
        console.log(arrayDeNumeros);
        return arrayDeNumeros;
    };

    const continuar = confirm('Desea añadir mas valores? (Si/No)');
    if (continuar){
        agregarNumero();

    } else{
        alert ('cerrando...')
    }
    

    const repetirOperacion = () =>{
        let otraOperacion = prompt('¿Desea realizar otra operación? (Si/No): ');
        otraOperacion = otraOperacion.toLowerCase();
        if (otraOperacion === 'si'){
            calculadoraPro();
        } else if (otraOperacion === 'no'){
            alert('Gracias por utilizar la calculadora.')
            console.log('Gracias por utilizar la calculadora.');
        } else if ((otraOperacion === null)||(otraOperacion!== 'si'&&'no')) {
            alert('Por favor introduce si o no.');
            repetirOperacion();
        }
    }

    if (isNaN(num1) || num1 === ''){
       alert('el primer valor no es valido, por favor introduzca un numero válido');
       return calculadoraPro();
    }
    if (num2 === '' || isNaN(num2)){
        if (num1 >= 0){
            let raizCuadrada = Math.sqrt(num1).toFixed(3);
            alert('La raiz cuadrada del primer numero es: ' + raizCuadrada);
            console.log('La raiz cuadrada del primer numero es: ' + raizCuadrada);
        }else {
            alert('No se puede calcular raiz cuadrada porque es negativo');
            console.log('No se puede calcular raiz cuadrada porque es negativo');
        }
        return repetirOperacion();
    } else {
        const calcular = (...arrayDeNumeros) =>{
            let suma = arrayDeNumeros.reduce((acumulador, numero) => acumulador + numero, 0);
    
            let resta = arrayDeNumeros.reduce((acumulador, numero) => acumulador - numero);
    
            let multiplicacion = arrayDeNumeros.reduce((acumulador, numero) => acumulador * numero, 1);
    
            let division =arrayDeNumeros.some(num => num === 0)
                    ? "No es posible dividir entre 0"
                    : arrayDeNumeros.reduce((acumulador, numero) => acumulador / numero);
    
                    let resultado = {
                        'El resultado para la suma es': suma.toFixed(3),
                        'El resultado para la resta es': resta.toFixed(3),
                        'El resultado para la multiplicacion es': multiplicacion.toFixed(3),
                        'El resultado para la division es': division.toFixed(3)
                    }
    
            return resultado;
        
        }
        console.log(calcular(...arrayDeNumeros));
        return repetirOperacion();
    }

} 
calculadoraPro();
