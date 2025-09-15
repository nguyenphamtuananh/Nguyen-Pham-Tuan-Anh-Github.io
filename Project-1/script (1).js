document.getElementById('add-task-btn').addEventListener('click', function() {
	const taskText = document.getElementById('new-task').value;
	const taskDesc = document.getElementById('task-desc').value;
	const taskTime = document.getElementById('task-time').value;
	
	if (taskText === '' || taskDesc === '' || taskTime === '') {
		alert('Please fill in all fields');
		return;
	}

	addTask(taskText, taskDesc, taskTime);
	
	document.getElementById('new-task').value = '';
	document.getElementById('task-desc').value = '';
	document.getElementById('task-time').value = '';
});

function addTask(taskText, taskDesc, taskTime) {
	const taskList = document.getElementById('task-list');

	const newTask = document.createElement('li');

	const taskContent = document.createElement('div');
	taskContent.classList.add('task-info');
	
	const taskName = document.createElement('span');
	taskName.textContent = taskText;
	taskName.classList.add('task-name');
	
	const taskDescription = document.createElement('span');
	taskDescription.textContent = `Description: ${taskDesc}`;
	taskDescription.classList.add('task-desc');
	
	const taskTimeElement = document.createElement('span');
	taskTimeElement.textContent = `Time: ${taskTime}`;
	taskTimeElement.classList.add('task-time');
	
	taskContent.appendChild(taskName);
	taskContent.appendChild(taskDescription);
	taskContent.appendChild(taskTimeElement);
	
	newTask.appendChild(taskContent);
	
	const buttons = document.createElement('div');
	buttons.classList.add('buttons');

	const completeButton = document.createElement('button');
	completeButton.textContent = 'Complete';
	completeButton.classList.add('complete');
	completeButton.addEventListener('click', function() {
		moveTaskToCompleted(newTask);
	});
	buttons.appendChild(completeButton);

	const deleteButton = document.createElement('button');
	deleteButton.textContent = 'Delete';
	deleteButton.classList.add('delete');
	deleteButton.addEventListener('click', function() {
		taskList.removeChild(newTask);
	});
	buttons.appendChild(deleteButton);

	newTask.appendChild(buttons);
	taskList.appendChild(newTask);
}

function moveTaskToCompleted(task) {
	const completedList = document.getElementById('completed-list');
	completedList.appendChild(task);
	task.querySelector('.complete').remove();
}
