export const examples = [
  {
    path: "/data-types",
    title: "1 Data Types & Scopes",
    description: "JavaScript has 7 data types: Number, String, Boolean, Undefined, Null, Object (including Arrays), and Symbol. Variable declarations: var (function-scoped, redeclarable), let (block-scoped, reassignable), const (block-scoped, non-reassignable).",
    code: `
      // Number
      const age = 25;
      console.log('Number:', age, typeof age);

      // String
      const name = "John";
      console.log('String:', name, typeof name);

      // Boolean
      const isStudent = true;
      console.log('Boolean:', isStudent, typeof isStudent);

      // Undefined
      let undefinedVar;
      console.log('Undefined:', undefinedVar, typeof undefinedVar);

      // Null
      const nullVar = null;
      console.log('Null:', nullVar, typeof nullVar);

      // String Conversion Examples (Common Interview Questions)
      console.log('123 + "":', 123 + "", typeof (123 + "")); // "123" string
      console.log('123 + "456":', 123 + "456"); // "123456"
      console.log('"123" - 1:', "123" - 1, typeof ("123" - 1)); // 122 number
      console.log('"123" + 1:', "123" + 1); // "1231"
      console.log('Number("123"):', Number("123"), typeof Number("123")); // 123 number
      console.log('+"123":', +"123", typeof +"123"); // 123 number
      
      // Variable Declaration Differences:
      // 1. var - function scoped, can be redeclared, hoisted
      var x = 10;
      var x = 20; // OK - can be redeclared
      console.log('var example:', x);

      // 2. let - block scoped, cannot be redeclared
      let y = 10;
      // let y = 20; // Error - cannot redeclare
      {
        let y = 20; // OK - different block scope
        console.log('let in block:', y); // 20
      }
      console.log('let outside block:', y); // 10

      // 3. const - block scoped, cannot be reassigned
      const z = 10;
      // z = 20; // Error - cannot reassign
      // But objects and arrays can be modified
      const arr = [1, 2];
      arr.push(3); // OK - modifying array content
      console.log('const array modified:', arr);`
  },
  {
    path: "/operators-conditions",
    title: "1.2 Operators and Conditions",
    description: "Learn about JavaScript operators, comments, and conditional statements with common interview questions.",
    code: `
      // This is a single line comment

      /* This is a 
         multiline comment
         spanning multiple lines */

      // Arithmetic Operators
      console.log('Addition:', 5 + 3);        // 8
      console.log('Subtraction:', 5 - 3);     // 2
      console.log('Multiplication:', 5 * 3);  // 15
      console.log('Division:', 6 / 2);        // 3
      console.log('Modulus:', 7 % 3);         // 1
      console.log('Exponent:', 2 ** 3);       // 8

      // Comparison Operators
      console.log('Equal value:', 5 == '5');           // true
      console.log('Strict equal:', 5 === '5');         // false
      console.log('Not equal:', 5 != '6');            // true
      console.log('Strict not equal:', 5 !== '5');    // true
      console.log('Greater than:', 6 > 5);            // true
      console.log('Less than or equal:', 5 <= 5);     // true

      // Logical Operators
      console.log('AND:', true && false);     // false
      console.log('OR:', true || false);      // true
      console.log('NOT:', !true);             // false

      // Interview Question: Truthy vs Falsy
      console.log('Truthy/Falsy values:');
      console.log('Empty string:', Boolean(''));     // false
      console.log('Zero:', Boolean(0));             // false
      console.log('Null:', Boolean(null));          // false
      console.log('Undefined:', Boolean(undefined)); // false
      console.log('Non-empty string:', Boolean('hello')); // true
      console.log('Number:', Boolean(42));          // true

      // If-else condition
      const age = 20;
      if (age >= 18) {
        console.log('Adult');
      } else {
        console.log('Minor');
      }

      // else-if ladder
      const score = 85;
      if (score >= 90) {
        console.log('Grade: A');
      } else if (score >= 80) {
        console.log('Grade: B');
      } else {
        console.log('Grade: C');
      }

      // Ternary Operator
      const isRaining = true;
      const action = isRaining ? 'Take umbrella' : 'Wear sunglasses';
      console.log('Action:', action);

      // Interview Question: Multiple conditions with ternary
      const num = 0;
      const message = num > 0 ? 'Positive' 
                   : num < 0 ? 'Negative' 
                   : 'Zero';
      console.log('Number is:', message);

      // Switch statement
      const day = 'Monday';
      switch (day) {
        case 'Monday':
          console.log('Start of week');
          break;
        case 'Friday':
          console.log('Weekend coming');
          break;
        default:
          console.log('Regular day');
      }

      // Interview Question: Short-circuit evaluation
      const user = null;
      const displayName = user?.name || 'Guest';
      console.log('Welcome:', displayName);

      /* MDN Documentation References:
         - Operators: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators
         - Conditional Statements: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling
         - Ternary Operator: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
      */`
  },
  {
    path: "/arrays",
    title: "2 Array Methods",
    description: "Learn about powerful array methods in JavaScript.",
    code: `
            // Example of map, filter, and reduce
            const numbers = [1, 2, 3, 4, 5];

            // Using map to double each number
            const doubled = numbers.map(num => num * 2);
            console.log('Doubled:', doubled);

            // Using filter to get even numbers
            const evens = numbers.filter(num => num % 2 === 0);
            console.log('Even numbers:', evens);

            // Using reduce to get sum
            const sum = numbers.reduce((acc, curr) => acc + curr, 0);
            console.log('Sum:', sum);`
  }
]; 