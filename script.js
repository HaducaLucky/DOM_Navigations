//! DOM Navigaton
//? - The process of navigating through the structure
//?   of an HTML document using JavaScript.

//* .firstElementChild
//* .lastElementChild
//* .nextElementSibling
//* .previousElementSibling
//* .parentElement
//* .children

//TODO:  .firstElementChild

// const element = document.getElementById("desserts");
// const firstChild = element.firstElementChild;
// firstChild.style.backgroundColor = "yellow";

//* for querySelectorAll =  to highlight all first child element

// const ulElements = document.querySelectorAll("ul");

// ulElements.forEach(ulElement => {
//    const firstChild = ulElement.firstElementChild;
//    firstChild.style.backgroundColor = "yellow";
// });

//TODO: .lastElementChild

// const element = document.getElementById("desserts");
// const lastChild = element.lastElementChild;
// lastChild.style.backgroundColor = "yellow";

//* for querySelectorAll =  to highlight all last child element

// const ulElements = document.querySelectorAll("ul");

// ulElements.forEach(ulElement => {
//     const lastChild = ulElement.lastElementChild;
//     lastChild.style.backgroundColor = "yellow";
// });

//TODO: .nextElementSibling

// const element = document.getElementById("fruits");
// const nextSibling = element.nextElementSibling;
// nextSibling.style.backgroundColor = "yellow";

//TODO: .previousElementSibling

// const element = document.getElementById("orange");
// const prevSibling = element.previousElementSibling;
// prevSibling.style.backgroundColor = "yellow";

//TODO: .parentElement

// const element = document.getElementById("apple");
// const parent = element.parentElement;
// parent.style.backgroundColor = "yellow";

//TODO: .children

// const element = document.getElementById("fruits");
// const children = element.children;

// Array.from(children).forEach(child => {
//     child.style.backgroundColor = "yellow";
// });

//* Access children by index number

const element = document.getElementById("fruits");
const children = element.children;

children[0].style.backgroundColor = "yellow";