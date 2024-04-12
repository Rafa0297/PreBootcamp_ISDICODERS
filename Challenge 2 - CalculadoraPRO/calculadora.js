const calculadoraPro = () =>{

    console.log('Bienvenido a la calculadora!')

    let num1 = parseFloat(prompt('Escriba el primer numero:'));

    let num2 = parseFloat(prompt('Escriba el segundo numero o deje el campo vacío para calcular la raiz cuadrada del primer numero:'));
    

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
        const calcular = (a,b) =>{
            let suma = a + b;
    
            let resta = a - b;
    
            let multiplicacion = a * b;
    
            let division;
            if (b === 0){
                division = "No es posible dividir entre 0";
            } else {
              division = (a / b).toFixed(3);
            }
    
            let resultado = [];
    
            resultado.push(suma.toFixed(3));
            resultado.push(resta.toFixed(3));
            resultado.push(multiplicacion.toFixed(3));
            resultado.push(division);
    
            return {
                'El resultado para la suma es': `${a} + ${b} = ${resultado[0]}`,
                'El resultado para la resta es': `${a} - ${b} = ${resultado[1]}`,
                'El resultado para la multiplicacion es': `${a} * ${b} = ${resultado[2]}`,
                'El resultado para la division es': `${a} / ${b} = ${resultado[3]}`
            };
        
        }
        console.log(calcular(num1,num2));
        return repetirOperacion();
    }


} 
calculadoraPro();
