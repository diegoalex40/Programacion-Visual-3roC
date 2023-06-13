// STRINGS EN TS

// Strings con comillas simples

let string1 = 'Ejemplo de string con comillas simples';
let string2 = 'Uso de "Comillas dobles" dentro de las comilla simples';
//let string3 = 'Uso de 'Comillas dobles' dentro de las comilla simples'
console.log(string1);
console.log(string2);

// Strings con comillas dobles

let string3 = "Uso con comillas dobles";
let string4 = "Uso de 'comilllas simples' dentro de comillas dobles";
// let string5 = "Uso de "comilllas simples" dentro de comillas dobles";
console.log(string3);
console.log(string4);

// Strings con backticks

let string5 = `Uso de Backtick`;
let string6 = `Uso de Backtick
                                 dentro de un solo string
             se puede mantener varias lineas
                                                  son el uso de espacios
`;
console.log(string6);

    //Concatenar con strings
    let titulo = "Concatenacion con Strings";
    let concatenado = `El titlo de esta accion es: ${titulo}`;
    console.log(concatenado);

(()=>{
      let productTitle = 'My amazing product';
      // productTitle = null;
      // productTitle = () => {};
      // productTitle = 123;
      productTitle = 'My amazing product changed';
      console.log('productTitle', productTitle);

      const productDescription = "I'm bla bla ba bla bl s asasas";
      console.log('productDescription', productDescription);

      let productPrice = 100;
      let isNew: boolean = false;

      const summary = `
        title: ${productTitle}
        description: ${productDescription}
        price: ${productPrice}
        isNew: ${isNew}
      `;

      console.log(summary);

      const myString: string = '';
})();





