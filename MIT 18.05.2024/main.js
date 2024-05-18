
document.addEventListener('DOMContentLoaded', (event) => {
    displayTasks();
});

function addTask() {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const nameValue = nameInput.value.trim();
    const emailValue = emailInput.value.trim();

    if (nameValue && emailValue) {
    
        let contacts = JSON.parse(localStorage.getItem('contacts')) || [];
        contacts.push({ name: nameValue, email: emailValue });


        localStorage.setItem('contacts', JSON.stringify(contacts));

        nameInput.value = '';
        emailInput.value = '';

        displayTasks();
    } else {
        alert('Please enter both a name and an email address.');
    }
}

function displayTasks() {
    const addContainer = document.querySelector('.emailAdd');
    addContainer.innerHTML = '';


    const contacts = JSON.parse(localStorage.getItem('contacts')) || [];

    contacts.forEach((contact, index) => {
        const contactItem = document.createElement('li');
        contactItem.innerText = `Name: ${contact.name},
                                Email: ${contact.email}`;
           contactItem.style.fontWeight="bold"
        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.addEventListener('click', () => deleteTask(index));
        contactItem.appendChild(deleteButton);

        addContainer.appendChild(contactItem);
    });
}

function deleteTask(index) {
  
    let contacts = JSON.parse(localStorage.getItem('contacts')) || [];

    contacts.splice(index, 1);
    localStorage.setItem('contacts', JSON.stringify(contacts));

    displayTasks();
}
