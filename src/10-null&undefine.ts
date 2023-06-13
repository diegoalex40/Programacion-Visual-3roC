// Null y Undefine

let myVar   = null;         // Tipo Any
let otraVar = undefined;    // Tipo Any o Object
console.log("type of otraVar: ", typeof(otraVar), "Type of myVar: ",typeof(myVar));


let myNull: null = null;    // Tipo Null
let myUndefined: undefined = undefined;  // Tipo Undefined
console.log("type of myNull: ",typeof(myNull),"type of myUndefined: ", typeof(myUndefined));

let myNumber: number|null = null;
console.log("type of myNumber: ",typeof(myNumber));
console.log("myNumber: ",myNumber);

myNumber = 60;
console.log("type of myNumber: ",typeof(myNumber));
console.log("myNumber: ",myNumber);


let myString: string| undefined = undefined;
console.log("type of myString: ",typeof(myString));
console.log("myString: ",myString);

myString = "hola TS";
console.log("type of myString: ",typeof(myString));
console.log("myString: ",myString);
