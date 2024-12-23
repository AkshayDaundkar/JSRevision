export const exampleGroups = {
  "Basic JS": {
    id: "basic",
    items: [
      {
        path: "/data-types",
        title: "1.0 Data Types & Scopes",
        description: "JavaScript has 7 data types: Number, String, Boolean, Undefined, Null, Object (including Arrays), and Symbol. Variable declarations: var (function-scoped, redeclarable), let (block-scoped, reassignable), const (block-scoped, non-reassignable).",
code: `// Number
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
        title: "1.1 Operators and Conditions",
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
        path: "/loops-and-strings",
        title: "1.2 Loops and Strings",
        description: "Comprehensive guide to JavaScript loops and string manipulation, covering for loops, while loops, do-while loops, string methods, and practical examples.",
        code: `
// 1. Basic for loop with loop updation
console.log('Basic for loop with updation:');
for (let i = 0; i < 3; i++) {
  console.log('Iteration:', i);
}

// 2. Calculating sum from 1 to n
const n = 5;
let sum = 0;
for (let i = 1; i <= n; i++) {
  sum += i;
}
console.log('Sum from 1 to', n, ':', sum);

// 3. Block scope demonstration in loops
for (let i = 0; i < 2; i++) {
  const blockVar = \`Value \${i}\`;
  console.log('Inside block:', blockVar);
}
// console.log(blockVar); // Would throw error - not accessible

// 4. Preventing infinite loops
let counter = 0;
while (counter < 3) {
  console.log('Counter:', counter);
  counter++; // Important: update condition
  if (counter === 3) break; // Safety exit
}

// 5. Do-while loop example
let x = 0;
do {
  console.log('Do-while execution:', x);
  x++;
} while (x < 2);

// 6. String iteration with for loop
const text = "Hello";
console.log('String iteration:');
for (let i = 0; i < text.length; i++) {
  console.log(\`Character at \${i}: \${text[i]}\`);
}

// 7. Manual string length calculation
let strLength = 0;
for (let char of "JavaScript") {
  strLength++;
}
console.log('Calculated string length:', strLength);

// 8. For-in loop with object
const person = {
  name: 'John',
  age: 30,
  city: 'New York'
};
for (let prop in person) {
  console.log(\`\${prop}: \${person[prop]}\`);
}

// 9. Print even numbers
console.log('Even numbers:');
for (let i = 0; i <= 6; i += 2) {
  console.log(i);
}

// 10. Number guessing game
const targetNum = 7;
let guess = 5;
while (guess !== targetNum) {
  console.log('Guessing...', guess);
  guess++;
}
console.log('Found target:', targetNum);

// 11. String creation and methods
const str1 = "Hello";
const str2 = 'World';
const str3 = \`Template literal: \${str1}\`;

// 12. String character access
console.log('charAt(0):', str1.charAt(0));
console.log('Index access:', str1[1]);

// 13. Template literals with expressions
const a = 5, b = 10;
console.log(\`Sum of \${a} and \${b} is \${a + b}\`);

// 14. String manipulation methods
const sentence = "JavaScript is amazing";
console.log('Original:', sentence);
console.log('Uppercase:', sentence.toUpperCase());
console.log('Slice:', sentence.slice(0, 10));
console.log('Split:', sentence.split(' '));

// 15. String concatenation
const firstName = "John";
const lastName = "Doe";
console.log('Concatenated:', firstName + ' ' + lastName);

// 16. Username creation
const fullName = "John Smith";
const userId = "123";
const username = \`\${fullName.toLowerCase().replace(' ', '_')}_\${userId}\`;
console.log('Generated username:', username);`
      },
      {
        path: "/arrays-comprehensive",
        title: "1.3 Array Operations",
        description: "A comprehensive guide to JavaScript arrays covering creation, access, manipulation, iteration, and common array methods. Includes practical examples of array operations like calculating sums, averages, copying, splicing and more.",
        code: `
// 1. Arrays vs Multiple Variables
const score1 = 85, score2 = 90, score3 = 95;  // Multiple variables - not ideal
const scores = [85, 90, 95];  // Array approach - better!
console.log('Using array is more efficient:', scores);

// 2. Arrays with Multiple Data Types
const mixedArray = [
  'John',               // string
  25,                   // number
  true,                 // boolean
  { city: 'New York' }, // object
  [1, 2, 3]            // nested array
];
console.log('Array with different types:', mixedArray);

// 3. Array Access and Properties
const fruits = ['apple', 'banana', 'orange'];
console.log('Array length:', fruits.length);
console.log('First element (index 0):', fruits[0]);
console.log('Last element:', fruits[fruits.length - 1]);

// 4. Modifying Array Elements
fruits[1] = 'grape';  // Changing value at index 1
console.log('Modified array:', fruits);

// 5. Array Iteration with Index Tracking
console.log('Array iteration with index:');
for (let i = 0; i < fruits.length; i++) {
  console.log(\`Index \${i}: \${fruits[i]}\`);
}

// 6. Calculating Sum and Average
const prices = [10, 20, 30, 40, 50];
let sum = 0;
for (let i = 0; i < prices.length; i++) {
  sum += prices[i];
}
const average = sum / prices.length;
console.log('Sum:', sum);
console.log('Average:', average);

// 7. Practical Example - Discount Calculation
const originalPrices = [100, 200, 300];
const discountedPrices = originalPrices.map(price => price * 0.9);
console.log('Original prices:', originalPrices);
console.log('After 10% discount:', discountedPrices);

// 8. Value Copying in Arrays
const original = [1, 2, 3];
const reference = original;        // Creates reference
const copy = [...original];        // Creates new copy
original[0] = 100;
console.log('Original:', original);
console.log('Reference (changes):', reference);
console.log('Copy (unchanged):', copy);

// 9. Array Methods - Modifying Arrays
const numbers = [1, 2, 3];
numbers.push(4);                   // Add to end
numbers.unshift(0);                // Add to start
console.log('After push/unshift:', numbers);

// 10. Array Concatenation
const arr1 = [1, 2];
const arr2 = [3, 4];
const combined = arr1.concat(arr2);
console.log('Concatenated arrays:', combined);

// 11. Slice Method
const letters = ['a', 'b', 'c', 'd', 'e'];
const sliced = letters.slice(1, 3);  // Extract elements from index 1 to 2
console.log('Sliced array:', sliced);

// 12. Splice Method - Adding and Removing
const colors = ['red', 'green', 'blue'];
// Remove 1 element at index 1 and add 'yellow'
colors.splice(1, 1, 'yellow');
console.log('After splice:', colors);

// 13. Array Manipulation Examples
const tasks = ['Study', 'Work', 'Exercise'];
// Remove last element
tasks.pop();
// Add new elements at specific position
tasks.splice(1, 0, 'Lunch', 'Rest');
console.log('Final tasks array:', tasks);

// 14. In-place Array Methods
const nums = [1, 2, 3, 4, 5];
nums.reverse();                    // Reverses in place
console.log('Reversed:', nums);
nums.sort((a, b) => b - a);       // Sorts in place (descending)
console.log('Sorted descending:', nums);`
      },
      {
        path: "/functions",
        title: "1.4 Functions and Methods",
        description: "Comprehensive guide to modern JavaScript array methods including arrow functions, forEach, map, filter, reduce with practical examples and common use cases.",
        code: `
// Arrow Functions
const add = (a, b) => a + b;
console.log('Arrow function addition:', add(5, 3));

const greet = name => \`Hello \${name}\`;
console.log('Single parameter arrow:', greet('John'));

const complexCalc = (x, y) => {
  const sum = x + y;
  return sum * 2;
};
console.log('Multi-line arrow:', complexCalc(2, 3));

// forEach Loop
const fruits = ['apple', 'banana', 'orange'];
console.log('forEach example:');
fruits.forEach((fruit, index) => {
  console.log(\`\${index}: \${fruit}\`);
});

// Practice: Calculate total price
const prices = [10, 20, 30, 40];
let total = 0;
prices.forEach(price => total += price);
console.log('Total price:', total);

// map Method
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log('Mapped (doubled):', doubled);

// Practice: Convert temperatures
const celsius = [0, 10, 20, 30];
const fahrenheit = celsius.map(c => (c * 9/5) + 32);
console.log('Temperature conversion:', fahrenheit);

// filter Method
const scores = [75, 85, 95, 65, 55, 45];
const passing = scores.filter(score => score >= 70);
console.log('Passing scores:', passing);

// Practice: Filter even numbers
const mixedNums = [1, 2, 3, 4, 5, 6, 7, 8];
const evenNums = mixedNums.filter(num => num % 2 === 0);
console.log('Even numbers:', evenNums);

// reduce Method
const values = [1, 2, 3, 4, 5];
const sum = values.reduce((acc, curr) => acc + curr, 0);
console.log('Sum using reduce:', sum);

// Practice: Find maximum value
const nums = [10, 5, 25, 8, 30, 15];
const max = nums.reduce((max, curr) => curr > max ? curr : max, nums[0]);
console.log('Maximum value:', max);

// Chaining array methods
const transactions = [100, -50, 25, -120, 75];
const positiveSum = transactions
  .filter(amount => amount > 0)
  .reduce((sum, amount) => sum + amount, 0);
console.log('Sum of positive transactions:', positiveSum);

// Practice: Transform and filter data
const products = [
  { name: 'Laptop', price: 1000 },
  { name: 'Phone', price: 500 },
  { name: 'Tablet', price: 300 }
];
const expensiveProducts = products
  .filter(product => product.price > 400)
  .map(product => product.name);
console.log('Expensive products:', expensiveProducts);`
      },
      {
        path: "/dom",
        title: "1.5 DOM Manipulation",
        description: "Comprehensive guide to DOM manipulation covering attributes, styles, inserting and deleting elements, with advanced interview topics like event delegation, virtual DOM, and performance optimization.",
        code: `
// 1. DOM Attributes and Basic Manipulation
// Getting and setting attributes
const img = document.createElement('img');
img.setAttribute('src', 'image.jpg');
img.setAttribute('alt', 'Sample Image');
console.log('Image src:', img.getAttribute('src'));

// Class manipulation
const div = document.createElement('div');
div.classList.add('highlight');
div.classList.toggle('active');
console.log('Has class:', div.classList.contains('highlight'));

// Data attributes
const button = document.createElement('button');
button.dataset.userId = '123';
console.log('Data attribute:', button.dataset.userId);

// 2. DOM Styling and Performance
const element = document.createElement('div');

// Batch DOM updates for better performance
requestAnimationFrame(() => {
  element.style.cssText = \`
    background-color: blue;
    color: white;
    padding: 10px;
    transform: translateX(100px);
  \`;
});

// Using document fragment for bulk insertions
function createManyElements(count) {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < count; i++) {
    const div = document.createElement('div');
    div.textContent = \`Item \${i}\`;
    fragment.appendChild(div);
  }
  return fragment;
}

// 3. Advanced DOM Traversal
function findClosestParent(element, selector) {
  while (element && !element.matches(selector)) {
    element = element.parentElement;
  }
  return element;
}

// 4. WeakMap for DOM Node Storage
class DOMStore {
  constructor() {
    this.store = new WeakMap();
  }
  
  set(element, data) {
    this.store.set(element, data);
  }
  
  get(element) {
    return this.store.get(element);
  }
  
  has(element) {
    return this.store.has(element);
  }
  
  remove(element) {
    this.store.delete(element);
  }
}

// 5. DOM Traversal Methods
function getAllChildNodes(element) {
  const children = [];
  function traverse(node) {
    children.push(node);
    for (let child of node.childNodes) {
      traverse(child);
    }
  }
  traverse(element);
  return children;
}

// 6. Event Delegation Implementation
function delegateEvent(parent, eventType, selector, handler) {
  parent.addEventListener(eventType, function(event) {
    const targetElement = event.target.closest(selector);
    if (targetElement && parent.contains(targetElement)) {
      handler.call(targetElement, event);
    }
  });
}

// 7. Custom Event Implementation
function createCustomEvent(eventName, detail) {
  return new CustomEvent(eventName, {
    bubbles: true,
    cancelable: true,
    detail
  });
}

// 8. DOM Mutation Observer
function observeDOM(targetNode, config = { attributes: true, childList: true, subtree: true }) {
  const callback = function(mutationsList, observer) {
    for(let mutation of mutationsList) {
      if (mutation.type === 'childList') {
        console.log('A child node has been added or removed.');
      }
      else if (mutation.type === 'attributes') {
        console.log('The ' + mutation.attributeName + ' attribute was modified.');
      }
    }
  };
  
  const observer = new MutationObserver(callback);
  observer.observe(targetNode, config);
  return observer;
}

// 9. Virtual DOM Implementation Example
function createElement(type, props, ...children) {
  return {
    type,
    props: props || {},
    children: children.flat()
  };
}

function diff(oldNode, newNode) {
  if (!oldNode) return { type: 'CREATE', newNode };
  if (!newNode) return { type: 'REMOVE' };
  if (oldNode.type !== newNode.type) return { type: 'REPLACE', newNode };
  
  const patches = [];
  
  // Compare attributes
  const oldProps = oldNode.props || {};
  const newProps = newNode.props || {};
  
  Object.keys(newProps).forEach(key => {
    if (oldProps[key] !== newProps[key]) {
      patches.push({
        type: 'PATCH_PROP',
        key,
        value: newProps[key]
      });
    }
  });
  
  // Compare children
  const maxLength = Math.max(
    oldNode.children?.length || 0,
    newNode.children?.length || 0
  );
  
  for (let i = 0; i < maxLength; i++) {
    patches.push(...diff(
      oldNode.children?.[i],
      newNode.children?.[i]
    ));
  }
  
  return patches;
}

// Practice Example: Interactive Component with Multiple Features
function createInteractiveList() {
  const list = document.createElement('ul');
  const store = new DOMStore();
  
  function addItem(text) {
    const li = document.createElement('li');
    li.textContent = text;
    store.set(li, { created: Date.now() });
    
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = () => {
      store.remove(li);
      li.remove();
    };
    
    li.appendChild(deleteBtn);
    list.appendChild(li);
  }
  
  // Add event delegation
  delegateEvent(list, 'click', 'li', function(event) {
    if (event.target !== this) return;
    console.log('Item clicked:', store.get(this));
  });
  
  // Observe changes
  const observer = observeDOM(list);
  
  return {
    list,
    addItem,
    cleanup: () => observer.disconnect()
  };
}

// Usage example
const { list, addItem, cleanup } = createInteractiveList();
addItem('Test Item');
console.log('Interactive list created:', list);`
      },
      {
        path: "/events",
        title: "1.6 JavaScript Events",
        description: "Comprehensive guide to JavaScript events covering event handling, event object properties, event listeners, and practical examples of common event patterns.",
        code: `
// Introduction to Events
/* Events are interesting changes in JavaScript code that can be 
   used to build interactive websites. They allow triggering tasks 
   based on user interactions or system conditions. */

// Basic Event Tracking Example
const trackingDiv = document.createElement('div');
trackingDiv.textContent = 'Hover over me';
trackingDiv.addEventListener('mouseover', () => {
  console.log('User interaction tracked!');
});

// Click and Double Click Events
const clickDemo = document.createElement('button');
clickDemo.textContent = 'Test Click Events';

// Single click handler
clickDemo.addEventListener('click', (event) => {
  console.log('Single click detected');
});

// Double click handler
clickDemo.addEventListener('dblclick', (event) => {
  console.log('Double click detected');
});

// Event Object Properties Demo
const eventPropsDiv = document.createElement('div');
eventPropsDiv.textContent = 'Interact to see event properties';
eventPropsDiv.addEventListener('mousedown', (event) => {
  // Demonstrating various event object properties
  console.log('Event Properties:', {
    type: event.type,
    target: event.target,
    currentTarget: event.currentTarget,
    clientX: event.clientX,
    clientY: event.clientY,
    timeStamp: event.timeStamp
  });
});

// Event Handler Management
const handlerButton = document.createElement('button');
handlerButton.textContent = 'Handler Demo';

// Adding multiple handlers
const handler1 = () => console.log('First handler');
const handler2 = () => console.log('Second handler');

handlerButton.addEventListener('click', handler1);
handlerButton.addEventListener('click', handler2);

// Removing a specific handler
setTimeout(() => {
  console.log('Removing first handler...');
  handlerButton.removeEventListener('click', handler1);
}, 3000);

// Dark/Light Mode Toggle Implementation
function createThemeToggle() {
  const button = document.createElement('button');
  let isDarkMode = false;
  
  function updateButtonState() {
    button.textContent = isDarkMode ? '🌙 Switch to Light Mode' : '🌞 Switch to Dark Mode';
  }
  
  function toggleTheme() {
    isDarkMode = !isDarkMode;
    updateButtonState();
    
    // Apply theme changes
    const newTheme = isDarkMode ? {
      background: '#333',
      color: '#fff'
    } : {
      background: '#fff',
      color: '#333'
    };
    
    console.log(\`Theme changed to \${isDarkMode ? 'dark' : 'light'} mode\`);
    console.log('New theme settings:', newTheme);
  }
  
  button.addEventListener('click', toggleTheme);
  updateButtonState();
  return button;
}

// System Events Example
window.addEventListener('resize', (event) => {
  console.log('Window resized:', {
    width: window.innerWidth,
    height: window.innerHeight
  });
});

// Create and initialize examples
const themeToggle = createThemeToggle();
console.log('Event examples initialized');`
      },
      {
        path: "/objects-and-oops",
        title: "1.7 Objects and OOP Concepts",
        description: "Comprehensive guide to Object-Oriented Programming in JavaScript covering objects, classes, inheritance, constructors, error handling and more with practical examples.",
        code: `
// 1. Objects and Methods
const person = {
  name: 'John',
  age: 30,
  greet() {
    console.log(\`Hello, I'm \${this.name}\`);
  }
};
person.greet();

// 2. Classes and Constructor
class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }

  getDetails() {
    return \`\${this.brand} \${this.model}\`;
  }

  static createSportsCar() {
    return new Car('Ferrari', 'F8');
  }
}

const myCar = new Car('Toyota', 'Camry');
console.log('Car details:', myCar.getDetails());

// 3. Inheritance
class ElectricCar extends Car {
  constructor(brand, model, batteryCapacity) {
    super(brand, model);
    this.batteryCapacity = batteryCapacity;
  }

  getDetails() {
    return \`\${super.getDetails()} - \${this.batteryCapacity}kWh\`;
  }
}

const tesla = new ElectricCar('Tesla', 'Model 3', 75);
console.log('Electric car:', tesla.getDetails());

// 4. Encapsulation with Private Fields
class BankAccount {
  #balance = 0;  // Private field

  constructor(initialBalance) {
    this.#balance = initialBalance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      return true;
    }
    return false;
  }

  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount(1000);
console.log('Balance:', account.getBalance());

// 5. Polymorphism Example
class Shape {
  calculateArea() {
    return 0;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  calculateArea() {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  calculateArea() {
    return this.width * this.height;
  }
}

const shapes = [
  new Circle(5),
  new Rectangle(4, 6)
];

shapes.forEach(shape => {
  console.log('Area:', shape.calculateArea());
});

// 6. Error Handling
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ValidationError';
  }
}

function divide(a, b) {
  try {
    if (b === 0) {
      throw new ValidationError('Cannot divide by zero');
    }
    return a / b;
  } catch (error) {
    if (error instanceof ValidationError) {
      console.log('Validation Error:', error.message);
    } else {
      console.log('Unknown Error:', error);
    }
    return null;
  } finally {
    console.log('Division operation completed');
  }
}

console.log('Division result:', divide(10, 0));

// 7. Getters and Setters
class Temperature {
  constructor(celsius) {
    this._celsius = celsius;
  }

  get fahrenheit() {
    return (this._celsius * 9/5) + 32;
  }

  set fahrenheit(value) {
    this._celsius = (value - 32) * 5/9;
  }
}

const temp = new Temperature(25);
console.log('Fahrenheit:', temp.fahrenheit);
temp.fahrenheit = 98.6;
console.log('Celsius:', temp._celsius);`
      },
      {
        path: "/callbacks-async-await",
        title: "1.8 Callbacks, Promises and Async/Await",
        description: "Comprehensive guide to asynchronous programming in JavaScript covering callbacks, promises, async/await with practical examples demonstrating real-world scenarios.",
code: `
// 1. Synchronous vs Asynchronous Code
console.log('Start - Synchronous');
for(let i = 0; i < 3; i++) {
  console.log(\`Sync operation \${i}\`);
}
console.log('End - Synchronous');

console.log('Start - Asynchronous');
setTimeout(() => console.log('Async operation 1'), 1000);
setTimeout(() => console.log('Async operation 2'), 500);
console.log('End - Asynchronous');

// 2. Parallel Execution Example
const asyncTasks = [
  new Promise(resolve => setTimeout(() => resolve('Task 1'), 2000)),
  new Promise(resolve => setTimeout(() => resolve('Task 2'), 1000)),
  new Promise(resolve => setTimeout(() => resolve('Task 3'), 1500))
];

Promise.all(asyncTasks)
  .then(results => console.log('Parallel execution results:', results));

// 3. Database Operations Simulation
class Database {
  constructor() {
    this.data = new Map();
  }

  async insert(key, value) {
    return new Promise((resolve) => {
      setTimeout(() => {
        this.data.set(key, value);
        resolve(\`Inserted \${key}\`);
      }, 500);
    });
  }

  async select(key) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const value = this.data.get(key);
        value ? resolve(value) : reject('Not found');
      }, 500);
    });
  }
}

const db = new Database();

// 4. Callback Hell Example with Database
db.insert('user1', { name: 'John' })
  .then(() => {
    db.select('user1')
      .then(user => {
        db.insert('posts1', { userId: 'user1', posts: [] })
          .then(() => {
            db.select('posts1')
              .then(posts => console.log('Nested callbacks result:', { user, posts }));
          });
      });
  });

// 5. Promise Chain Solution
db.insert('user2', { name: 'Jane' })
  .then(() => db.select('user2'))
  .then(user => {
    console.log('User found:', user);
    return db.insert('posts2', { userId: 'user2', posts: [] });
  })
  .then(() => db.select('posts2'))
  .then(posts => console.log('Promise chain result:', posts))
  .catch(error => console.error('Chain error:', error));

// 6. Async/Await Solution
async function handleDatabaseOperations() {
  try {
    await db.insert('user3', { name: 'Bob' });
    const user = await db.select('user3');
    await db.insert('posts3', { userId: 'user3', posts: [] });
    const posts = await db.select('posts3');
    console.log('Async/await result:', { user, posts });
  } catch (error) {
    console.error('Async/await error:', error);
  }
}

// 7. Promise States Demonstration
function promiseStates() {
  const promise = new Promise((resolve, reject) => {
    console.log('Promise state: PENDING');
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve('Promise state: FULFILLED');
      } else {
        reject('Promise state: REJECTED');
      }
    }, 1000);
  });

  promise
    .then(result => console.log(result))
    .catch(error => console.log(error));
}

promiseStates();

// 8. IIFE with Async/Await
(async () => {
  try {
    console.log('IIFE Start');
    await handleDatabaseOperations();
    console.log('IIFE End');
  } catch (error) {
    console.error('IIFE Error:', error);
  }
})();

// 9. Error Handling in Async Operations
async function errorHandlingDemo() {
  try {
    const result = await db.select('nonexistent');
    console.log(result);
  } catch (error) {
    console.error('Handled error:', error);
  } finally {
    console.log('Error handling demo completed');
  }
}

errorHandlingDemo();

// 10. Real-world API Call Simulation
class API {
  static async get(endpoint) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ data: \`Data from \${endpoint}\` });
      }, 1000);
    });
  }
}

async function fetchUserData() {
  const [userData, userPosts, userSettings] = await Promise.all([
    API.get('/user'),
    API.get('/posts'),
    API.get('/settings')
  ]);

  return {
    user: userData,
    posts: userPosts,
    settings: userSettings
  };
}

fetchUserData().then(data => console.log('API data:', data));`
      },
    ]
  },
  "Meta Interview Questions": {
    id: "meta",
    items: [
      {
        path: "/meta-interview",
        title: "2.1 Array.prototype.flat",
        description: "Implementation of Array.prototype.flat() method that flattens a nested array structure. The method takes an optional depth parameter to control how deep the flattening should go. It recursively traverses the array and flattens nested arrays up to the specified depth. Demonstrates understanding of array manipulation, recursion, and prototype methods.",
        code: `
// 1. Array.prototype.flat() Implementation
Array.prototype.myFlat = function(depth = 1) {
  const result = [];
  
  function flatten(arr, currentDepth) {
    for(const item of arr) {
      if(Array.isArray(item) && currentDepth < depth) {
        flatten(item, currentDepth + 1);
      } else {
        result.push(item);
      }
    }
  }
  
  flatten(this, 0);
  return result;
};

// Example usage:
const nestedArray = [1, [2, 3, [4, 5]]];
console.log('Flattened array:', nestedArray.myFlat(2));
`
      },
      {
        path: "/meta-interview-2", 
        title: "2.2 Basic Debounce",
        description: "Implementation of a debounce function that limits the rate at which a function can fire. It ensures that a function is only executed after a specified delay has passed since its last invocation. Useful for handling frequent events like window resizing or search input. Demonstrates understanding of closures and timing events.",
        code: `
// 2. Basic Debounce Implementation
function debounce(func, wait) {
  let timeout;
  
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Example usage:
const debouncedLog = debounce((text) => console.log(text), 1000);
debouncedLog('Debounced function called');
`
      },
      {
        path: "/meta-interview-3",
        title: "2.3 Event Emitter",
        description: "Implementation of an event emitter system that allows publish-subscribe pattern functionality. Provides methods to subscribe to events (on), unsubscribe from events (off), and emit events with data. Demonstrates understanding of event-driven architecture and observer pattern. Shows implementation of common Node.js EventEmitter functionality.",
        code: `
// 3. Event Emitter Implementation
class EventEmitter {
  constructor() {
    this.events = {};
  }
  
  on(event, callback) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(callback);
    
    return () => this.off(event, callback);
  }
  
  off(event, callback) {
    if (!this.events[event]) return;
    this.events[event] = this.events[event]
      .filter(cb => cb !== callback);
  }
  
  emit(event, data) {
    if (!this.events[event]) return;
    this.events[event].forEach(cb => cb(data));
  }
}

// Example usage:
const emitter = new EventEmitter();
const unsubscribe = emitter.on('test', data => 
  console.log('Event received:', data)
);
emitter.emit('test', 'Hello World');
unsubscribe(); // Removes the listener
`
      },
      {
        path: "/meta-interview-4",
        title: "2.4 Decode Message",
        description: "Implementation of a message decoder that extracts characters from a matrix. Takes a 2D array as input and concatenates characters to form a decoded message. Shows basic matrix traversal and string manipulation. Demonstrates understanding of nested array iteration and string concatenation.",
        code: `
// 4. Decode Message Implementation
function decodeMessage(arr) {
  let message = '';
  
  // Simply concatenate each character in order
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      message += arr[i][j];
    }
  }
  
  return message;
}

// Example usage:
const arr = [
  ['H', 'I'],
  ['T', 'M'] 
];
console.log('Decoded message:', decodeMessage(arr)); // Prints: HITM
`
      },
      {
        path: "/meta-interview-5",
        title: "2.5 First Bad Version",
        description: "Implementation of a binary search algorithm to find the first bad version in a sequence. Uses an efficient divide-and-conquer approach to minimize API calls to isBadVersion. Demonstrates understanding of binary search algorithm and optimization techniques. Common interview question testing algorithm knowledge.",
        code: `
// 5. First Bad Version Implementation
function solution(isBadVersion) {
  return function(n) {
    let left = 1;
    let right = n;
    
    while (left < right) {
      const mid = left + Math.floor((right - left) / 2);
      if (isBadVersion(mid)) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }
    return left;
  };
}

// Example usage:
const isBadVersion = version => version >= 4;
const firstBadVersion = solution(isBadVersion);
console.log('First bad version:', firstBadVersion(8));
`
      },
      {
        path: "/meta-interview-6",
        title: "2.6 DOM Manipulation and Interview Questions",
        description: "Comprehensive implementation of DOM manipulation utilities including store management, traversal, event delegation, and virtual DOM diffing. Includes solutions to common interview questions about DOM manipulation and event handling. Demonstrates deep understanding of DOM APIs, event systems, and performance optimization techniques. Shows implementation of various design patterns in DOM manipulation context.",
        code: `
// 1. DOM Store Implementation
class DOMStore {
  constructor() {
    this.store = new Map();
    this.counter = 0;
  }
  
  set(element, value) {
    if (!element.__storeId) {
      element.__storeId = ++this.counter;
    }
    this.store.set(element.__storeId, value);
    return element.__storeId;
  }
  
  get(element) {
    return this.store.get(element.__storeId);
  }
  
  has(element) {
    return this.store.has(element.__storeId);
  }
  
  remove(element) {
    this.store.delete(element.__storeId);
    delete element.__storeId;
  }
}

// 2. DOM Traversal Methods
function getAllChildNodes(element) {
  const children = [];
  function traverse(node) {
    children.push(node);
    for (let child of node.childNodes) {
      traverse(child);
    }
  }
  traverse(element);
  return children;
}

// 3. Event Delegation Implementation
function delegateEvent(parent, eventType, selector, handler) {
  parent.addEventListener(eventType, function(event) {
    const targetElement = event.target.closest(selector);
    if (targetElement && parent.contains(targetElement)) {
      handler.call(targetElement, event);
    }
  });
}

// 4. Custom Event Implementation
function createCustomEvent(eventName, detail) {
  return new CustomEvent(eventName, {
    bubbles: true,
    cancelable: true,
    detail
  });
}

// 5. DOM Mutation Observer
function observeDOM(targetNode, config = { attributes: true, childList: true, subtree: true }) {
  const callback = function(mutationsList, observer) {
    for(let mutation of mutationsList) {
      if (mutation.type === 'childList') {
        console.log('A child node has been added or removed.');
      }
      else if (mutation.type === 'attributes') {
        console.log('The ' + mutation.attributeName + ' attribute was modified.');
      }
    }
  };
  
  const observer = new MutationObserver(callback);
  observer.observe(targetNode, config);
  return observer;
}

// 6. Virtual DOM Diff Algorithm
function diff(oldNode, newNode) {
  if (!oldNode) return { type: 'CREATE', newNode };
  if (!newNode) return { type: 'REMOVE' };
  if (oldNode.type !== newNode.type) return { type: 'REPLACE', newNode };
  
  const patches = [];
  
  // Compare attributes
  const oldProps = oldNode.props || {};
  const newProps = newNode.props || {};
  
  Object.keys(newProps).forEach(key => {
    if (oldProps[key] !== newProps[key]) {
      patches.push({
        type: 'PATCH_PROP',
        key,
        value: newProps[key]
      });
    }
  });
  
  // Compare children
  const maxLength = Math.max(
    oldNode.children?.length || 0,
    newNode.children?.length || 0
  );
  
  for (let i = 0; i < maxLength; i++) {
    patches.push(...diff(
      oldNode.children?.[i],
      newNode.children?.[i]
    ));
  }
  
  return patches;
}

// Interview Questions and Solutions:

// Q1: Implement getElementsByClassName without using built-in methods
function getElementsByClassName(className, node = document.body) {
  const elements = [];
  
  if (node.classList && node.classList.contains(className)) {
    elements.push(node);
  }
  
  for (let child of node.children) {
    elements.push(...getElementsByClassName(className, child));
  }
  
  return elements;
}

// Q2: Implement closest() polyfill
function closest(element, selector) {
  while (element) {
    if (element.matches(selector)) return element;
    element = element.parentElement;
  }
  return null;
}

// Q3: Create a function to measure DOM node depth
function getNodeDepth(node) {
  let depth = 0;
  while (node.parentNode) {
    depth++;
    node = node.parentNode;
  }
  return depth;
}

// Example usage:
const store = new DOMStore();
const div = document.createElement('div');
store.set(div, { data: 'test' });
console.log('Stored data:', store.get(div));

// Event delegation example
delegateEvent(document.body, 'click', '.button', function(e) {
  console.log('Button clicked:', this.textContent);
});

// Custom event example
const myEvent = createCustomEvent('userAction', { userId: 123 });
document.dispatchEvent(myEvent);
`
      },
      {
        path: "/meta-interview-7",
        title: "2.7 Virtual DOM Implementation",
        description: "Implementation of a basic Virtual DOM system with createElement function and component rendering. Includes support for functional components and demonstrates how to convert virtual nodes to real DOM elements. Shows understanding of modern UI library concepts and component architecture. Provides example of efficient DOM updates and component rendering.",
        code: `
// 7. Virtual DOM Implementation
function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children: children.flat()
    }
  };
}

// Functional Component Example
function FunctionalComponent({ name }) {
  return createElement(
    'div',
    { className: 'greeting' },
    createElement('h1', null, 'Hello, ' + name),
    createElement('p', null, 'Welcome to Virtual DOM example')
  );
}

// Simple renderer
function render(vnode) {
  if (typeof vnode === 'string') {
    return document.createTextNode(vnode);
  }

  if (typeof vnode.type === 'function') {
    return render(vnode.type(vnode.props));
  }

  const element = document.createElement(vnode.type);
  
  Object.entries(vnode.props || {})
    .filter(([key]) => key !== 'children')
    .forEach(([key, value]) => {
      element[key] = value;
    });

  (vnode.props.children || []).forEach(child => {
    element.appendChild(render(child));
  });

  return element;
}

// Example usage:
const vdom = createElement(FunctionalComponent, { name: 'User' });
console.log('Virtual DOM structure:', vdom);
`
      },
      {
        path: "/meta-interview-8",
        title: "2.8 Common JavaScript Interview Questions",
        description: "Comprehensive explanations and examples of frequently asked JavaScript interview questions covering core concepts like variable declarations, inheritance, closures, promises and more. Includes practical examples and detailed explanations.",
        code: `
// 1. var vs let vs const
{
  var x = 1;  // function-scoped
  let y = 2;  // block-scoped
  const z = 3;  // block-scoped, immutable binding
  
  var x = 4;  // OK - redeclaration allowed
  // let y = 5;  // Error - redeclaration not allowed
  // const z = 6;  // Error - redeclaration not allowed
  
  y = 5;  // OK - reassignment allowed
  // z = 6;  // Error - reassignment not allowed
}
console.log(x);  // 4 - var is accessible outside block
// console.log(y);  // ReferenceError - let is block-scoped

// 2. Sorting Algorithm Time/Space Complexities
/*
Bubble Sort:    Time O(n²)   Space O(1)
Quick Sort:     Time O(nlogn) Space O(logn)
Merge Sort:     Time O(nlogn) Space O(n)
Insertion Sort: Time O(n²)    Space O(1)
Heap Sort:      Time O(nlogn) Space O(1)
*/

// 3. Prototypal Inheritance
function Animal(name) {
  this.name = name;
}
Animal.prototype.speak = function() {
  return \`\${this.name} makes a sound\`;
};

function Dog(name) {
  Animal.call(this, name);  // Call parent constructor
}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

const dog = new Dog('Rex');
console.log(dog.speak());  // "Rex makes a sound"

// 4. this keyword
const person = {
  name: 'John',
  regularFn: function() {
    return this.name;  // 'this' refers to person
  },
  arrowFn: () => this.name  // 'this' refers to outer scope
};

// 5. Closures
function createCounter() {
  let count = 0;  // Private variable
  return {
    increment() { return ++count; },
    getCount() { return count; }
  };
}
const counter = createCounter();
console.log(counter.increment());  // 1

// 6. Promises for 5-year-olds
/*
Promise is like ordering ice cream:
1. You get a ticket (promise)
2. Ice cream is being made (pending)
3. You either get ice cream (resolved) or
  they're out of ice cream (rejected)
*/
const iceCreamPromise = new Promise((resolve, reject) => {
  const hasIceCream = true;
  if (hasIceCream) {
    resolve('🍦');
  } else {
    reject('No ice cream today 😢');
  }
});

// 7. Map vs Object vs Set vs Array
// Map: key-value pairs, any type keys
const map = new Map([['key', 'value']]);

// Object: string/symbol keys only
const obj = { key: 'value' };

// Set: unique values only
const set = new Set([1, 1, 2, 3]);  // {1, 2, 3}

// Array: ordered list, duplicate values
const arr = [1, 1, 2, 3];  // [1, 1, 2, 3]

// 8. == vs ===
console.log(1 == '1');    // true (type coercion)
console.log(1 === '1');   // false (strict equality)
console.log(null == undefined);   // true
console.log(null === undefined);  // false

// 9. block vs inline elements
/*
Block elements:
- Start on new line
- Take full width
- Examples: <div>, <p>, <h1>

Inline elements:
- Continue in same line
- Take only needed width
- Examples: <span>, <a>, <img>
*/

// 10. forEach vs map
const numbers = [1, 2, 3];

numbers.forEach(num => {
  console.log(num * 2);  // Just executes function
});

const doubled = numbers.map(num => num * 2);
console.log(doubled);  // Returns new array [2, 4, 6]
`
      }
    ]
  }
};

// For compatibility with existing code
export const examples = Object.values(exampleGroups).flatMap(group => group.items); 