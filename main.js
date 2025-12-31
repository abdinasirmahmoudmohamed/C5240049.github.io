function showSection(sectionName) {
  let mainMenu = document.getElementById("mainMenu");
  mainMenu.style.display = "none";
  document.getElementById("chapter2").style.display = "none";
  document.getElementById("chapter3").style.display = "none";
  document.getElementById("chapter4").style.display = "none";
  document.getElementById("chapter5").style.display = "none";
  document.getElementById("chapter6").style.display = "none";
  document.getElementById("chapter7").style.display = "none";
  document.getElementById("assignments").style.display = "none";
  document.getElementById("chapter8").style.display = "none";
  let currentSection = document.getElementById(sectionName);
  currentSection.style.display = "block";
}
function goBack() {
  let mainMenu = document.getElementById("mainMenu");
  mainMenu.style.display = "block";
  document.getElementById("chapter2").style.display = "none";
  document.getElementById("chapter3").style.display = "none";
  document.getElementById("chapter4").style.display = "none";
  document.getElementById("chapter5").style.display = "none";
  document.getElementById("chapter6").style.display = "none";
  document.getElementById("chapter7").style.display = "none";
  document.getElementById("chapter8").style.display = "none";
  document.getElementById("assignments").style.display = "none";
}
function arithmeticExample() {
  let a = Number(prompt("Enter first number:"));
  let b = Number(prompt("Enter second number:"));
  if (!isNaN(a) && !isNaN(b)) {
    alert(
      "Addition: " + (a + b) +
      "\nSubtraction: " + (a - b) +
      "\nMultiplication: " + (a * b) +
      "\nDivision: " + (a / b) +
      "\nRemainder: " + (a % b)
    );
  } else alert("Please enter valid numbers!");
}

function relationalExample() {
let x = Number(prompt("Enter a number:"));
let y = Number(prompt("Enter another number:"));

if (!isNaN(x) && !isNaN(y)) {
  alert(
    x + " > " + y + ": " + (x > y) +
    "\n" + x + " < " + y + ": " + (x < y) +
    "\n" + x + " == " + y + ": " + (x == y) +
    "\n" + x + " === " + y + ": " + (x === y)
  );
} else {
  alert("Enter valid numbers!");
}
}

function logicalExample() {
  let age = Number(prompt("Enter your age:"));
  if (!isNaN(age)) {
    if (age >= 18 && age <= 60) alert("You are an adult.");
    else alert("You are either too young or retired!");
  } else alert("Please enter a number!");
}

function incDecExample() {
  let num = Number(prompt("Enter a number:"));
  if (!isNaN(num)) {
    alert("After Increment: " + (++num) + "\nAfter Decrement: " + (--num));
  } else alert("Enter a valid number!");
}

function typeOfExample() {
  let value = prompt("Enter something (text or number):");
  if (value === "" || value === null) {
    alert("You didn’t enter anything!");
  } else if (isNaN(value)) {
    alert("You entered string or text!");
  } else {
    alert("You entered a number!");
  }
}

function ifElseExample() {
  let score = Number(prompt("Enter your score:"));
  if (!isNaN(score)) {
    if (score >= 50) alert("You passed!");
    else alert("You failed!");
  } else alert("Enter a valid number!");
}

function switchExample() {
  let day = Number(prompt("Enter day number (1–3):"));
  switch (day) {
    case 1: alert("Monday"); break;
    case 2: alert("Tuesday"); break;
    case 3: alert("Wednesday"); break;
    default: alert("Invalid day!");
  }
}

function forLoopExample() {
  let n = Number(prompt("Enter a number:"));
  if (!isNaN(n)) {
    let result = "";
    for (let i = 1; i <= 10; i++) {
      result += n + " x " + i + " = " + (n * i) + "\n";
    }
    alert(result);
  } else alert("Enter a valid number!");
}

function whileLoopExample() {
  let i = 1;
  let result = "";
  while (i <= 5) {
    result += "Number: " + i + "\n";
    i++;
  }
  alert(result);
}

function doWhileExample() {
  let i = 1;
  let result = "";
  do {
    result += "Iteration " + i + "\n";
    i++;
  } while (i <= 3);
  alert(result);
}

function breakLoop() {
  for (let i = 1; i <= 5; i++) {
    if (i === 3) {
      alert("Break at 3");
      break;
    }
    console.log("Counting: " + i);
  }
}

function continueLoop() {
  let text = "";
  for (let i = 1; i <= 5; i++) {
    if (i === 3) continue;
    text += i + " ";
  }
  alert("Numbers (skipped 3): " + text);
}


function simpleFunction() {
  function greet() {
    alert("Hello Students!");
  }
  greet();
}

function addNumbers() {
  function add(a, b) {
    return a + b;
  }
  let x = Number(prompt("Enter first number:"));
  let y = Number(prompt("Enter second number:"));
  if (!isNaN(x) && !isNaN(y)) alert("Sum: " + add(x, y));
  else alert("Enter valid numbers!");
}

function exampleFunctionDeclaration() {
  function greet(name) {
    alert("Hello, " + name);
  }
  greet("Alice");
}

function exampleFunctionExpression() {
  const greet = function(name) {
    alert("Hi, " + name);
  };
  greet("Bob");
}

function exampleArrowFunction() {
  const add = (a, b) => {
    alert("The sum is: " + (a + b));
  };
  add(5, 3);
}


function createArray() {
  let fruits = ["Apple", "Banana", "Cherry"];
  alert("Fruits: " + fruits);
}

function arrayLoopExample() {
  let num = [1, 2, 3, 4, 5];
  let text = "";
  for (let i = 0; i < num.length; i++) {
    text += "Element " + i + ": " + num[i] + "\n";
  }
  alert(text);
}

function arrayConstructor() {
  let fruits = new Array("Apple", "Banana", "Mango");
  alert("Fruits using constructor: " + fruits.join(", "));
}

function arrayAccessUpdate() {
  let colors = ["Red", "Green", "Blue"];
  alert("Original colors: " + colors);
  colors[1] = "Yellow";
  alert("After updating index 1: " + colors);
}

function arrayAddRemove() {
  let numbers = [1, 2, 3];
  numbers.push(4); 
  numbers.unshift(0);
  alert("After adding: " + numbers);
  numbers.pop(); 
  numbers.shift(); 
  alert("After removing: " + numbers);
}

function arraySpliceSlice() {
  let fruits = ["Apple", "Banana", "Mango", "Orange"];
  let removed = fruits.splice(1, 1, "Grapes");
  alert("After splice: " + fruits + "\nRemoved: " + removed);
  let sliced = fruits.slice(1, 3);
  alert("Slice (1–3): " + sliced);
}

function arrayConcat() {
  let a = ["HTML", "CSS"];
  let b = ["JS", "React"];
  let combined = a.concat(b);
  alert("Concatenated array: " + combined);
}

function arrayForOf() {
  let fruits = ["Apple", "Banana", "Cherry"];
  let text = "";
  for (let fruit of fruits) {
    text += fruit + "\n";
  }
  alert("for...of loop:\n" + text);
}

function arrayForEach() {
  let fruits = ["Apple", "Banana", "Cherry"];
  let text = "";
  fruits.forEach((fruit, index) => {
    text += "Index " + index + ": " + fruit + "\n";
  });
  alert("forEach Example:\n" + text);
}

function arrayMap() {
  let prices = [10, 20, 30];
  let withTax = prices.map(p => p * 1.15);
  alert("Original: " + prices + "\nWith 15% tax: " + withTax);
}

function arrayFilter() {
  let numbers = [5, 10, 15, 20, 25];
  let filtered = numbers.filter(n => n > 15);
  alert("Numbers greater than 15: " + filtered);
}

function arrayReduce() {
  let numbers = [10, 20, 30, 40];
  let sum = numbers.reduce((acc, n) => acc + n, 0);
  alert("Array: " + numbers + "\nTotal Sum: " + sum);
}

function arraySearch() {
  let fruits = ["Apple", "Banana", "Mango"];
  let find = prompt("Enter fruit name to search:");
  if (fruits.includes(find)) {
    alert(find + " found at index " + fruits.indexOf(find));
  } else {
    alert(find + " not found in the array.");
  }
}

function multiArray() {
  let matrix = [
    ["A", "B", "C"],
    ["D", "E", "F"],
    ["G", "H", "I"]
  ];
  let text = "";
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      text += matrix[i][j] + " ";
    }
    text += "\n";
  }
  alert("2D Array Elements:\n" + text);
}

// ----------------------
// CHAPTER 7 – OBJECTS 
// ----------------------

// 1. Object Literal
function objectLiteralExample() {
  let student = {
    name: "Ali",
    age: 20,
    course: "JavaScript"
  };

  alert(
    "Object Literal Example:\n" +
    "Name: " + student.name +
    "\nAge: " + student.age +
    "\nCourse: " + student.course
  );
}


// 2. Constructor Function + THIS
function constructorFunctionExample() {
  function Student(name, age) {
    this.name = name;
    this.age = age;
  }

  let s1 = new Student("Ahmed", 21);

  alert(
    "Constructor Function Example:\n" +
    "Name: " + s1.name +
    "\nAge: " + s1.age
  );
}


// 3. Class Syntax
function classSyntaxExample() {
  class Car {
    constructor(brand, year) {
      this.brand = brand;
      this.year = year;
    }
  }

  let c = new Car("Toyota", 2022);

  alert(
    "Class Example:\nBrand: " + c.brand +
    "\nYear: " + c.year
  );
}


// 4. Access Properties
function objectAccessExample() {
  let student = {
    name: "Amina",
    age: 19
  };

  alert(
    "Dot Notation: " + student.name +
    "\nBracket Notation: " + student["age"]
  );
}


// 5. Modify Properties
function objectModifyExample() {
  let student = { name: "Ali", age: 20 };

  student.age = 21;

  alert(
    "After Modification:\nName: " +
    student.name + "\nAge: " + student.age
  );
}


// 6. Add New Properties
function objectAddProperty() {
  let student = { name: "Hani" };

  student.phone = "123456";
  student["nationality"] = "Somali";

  alert(
    "Added New Properties:\n" +
    "Name: " + student.name +
    "\nPhone: " + student.phone +
    "\nNationality: " + student.nationality
  );
}


// 7. Methods in Objects
function objectMethodExample() {
  let student = {
    name: "Ali",
    marks: 90,
    showInfo() {
      return this.name + " scored " + this.marks;
    }
  };

  alert("Method Example:\n" + student.showInfo());
}


// 8. for...in Loop
function objectForInExample() {
  let obj = { a: 1, b: 2, c: 3 };
  let result = "";

  for (let key in obj) {
    result += key + ": " + obj[key] + "\n";
  }

  alert("for...in Loop:\n" + result);
}


// 9. Object.keys()
function objectKeysExample() {
  let obj = { name: "Ali", age: 20 };
  alert("Object.keys():\n" + Object.keys(obj));
}


// 10. Object.values()
function objectValuesExample() {
  let obj = { name: "Ali", age: 20 };
  alert("Object.values():\n" + Object.values(obj));
}


// 11. Object.entries()
function objectEntriesExample() {
  let obj = { name: "Ali", age: 20 };
  let text = "";

  Object.entries(obj).forEach(entry => {
    text += entry[0] + ": " + entry[1] + "\n";
  });

  alert("Object.entries():\n" + text);
}


// 12. JSON.stringify() (Object → JSON)
function jsonStringifyExample() {
  let student = { name: "Ali", age: 20 };
  let json = JSON.stringify(student);

  alert("JSON.stringify():\n" + json);
}


// 13. JSON.parse() (JSON → Object)
function jsonParseExample() {
  let jsonText = '{"name":"Amina","age":22}';
  let obj = JSON.parse(jsonText);

  alert(
    "JSON.parse():\nName: " + obj.name +
    "\nAge: " + obj.age
  );
}

// ----------------------
// CHAPTER 8 – DOM SELECTION
// ----------------------

// 1. getElementById example
function getByIdExample() {
  const p = document.createElement("p");
  p.id = "content";
  p.textContent = "This is a paragraph with ID content";
  document.body.appendChild(p);

  let contentElement = document.getElementById("content");
  contentElement.style.background = "blue";
  contentElement.style.color = "white";
}


// 2. getElementsByTagName example
function getByTagExample() {
  const p1 = document.createElement("p");
  const p2 = document.createElement("p");
  p1.textContent = "Paragraph One";
  p2.textContent = "Paragraph Two";
  document.body.appendChild(p1);
  document.body.appendChild(p2);

  let paragraphs = document.getElementsByTagName("p");
  paragraphs[0].style.color = "red";
}


// 3. getElementsByClassName example
function getByClassExample() {
  const div1 = document.createElement("div");
  const div2 = document.createElement("div");
  div1.className = "box";
  div2.className = "box";
  div1.textContent = "Box One";
  div2.textContent = "Box Two";
  document.body.appendChild(div1);
  document.body.appendChild(div2);

  let boxes = document.getElementsByClassName("box");
  boxes[0].style.background = "green";
  boxes[0].style.color = "white";
}


// 4. querySelector example
function querySelectorExample() {
  const p = document.createElement("p");
  p.className = "text";
  p.textContent = "querySelector Example";
  document.body.appendChild(p);

  let firstP = document.querySelector(".text");
  firstP.style.color = "purple";
}


// 5. querySelectorAll example
function querySelectorAllExample() {
  const p1 = document.createElement("p");
  const p2 = document.createElement("p");
  p1.textContent = "First paragraph";
  p2.textContent = "Second paragraph";
  document.body.appendChild(p1);
  document.body.appendChild(p2);

  let allP = document.querySelectorAll("p");
  allP[0].style.background = "orange";
}

// --------------------
// CHAPTER 9 – EVENTS
// --------------------
function clickEventExample() {
    let btn = document.createElement("button");
    btn.textContent = "Click Me";
    document.body.appendChild(btn);

    btn.addEventListener("click", function () {
        alert("Button Clicked");
    });
}

function mouseEventExample() {
    let box = document.createElement("div");
    box.textContent = "Hover Over Me";
    box.style.border = "1px solid black";
    box.style.padding = "20px";
    box.style.width = "200px";
    box.style.margin = "10px auto";
    document.body.appendChild(box);

    box.addEventListener("mouseover", function () {
        box.style.background = "lightblue";
    });

    box.addEventListener("mouseout", function () {
        box.style.background = "white";
    });
}

function keyboardEventExample() {
    let input = document.createElement("input");
    input.placeholder = "Type here";
    document.body.appendChild(input);

    input.addEventListener("keydown", function () {
        console.log("Key Pressed");
    });
}

function focusEventExample() {
    let input = document.createElement("input");
    input.placeholder = "Focus on me";
    document.body.appendChild(input);

    input.addEventListener("focus", function () {
        input.style.background = "yellow";
    });

    input.addEventListener("blur", function () {
        input.style.background = "white";
    });
}

function loadEventExample() {
    window.addEventListener("load", function () {
        alert("Page Loaded");
    });
}


function assignmentMarks() {
  function getValidMark(subjectName) {
    let mark, ok = false;
    while (!ok) {
      let input = prompt("Enter " + subjectName + " marks (0-100):");
      mark = Number(input);
      if (!isNaN(mark) && mark >= 0 && mark <= 100) ok = true;
      else alert("Invalid input! Enter only numbers 0–100.");
    }
    return mark;
  }

  let subjects = ["JavaScript", "Multimedia", "Calculus", "Hardware", "Network", "English"];
  let marks = [];
  for (let i = 0; i < subjects.length; i++) marks.push(getValidMark(subjects[i]));

  let total = 0;
  for (let i = 0; i < marks.length; i++) total += marks[i];
  let avg = total / subjects.length;
  let grade = avg >= 90 ? "A" : avg >= 80 ? "B" : avg >= 70 ? "C" : avg >= 60 ? "D" : "E";

  alert("Total Marks: " + total + "\nAverage: " + avg.toFixed(2) + "\nGrade: " + grade);
}

function assignmentConditional() {
let temp = Number(prompt("Enter today's temperature in °C:"));
if (isNaN(temp)) {
  alert(" Please enter a valid number!");
} 
else if (temp < 0) {
  alert(" It's freezing cold outside!");
} 
else if (temp >= 0 && temp < 20) {
  alert(" It's cold, wear a jacket!");
} 
else if (temp >= 20 && temp < 30) {
  alert(" The weather is nice today!");
} 
else if (temp >= 30 && temp < 40) {
  alert(" It's quite hot, stay hydrated!");
} 
else {
  alert(" Extreme heat! Stay indoors and be safe!");
}
}
function assignmentLogical() {
  let age = parseInt(prompt("Enter your age:"));
  let permit = prompt("Do you have a learner’s permit? (yes/no)").toLowerCase();

  if (isNaN(age) || age <= 0) alert("Invalid age!");
  else if (age >= 18 && permit === "yes") alert("Eligible for license!");
  else if (age >= 18 && permit === "no") alert("Need a learner’s permit first.");
  else if (age < 18 || permit === "no") alert("Not eligible yet.");
  else alert("Invalid input.");
}

function assignmentSwitch() {
  let num = Number(prompt("Enter order number (1–5): 1=Burger 2=Pizza 3=Fries 4=Salad 5=Drink"));
  if (isNaN(num) || num < 1 || num > 5) alert("Invalid order number!");
  else {
    switch (num) {
      case 1: alert("Burger ordered! Price: $5.99"); break;
      case 2: alert("Pizza ordered! Price: $12.99"); break;
      case 3: alert("Fries ordered! Price: $2.99"); break;
      case 4: alert("Salad ordered! Price: $6.99"); break;
      case 5: alert("Drink ordered! Price: $1.99"); break;
    }
  }
}
function assignmentTenStudents() {
  let students = [
    { name: "Ali Mohamed", age: 20, course: "JavaScript", grade: "A" },
    { name: "Amina Hassan", age: 19, course: "Python", grade: "B" },
    { name: "Hodan Warsame", age: 21, course: "HTML", grade: "A" },
    { name: "Abdirahman Yusuf", age: 22, course: "CSS", grade: "C" },
    { name: "Samira Ahmed", age: 20, course: "Networking", grade: "B" },
    { name: "Yasin Abdulkadir", age: 23, course: "React", grade: "A" },
    { name: "Fatima Ali", age: 18, course: "Database", grade: "A" },
    { name: "Mohamed Noor", age: 24, course: "Hardware", grade: "B" },
    { name: "Nasteho Ibrahim", age: 20, course: "Calculus", grade: "B" },
    { name: "Khalid Osman", age: 21, course: "English", grade: "C" }
  ];

  let result = "";

  for (let i = 0; i < students.length; i++) {
    result +=
      "Student " + (i + 1) + ":\n" +
      "Name: " + students[i].name + "\n" +
      "Age: " + students[i].age + "\n" +
      "Course: " + students[i].course + "\n" +
      "Grade: " + students[i].grade + "\n\n";
  }

  alert(result);
}



