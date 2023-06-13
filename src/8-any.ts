let variableRara: any;

variableRara = 5;
variableRara ="raro";
variableRara = true;
variableRara = {};
variableRara = [];
variableRara = null;
variableRara = undefined;

// Tratar a any como un tipo de dato especifico.
// convertir Any a un string
variableRara = "Ejemplo de Stirng";
const ejemploAny = (variableRara as string).toLowerCase();
console.log(variableRara);

// convertir Any a un number
variableRara = 12,111;
const ejemploNumero = (<number>variableRara).toFixed(1);
console.log(variableRara);



