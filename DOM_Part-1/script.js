console.log("Hello");

window.console.log("Hii");
// window.alert("hii i am window object")

//DOM
// console.dir(window.document);
// console.dir(document);
// console.dir(document.body);

const h1 = document.getElementById("heading");
console.log(h1);

const c = document.getElementsByClassName("c1");
console.log(c);

const tag = document.getElementsByTagName("h");
console.log(tag);

let firstEle = document.querySelector("div") // first Element
console.log(firstEle);

let allEle = document.querySelectorAll("div") //All Element 
console.log(allEle); // return NodeList
console.log(allEle.firstchild);

//Id
let id = document.querySelector("#b") // first Element
console.log(id);

//Class
let cls = document.querySelectorAll(".btn") //All Element 
console.log(cls); // return NodeList
console.log(cls.firstchild);

