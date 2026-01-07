// Event handling in JS

const btn1 = document.querySelector("#btn1");
btn1.onclick = () => {
  console.log("button id -> btn1 is clicked");
  let a = 25;
  a++;
  console.log(a);
};

// Override :=>  same variable par value dubara assign.
// 👉 Sirf second handler chalega
// ➡️ First override ho gaya

btn1.onclick = () => {
  console.log("button id -> btn1 is clicked in second event handling");
  let a = 30;
  a++;
  console.log(a);
};

//priority : => Js handling > inline handling

const div1 = document.querySelector(".box");
div1.onmouseover = () => {
  console.log("JS handling > inline handling ");
};

//Even Object :==== >

const div2 = document.querySelector("#container1");

div2.onmouseover = (evt) => {
  console.log(evt);
  console.log(evt.type);
  console.log(evt.target);
  console.log(evt.clientX, evt.clientY);
};

//Event Listerner :=== >
const div3 = document.querySelector("#container2");
div3.addEventListener("mouseover", (evt) => {
  console.log(evt.type);
});
//no problem of override := >
div3.addEventListener("mouseover", () => {
  console.log("reassign value in same variable 1");
});

const var2 = () => {
  console.log("reassign value in same variable 2");
};

div3.addEventListener("mouseover", var2);

div3.addEventListener("mouseover", () => {
  console.log("reassign value in same variable 3");
});

//node.removeEventListerner(event,callback) := >

div3.removeEventListener("mouseover", var2); // pass reference var2 in callback for remove var2.

//Q.1

const btn2 = document.querySelector("#btn2");
const bdy = document.querySelector("body");
let currMode = "light";

// btn2.addEventListener("mouseover",() =>{
//     if(currMode === "light"){
//         currMode = "dark";
//         console.log(bdy.style.backgroundColor="black");
//         // bdy.style.color ="white";
//     } else {
//         currMode = "light";
//         console.log(bdy.style.backgroundColor="white");
//         // bdy.style.color ="black";
//     }
// })

btn2.addEventListener("keyup", () => {
  if (currMode === "light") {
    currMode = "dark";
    bdy.classList.add("dark");
    bdy.classList.remove("white");
  } else {
    currMode = "light";
    bdy.classList.add("white");
    bdy.classList.remove("dark");
  }
});
