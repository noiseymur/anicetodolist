//Expressions
const input = document.querySelector('input');
const addButton = document.querySelector('.submit');
const tasklist = document.querySelector('.todo-list');
const todoElement = document.querySelector('.todo');

//Event Listeners
addButton.addEventListener('click',addTask);
tasklist.addEventListener('click',checkRemove);

//Functions
function addTask(event) {
	event.preventDefault();
	if(input.value !== ''){
		const newTask = document.createElement('div');
		newTask.classList.add('todo');
		const newLi = document.createElement('li');
		newLi.innerHTML = input.value;
		newTask.appendChild(newLi);
		const donebutton = document.createElement('div');
		donebutton.classList.add('done');
		donebutton.innerHTML = '<i class="fas fa-check"></i>';
		newTask.appendChild(donebutton);
		const removebutton = document.createElement('div');
		removebutton.classList.add('remove');
		removebutton.innerHTML = '<i class="fas fa-trash-alt"></i>';
		newTask.appendChild(removebutton);

		tasklist.appendChild(newTask);
		input.value = "";
	}
	else {
		alert('You need to insert a task');
	}
}

function checkRemove(e) {
	const item = e.target;
	if(item.classList[0] === 'done') {
		item.parentElement.classList.toggle('checked');
	}
	else if(item.classList[0] === 'remove') {
		item.parentElement.classList.add('removed');
		item.parentElement.addEventListener('transitionend',function(){
			item.parentElement.remove();
		})
	}
}