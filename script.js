"use strict";

const textBox = document.querySelector(".tasks");
let counter = 2;
let editedText = "";
const tasks = document.querySelector(".tasks");

document.querySelector(".btn").addEventListener("click", function (e) {
  e.preventDefault();
  addEntry();
});

tasks.addEventListener("keypress", function (e) {
  if (e.keyCode === 13 && !e.shiftKey) {
    tasks.blur();
    addEntry();
    e.preventDefault();
    tasks.focus();
  }
});

const addEntry = function () {
  const createList = document.createElement("li");
  const createSpan = document.createElement("span");
  const createParagraph = document.createElement("p");
  const createDelButton = document.createElement("button");
  const createEditButton = document.createElement("button");
  if (document.querySelector(".tasks").value === "") {
    alert("Textfield cannot be empty");
    return;
  } else {
    createParagraph.id = `p${counter}`;
    createParagraph.textContent = document.querySelector(".tasks").value;
    createList.appendChild(createParagraph);
    createList.classList = "listElement";
    createList.id = `list${counter}`;
    createDelButton.classList.add("del");
    createDelButton.id = `del${counter}`;
    createEditButton.classList.add("edit");
    createEditButton.id = `edit${counter}`;
    createDelButton.innerText = "Del";
    createEditButton.innerText = "Edit";
    document.querySelector(`.list`).appendChild(createList).appendChild(createSpan);
    createSpan.appendChild(createEditButton);
    createSpan.appendChild(createDelButton);
    counter++;
    document.querySelector(".tasks").value = "";
  }
};

// With Event Delegation
document.querySelector(".list").addEventListener("click", function (cur) {
  let number = cur.target.id.replace(/[delit]/g, "");
  console.log(number);
  if (cur.target.id === `del${number}`) {
    document.getElementById(`list${number}`).remove();
  } else if (cur.target.id === `edit${number}`) {
    editedText = prompt("Edit your entry");
    document.getElementById(`p${number}`).textContent = editedText;
  } else {
    return;
  }
});

/* 
// Without Event Delegation
document.querySelectorAll(".del").forEach(function (cur, i, arr) {
  cur.addEventListener("click", function () {
    let number = cur.id.slice(-1);
    console.log(cur.id);
    document.getElementById(`list${number}`).remove();
  });
});
 */
