console.group('Objects');
{
  /*
  Objects are structures that can contain properties.
  Each property has it's name and value.
  Property can also be called key-value pairs, where key is the property name and value is the property value
  */
  const car = {
    brand: 'Opel', // brand is the property name and 'Opel' is the property value
    model: 'Astra', // model is key and 'Astra' is the value
    year: 2005,
    color: 'Black',
    engineVolume: 2.0,
    crashed: true,
    fueltype: 'dysel',
  };

  console.group('Property usage/access');
  {
    /*
      You can access/use object's properties in two ways:
        using the '.' operator after variable which refers to an object, example:
          variableWhichRefersToObject.propertyName;
        using the '[]' operator after variable which refers to an object, example:
          variableWhichRefersToObject['propertyName'];
        
        Most often you should use the '.' operator syntax. 
        Square bracket syntax is used when you have to dynamicly use/access properties.
          Dynamic property usage is not a begginer's concept, but we should know the existence of this syntax for further learning.
    */
    console.log(car.brand + ' ' + car.model);
    console.log(car['brand'] + ' ' + car['model']);
    // Imagine we have an user interface, where we can select what property we need to print
    // The user selection is oftenly (almost always) is passed through variable, like so:
    const propertyToDisplay = 'brand';
    // Then we have to use the value which is in the variable, and NOT the variable name itself.
    // If we try to use the dot operator, we will not get the value, because property is searched in the object by the variable name
    console.log(car.propertyToDisplay); // results in undefined, because the property name 'propertyToDisplay' was not found in the object 'car'
    // Therefore for dynamic property usage/access we use the square bracket '[]' operator, like this:
    console.log(car[propertyToDisplay]); // results in car.brand -> 'Opel'
  }
  console.groupEnd();

  console.group('Property creation/change');
  {
    /*
      Properties are changed using '=' operator, similary like assigning variables.
      If we try to assing a property value by not existing property name it created a new property
      If property name already exists in the object, it simply rewrites the value
    */

    car.model = 'Vectra'; // property model has changed/overwriten to 'Vectra', old value 'Astra' is lost and unreachable
    console.log(car);
    car['color'] = 'Red'; // square bracket syntax works the same, and overwrited the value
    console.log(car);
    car.price = 1200; // in this case, property 'price' does not exist in object 'car', so javaScript engine will create that key-value pair.
    console.log(car);
  }
  console.groupEnd();

  console.group('Object property assignment shorthand');
  {
    /*
      Property assignment rule:
          At the time of object assignment, there is possible to declare key-value pairs by one word, but...
        that word must be an accesible variable in the object creation scope. In this case, property will be
        created by the variable name, and it's value will be the value which was in the variable.
    */

    // Here we define variables in the same scope, before the object property assignment shorthand.
    // P.S.: this variable assignment below is a synthetic example. In program development, we have these variables passed by other function/module
    const title = 'wardrobe';
    const weight = 50;
    const height = 200;
    const width = 280;
    const depth = 80;

    // And now we can use those variables to declare object with properties by the variable names
    const furniture = {  //  →  const furniture = {   →    const furniture = { 
      title,             //  →    title: title,       →      title: 'wardrobe',    
      weight,            //  →    weight: weight,     →      weight: 50,   
      height,            //  →    height: height,     →      height: 200,  
      width,             //  →    width: width,       →      width: 280,       
      depth              //  →    depth: depth,       →      depth: 80,    
    };                   //  →  };                    →    };      
    console.log(furniture);
  }
  console.group();

  console.group('Object property assignment shorthand usage for logging data');
  {
    /* 
      Debugging is a crucial process of program development. People make mistakes, and that's completely normal.
      When debugging, we have to print out variables, so we can understand and find problems in code.
      Printing variables and comments to console, can be painful and time inefficient. 
      Better aproach to rapidly print out variables is using property assignment shorthand.
      It sound much harder than it is, just check out the example:
    */
    // Let it be that, we have three variables in the working scope:
    const a = 8;
    const b = 9;
    const c = 10;
    // Lets pretend we dont know the values of these variables, because they were sent to us by another function/module
    // Best way is to print them in console:
    console.log(a, b, c);
    // We can see the values, but when the variables ar more complex, and quantity of variable increases, we would like
    // to write logs for ourself for readability like so:
    console.log('a:', a, '; ', 'b:', b, '; ', 'c:', c, ';');
    // Now our variable checking is clear, but writing this kind of logs take up time, which is most valueble currency in this world
    // Therefore we can use the object assignment shorthand in a classy manner like this:
    console.log({ a, b, c });
    // As said before, easier done then said ;)
  }
  console.groupEnd();
}
console.groupEnd();
