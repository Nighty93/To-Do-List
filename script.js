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
  const list = document.createElement("li");
  const span = document.createElement("span");
  const p = document.createElement("p");
  const delButton = document.createElement("button");
  const editButton = document.createElement("button");
  if (document.querySelector(".tasks").value === "") {
    alert("Textfield cannot be empty");
    return;
  } else {
    p.id = `p${counter}`;
    p.textContent = document.querySelector(".tasks").value;
    list.appendChild(p);
    list.classList = "listElement";
    list.id = `list${counter}`;
    delButton.classList.add("del");
    delButton.id = `del${counter}`;
    editButton.classList.add("edit");
    editButton.id = `edit${counter}`;
    delButton.innerText = "Del";
    editButton.innerText = "Edit";
    document.querySelector(`.list`).appendChild(list).appendChild(span);
    span.appendChild(editButton);
    span.appendChild(delButton);
    counter++;
    document.querySelector(".tasks").value = "";
  }
};

// With Event Delegation
document.querySelector(".list").addEventListener("click", function (cur) {
  let number = cur.target.id.slice(-1);
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
