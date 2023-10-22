document.addEventListener("DOMContentLoaded", function () {
  const inputBox = document.getElementById("input-box");
  const addButton = document.getElementById("add-button");
  const listContainer = document.getElementById("list-container");

  addButton.addEventListener("click", addTask);

  inputBox.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });

  listContainer.addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
      event.target.classList.toggle("checked");
      saveData();
    } else if (event.target.tagName === "SPAN") {
      event.target.parentElement.remove();
      saveData();
    }
  });

  function addTask() {
    const inputValue = inputBox.value.trim();

    if (inputValue === "") {
      alert("Kenttä ei voi olla tyhjä!");
      return;
    }

    const li = document.createElement("li");
    li.textContent = inputValue;
    listContainer.appendChild(li);

    const span = document.createElement("span");
    span.textContent = "\u00d7";
    li.appendChild(span);

    inputBox.value = "";
    saveData();
  }

  function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
  }

  function showData() {
    const savedData = localStorage.getItem("data");
    if (savedData) {
      listContainer.innerHTML = savedData;
    }
  }

  showData();
});
