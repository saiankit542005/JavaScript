const p = document.querySelector("p");
console.log(p.nodeType); // 1

console.log(p.firstChild.nodeType); // 3 (Text)

// const c = document.childNodes[1];
// console.log(c.nodeType); // 8 (Comment)

// parent element ke child nodes / elements ko access := >
//1️⃣ firstChild
let container = document.querySelector(".container");
console.log("firstChild",container.firstChild);

// div.container
//  ├── #text  ("\n    ")   ← newline + spaces //firstChild
//  ├── p
//  ├── #text  ("\n    ")
//  ├── span
//  ├── #text  ("\n   ") //lastChild

console.log(container.childNodes); //
console.log(container.firstElementChild); // <p>pra1</p>
console.log(container.lastElementChild); // <span>spanTag</span>

// 2️⃣ lastChild
console.log("lastChild",container.lastChild); 

// 3️⃣ children
console.log(container.children);

//Properties

// 1.tagName :== >

console.log(container.tagName);
let pTag = container.firstElementChild;
console.log(pTag.tagName);
let sTag = container.lastElementChild;

// 2.innerText :== >
console.log(container.innerText);

// container.innerText = "Hello World"
// console.log(container.innerText);

// 3.innerHTML :== >
console.log(container.innerHTML);

// 4.textContent :== >
console.log(container.textContent);
