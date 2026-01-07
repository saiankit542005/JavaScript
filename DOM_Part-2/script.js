//Attribute :===== >

// 1.getAttrinute(attr) :== >
const img = document.querySelector("img"); //img tag access
let at = img.getAttribute("src");
console.log(at);

const p = document.querySelector("p"); // p tag access
let at2 = p.getAttribute("class");
console.log(at2);
console.log(p.getAttribute("name"));

//2.setAttribute(attr,value) :== >
const at3 = img.setAttribute("src","img-link"); // src = img-link set ho gya
console.log(at3);//
//Style
p.style.backgroundColor = "red";
p.style.backgroundColor = "green";
p.style.color="white";
p.style.fontFamily="sans-serif"
p.innerText = "Hello PARA";


//Insert Elements :== >

let newButton = document.createElement("button"); //create button
newButton.innerText = "click me";
newButton.style.fontSize = "50px";
console.log(newButton);

const div = document.querySelector("div");
div.append(newButton); //1 end(inside)
div.prepend(newButton); //2 start(inside)
div.after(newButton);  //3 end(outside)
div.before(newButton); //4 start(outside)


const heading = document.createElement("h1") // create h1 heading
heading.innerHTML = "<i>New Heading, create in JS</i>";

// let bdy = document.querySelector("body");
// bdy.prepend(heading);

document.querySelector("body").prepend(heading); // direct

//Delete Element : == >
newButton.remove();
p.remove();

//appendChild() :== >

// 📌 Example 1: Naya element add karna :=>
const d = document.querySelector(".box");

const para = document.createElement("p"); // create p tag
para.innerText = "Hello World";
para.style.backgroundColor="blue";
para.style.width = "200px";
para.style.textAlign="center";

d.appendChild(para);

// 📌 Example 2: Element move karna :=>
const ul = document.querySelector("#ul");
d.appendChild(ul);  // ul div(container) se div(box) me aa gai
// console.log(ul);


//removeChild() :==>
console.log(d.removeChild(ul));
console.log(d.removeChild(para));

// Q.1
let newBtn = document.createElement("button"); //create button
newBtn.innerText = "click me";
newBtn.style.fontSize = "50px";
newBtn.style.backgroundColor="red";
newBtn.style.color="white";

document.querySelector("body").prepend(newBtn);

//Q.2
const cq2 = document.querySelector(".content");
console.log(cq2);
console.log(cq2.getAttribute("class"));
// cq2.setAttribute("class","newClass"); //

cq2.classList.add("newClass"); // now, p Tag have two class (content & newClass)
// cq2.classList.remove("content"); 