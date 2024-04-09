document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('task-input');
    const errorMessage = document.getElementById('error-message');
    const taskForm = document.getElementById('task-form');

    taskInput.addEventListener('input', function() {
        if (taskInput.value.trim() === '') {
            errorMessage.textContent = 'This field cannot be empty';
            errorMessage.style.display = 'inline';
        } else {
            errorMessage.style.display = 'none';
        }
    });

    taskForm.addEventListener('submit', function(event) {
        if (taskInput.value.trim() === '') {
            event.preventDefault();
            errorMessage.textContent = 'This field cannot be empty';
            errorMessage.style.display = 'inline';
        }
    });

    const completeButtons = document.querySelectorAll('.complete-button');
    completeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const taskElement = button.parentElement.parentElement;
            const taskIndex = taskElement.id.split('-')[1]; 
            button.innerHTML = ''; 
            button.classList.add('checkmark'); 
            taskElement.classList.add('completed'); 
        });
    });
});
