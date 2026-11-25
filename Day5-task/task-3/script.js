// A button that changes a heading
const title = document.querySelector("#title");
const changeBtn = document.querySelector("#change-btn");
let usimgFirstTitle = true;

changeBtn.addEventListener("click", function () {
  usingFirstTitle = !usingFirstTitle;
  title.textContent = usingFirstTitle ? "My To-Do List" : "Today's Plan";
});

// Task 3-ii An input field
const countDisplay = document.querySelector("#count");
let count = 0;

document.querySelector("#plus").addEventListener("click", function () {
  count++;
  countDisplay.textContent = count;
});
document.querySelector("#minus").addEventListener("click", function () {
  if (count > 0) {
    count--;
    countDisplay.textContent = count;
  }
});
document.querySelector("#reset").addEventListener("click", function () {
  count = 0;
  countDisplay.textContent = count;
});

// Task 3 iii A show/ hide button
const toggleBtn = document.querySelector("#toggle-btn");
const taskList = document.querySelector("#task-list");

toggleBtn.addEventListener("click", function () {
  taskList.classList.toggle("hidden");
  toggleBtn.textContent = taskList.classList.contains("hidden")
    ? "Show tasks"
    : "Hide tasks";
});

// Live text that shows what the user is typing
const taskInput = document.querySelector("#task-input");
const liveText = document.querySelector("#live-text");
const addBtn = document.querySelector("#add-btn");
const summary = document.querySelector("#summary");

taskInput.addEventListener("input", function (event) {
  liveText.textContent = event.target.value;
});

function updateSummary() {
  const total = taskList.children.length;
  const done = taskList.querySelectorAll("li.done").length;
  summary.textContent = done + " of " + total + " done";
}

function addTask() {
  const text = taskInput.value.trim();
  if (text === "") return;

  const li = document.createElement("li");
  const span = document.createElement("span");
  span.textContent = text;
  const del = document.createElement("button");
  del.type = "button";
  del.textContent = "Delete";
  del.className = "delete";

  li.append(span, del);
  taskList.append(li);

  taskInput.value = "";
  liveText.textContent = "";
  updateSummary();
}

addBtn.addEventListener("click", addTask);
taskInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") addTask();
});

taskList.addEventListener("click", function (event) {
  const li = event.target.closest("li");
  if (!li) return;

  if (event.target.classList.contains("delete")) {
    li.remove();
  } else {
    li.classList.toggle("done");
  }
  updateSummary();
});
