document.getElementById("todo-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();
  if (!taskText) return;

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = taskText;

  const actions = document.createElement("div");
  actions.className = "actions";

  const completeBtn = document.createElement("button");
  completeBtn.className = "check-btn";
  completeBtn.innerHTML = '<i class="fas fa-check-circle"></i>';
  completeBtn.onclick = () => {
    li.classList.toggle("completed");
  };

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-btn";
  deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
  deleteBtn.onclick = () => {
    li.remove();
  };

  actions.appendChild(completeBtn);
  actions.appendChild(deleteBtn);

  li.appendChild(span);
  li.appendChild(actions);

  document.getElementById("taskList").appendChild(li);
  input.value = "";
});
