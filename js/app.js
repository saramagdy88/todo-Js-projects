// Select Elements
let form = document.getElementById("task-form");
let  input = document.getElementById("todo-input").value;
let  btn = document.getElementById("plus");
let  ul = document.getElementById("task-list");


// add Event on form
form.addEventListener("submit", function(e) {
  e.preventDefault();
  // check value of input
  input = document.getElementById("todo-input").value;
  if (input === ""||input===null) {
    alert("Please Enter value ");
    listItem.className("hidden");
  }


    //creat a new li
    let  listItem = document.createElement("li");
    listItem.className = "list";

  //the value of a new li
  listItem.innerHTML = input;
  let  btns = document.createElement("button");
  btns.innerHTML = "Remove";
  btns.className = "delete";
  listItem.appendChild(btns);
  ul.appendChild(listItem);

  //add event to remove li
  btns.addEventListener("click", function(e) {
    e.target.parentElement.remove();
  });
  form.reset();
});
