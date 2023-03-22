function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    var newTask = document.createElement("li");
    newTask.innerText = taskInput.value;

    var doneButton = document.createElement("button");
    doneButton.innerText = "Done";
    doneButton.onclick = function() {
        newTask.classList.add("done");
    };

    var deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.onclick = function() {
        taskList.removeChild(newTask);
    };

    newTask.appendChild(doneButton);
    newTask.appendChild(deleteButton);

    taskList.appendChild(newTask);

    taskInput.value = "";
}