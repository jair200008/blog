const elements = document.getElementById("section-Dos");
const divOne = elements.querySelectorAll("div");
console.log(elements.childNodes);

divOne.forEach(function (element, index) {
  console.log(element, index);
  if (index % 2 !== 0) {
    element.style.backgroundColor = "red";
  } else {
    element.style.backgroundColor = "blue";
  }
});

setTimeout(()=>{
    const element = document.getElementById("section-Uno")
    element.innerHTML = '';
},5000)
