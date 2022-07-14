let addBtn = document.querySelector(".add-btn");
let inputField = document.querySelector(".add-new");
let editIcon = document.querySelector(".edit-icon");
let todoList = document.querySelector(".todo-list");

inputField.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addBtn.click();
  }
});

todoList.addEventListener("click", addOrDeleteListItem);

addBtn.addEventListener("click", function () {
  let input = document.querySelector(".add-new");
  let todoList = document.querySelector(".todo-list");
  let newElement = document.createElement("li");
  if (input.value === "") {
    return;
  }
  newElement.classList.add("list-item");
  newElement.innerHTML = `<input type="checkbox" name="" id="" /><span class="list-text">${input.value}</span><i class="fa-solid fa-pen-to-square edit-icon"></i>
  <i class="fa-solid fa-trash-can delete-icon"></i>`;
  newElement.addEventListener("focusout", updateText);
  newElement.addEventListener("keypress", updateText);
  input.value = "";
  todoList.append(newElement);
});

function updateText(e) {
  if (e.key === "Enter" || e.type === "focusout") {
    e.target.innerText = e.target.innerText;
    e.target.contentEditable = false;
  }
}

function addOrDeleteListItem(e) {
  if (e.target.classList.contains("delete-icon")) {
    e.target.parentElement.remove();
  } else if (e.target.classList.contains("edit-icon")) {
    e.target.parentElement.querySelector(".list-text").contentEditable = true;

    e.target.parentElement.querySelector(".list-text").focus();
  } else if (e.target.type === "checkbox") {
    if (e.target.checked == true) {
      e.target.nextElementSibling.style.textDecoration = "line-through";
    } else {
      e.target.nextElementSibling.style.textDecoration = "none";
    }
  }
}
