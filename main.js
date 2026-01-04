let outputBox;

function createOutputBox(titleText) {
  outputBox = document.createElement("div");
  outputBox.style.marginTop = "30px";
  outputBox.style.padding = "20px";
  outputBox.style.border = "2px dashed #F28705";
  outputBox.style.minHeight = "120px";
  outputBox.style.textAlign = "center";

  const title = document.createElement("h4");
  title.textContent = titleText;
  title.style.color = "#F28705";

  outputBox.appendChild(title);
}

function clearOutput() {
  if (outputBox) outputBox.innerHTML = "";
}

function showSection(sectionName) {
  document.getElementById("mainMenu").style.display = "none";

  document.querySelectorAll(".chapter-section").forEach(section => {
    section.style.display = "none";
  });

  const section = document.getElementById(sectionName);
  section.style.display = "block";

  if (sectionName === "chapter8") {
    createOutputBox("DOM Output");
    section.appendChild(outputBox);
  }

  if (sectionName === "chapter9") {
    createOutputBox("Event Output");
    section.appendChild(outputBox);
  }
}

function goBack() {
  document.getElementById("mainMenu").style.display = "flex";

  document.querySelectorAll(".chapter-section").forEach(section => {
    section.style.display = "none";
  });
}

function arithmeticExample() {
  let a = 10, b = 5;
  alert(
    `Addition: ${a + b}
Subtraction: ${a - b}
Multiplication: ${a * b}
Division: ${a / b}`
  );
}

function relationalExample() {
  alert("10 > 5 = " + (10 > 5));
}

function logicalExample() {
  alert("true && false = " + (true && false));
}

function incDecExample() {
  let x = 5;
  x++;
  alert("After increment: " + x);
}

function typeOfExample() {
  alert("typeof 10 = " + typeof 10);
}

function ifElseExample() {
  let marks = 60;
  alert(marks >= 50 ? "Pass" : "Fail");
}

function switchExample() {
  let day = 3;
  switch (day) {
    case 1: alert("Monday"); break;
    case 2: alert("Tuesday"); break;
    case 3: alert("Wednesday"); break;
    default: alert("Invalid");
  }
}

function forLoopExample() {
  let text = "";
  for (let i = 1; i <= 5; i++) text += i + " ";
  alert(text);
}

function whileLoopExample() {
  let i = 1, text = "";
  while (i <= 5) text += i++ + " ";
  alert(text);
}

function doWhileExample() {
  let i = 1, text = "";
  do text += i++ + " ";
  while (i <= 5);
  alert(text);
}

function breakLoop() {
  let text = "";
  for (let i = 1; i <= 5; i++) {
    if (i === 3) break;
    text += i + " ";
  }
  alert(text);
}

function continueLoop() {
  let text = "";
  for (let i = 1; i <= 5; i++) {
    if (i === 3) continue;
    text += i + " ";
  }
  alert(text);
}

function simpleFunction() {
  alert("This is a simple function");
}

function addNumbers() {
  alert(5 + 10);
}

function exampleFunctionDeclaration() {
  function greet() { return "Hello"; }
  alert(greet());
}

function exampleFunctionExpression() {
  const greet = function () { return "Hello"; };
  alert(greet());
}

function exampleArrowFunction() {
  const greet = () => "Hello";
  alert(greet());
}

function createArray() { alert([1, 2, 3]); }
function arrayLoopExample() { alert([1, 2, 3].join(" ")); }
function arrayConstructor() { alert(new Array(4, 5, 6)); }
function arrayAccessUpdate() {
  let arr = [1, 2, 3];
  arr[0] = 10;
  alert(arr);
}
function arrayAddRemove() {
  let arr = [1, 2];
  arr.push(3);
  arr.pop();
  alert(arr);
}
function arraySpliceSlice() { alert([1, 2, 3, 4].slice(1, 3)); }
function arrayConcat() { alert([1, 2].concat([3, 4])); }
function arrayForOf() {
  let t = "";
  for (let v of [1, 2, 3]) t += v + " ";
  alert(t);
}
function arrayForEach() {
  let t = "";
  [1, 2, 3].forEach(v => t += v + " ");
  alert(t);
}
function arrayMap() { alert([1, 2, 3].map(x => x * 2)); }
function arrayFilter() { alert([1, 2, 3, 4].filter(x => x > 2)); }
function arrayReduce() { alert([1, 2, 3].reduce((a, b) => a + b)); }
function arraySearch() { alert([1, 2, 3].includes(2)); }
function multiArray() { alert([[1, 2], [3, 4]][1][0]); }

function objectLiteralExample() {
  alert(JSON.stringify({ name: "Ali", age: 20 }));
}
function constructorFunctionExample() {
  function Student(n, a) { this.name = n; this.age = a; }
  alert(JSON.stringify(new Student("Ahmed", 21)));
}
function classSyntaxExample() {
  class Car { constructor(b, y) { this.brand = b; this.year = y; } }
  alert(JSON.stringify(new Car("Toyota", 2022)));
}
function objectAccessExample() {
  let s = { name: "Ali", age: 20 };
  alert("Name: " + s.name + "\nAge: " + s.age);
}
function objectModifyExample() {
  let s = { name: "Ali", age: 20 };
  s.age = 21;
  alert(JSON.stringify(s));
}
function objectAddProperty() {
  let s = { name: "Ali" };
  s.phone = "123456";
  alert(JSON.stringify(s));
}
function objectMethodExample() {
  let s = { name: "Ali", marks: 90, show() { return this.name + " " + this.marks; } };
  alert(s.show());
}
function objectForInExample() {
  let o = { a: 1, b: 2 };
  let t = "";
  for (let k in o) t += k + ": " + o[k] + "\n";
  alert(t);
}
function objectKeysExample() { alert(Object.keys({ a: 1, b: 2 })); }
function objectValuesExample() { alert(Object.values({ a: 1, b: 2 })); }
function objectEntriesExample() { alert(JSON.stringify(Object.entries({ a: 1, b: 2 }))); }
function jsonStringifyExample() { alert(JSON.stringify({ name: "Ali" })); }
function jsonParseExample() {
  let obj = JSON.parse('{"name":"Amina","age":22}');
  alert(obj.name + " " + obj.age);
}

function getByIdExample() {
  clearOutput();
  const p = document.createElement("p");
  p.id = "demoId";
  p.textContent = "Selected by ID";
  p.style.color = "yellow";
  outputBox.appendChild(p);
}

function getByTagExample() {
  clearOutput();
  const p1 = document.createElement("p");
  const p2 = document.createElement("p");
  p1.textContent = "Paragraph 1";
  p2.textContent = "Paragraph 2";
  outputBox.append(p1, p2);
  p1.style.color = "cyan";
}

function getByClassExample() {
  clearOutput();
  const d = document.createElement("div");
  d.className = "box";
  d.textContent = "Selected by class";
  d.style.border = "2px solid white";
  outputBox.appendChild(d);
}

function querySelectorExample() {
  clearOutput();
  const p = document.createElement("p");
  p.className = "text";
  p.textContent = "querySelector example";
  p.style.color = "lime";
  outputBox.appendChild(p);
}

function querySelectorAllExample() {
  clearOutput();
  for (let i = 1; i <= 3; i++) {
    const p = document.createElement("p");
    p.textContent = "Item " + i;
    outputBox.appendChild(p);
  }
}

function clickEventExample() {
  clearOutput();
  const btn = document.createElement("button");
  btn.textContent = "Click Me";
  btn.onclick = () => btn.textContent = "Clicked!";
  outputBox.appendChild(btn);
}

function mouseEventExample() {
  clearOutput();
  const box = document.createElement("div");
  box.textContent = "Hover me";
  box.style.padding = "20px";
  box.style.border = "2px solid white";
  box.onmouseover = () => box.style.background = "#F28705";
  box.onmouseout = () => box.style.background = "transparent";
  outputBox.appendChild(box);
}

function keyboardEventExample() {
  clearOutput();
  const input = document.createElement("input");
  const p = document.createElement("p");
  input.onkeyup = () => p.textContent = input.value;
  outputBox.append(input, p);
}

function focusEventExample() {
  clearOutput();
  const input = document.createElement("input");
  input.onfocus = () => input.style.background = "yellow";
  input.onblur = () => input.style.background = "white";
  outputBox.appendChild(input);
}

function loadEventExample() {
  clearOutput();
  outputBox.textContent = "Load event runs when the page loads.";
}
