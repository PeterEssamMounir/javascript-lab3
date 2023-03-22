const inputTask = document.getElementById('input-task');
const addTaskBtn = document.getElementById('add-task');
const taskList = document.getElementById('task-list');

addTaskBtn.addEventListener('click', function() {
  const task = inputTask.value.trim();

  if (task !== '') {
    const li = document.createElement('li');
    li.textContent = task;

    const doneBtn = document.createElement('button');
    doneBtn.textContent = 'Done';
    doneBtn.addEventListener('click', function() {
      li.classList.toggle('done');
    });

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.addEventListener('click', function() {
      li.remove();
    });

    li.appendChild(doneBtn);
    li.appendChild(removeBtn);
    taskList.appendChild(li);

    inputTask.value = '';
  }
});
