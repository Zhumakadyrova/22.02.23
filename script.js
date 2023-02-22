let example1 = document.querySelector("nav");
console.log(example1);

let example2 = document.querySelector("ul");
example2.style.listStyleType = "none"

console.log(example2);

let example3 = document.querySelector("li");
console.log(example3);

let example4 = document.querySelector(".first");
example4.textContent = "Nagima";
for (let i = 0; i<=example3.length; i ++) {
  let listItem= document.querySelectorAll("li");
  listItem.textContent = "nagima";
  example2.append(listItem)
}

let example8 = document.createElement("ul");
example8.className =" example-8";
document.body.append(example8);
for( let i =1; i <=10; i ++) {
  let listItem = document.createElement("li");
  listItem.textContent = "example " + i;
  listItem.style.color = "red";
  example8.append(listItem);
}
let example10= document.createElement("ul");
example10.className ="example-10";
document.body.prepend(example10);
for (let a =1; a<=10; a++) {
  listEl = document.createElement("li");
  listEl.textContent= "Nagima";
  listEl.style.backgroundColor = "yellow";
  listEl.style.listStyleType= "none";
  listEl.style.padding ="20px";
  listEl.style.border="3px solid black";
  listEl.style.borderCollapse = "inherit";
  example10.append(listEl);
}
