const footer = document.createElement('footer');
const today = new Date();
const thisYear = today.getFullYear();

const copyright = document.createElement('p');
copyright.innerHTML = `&copy; Larysa Plostak ${thisYear}`;
footer.appendChild(copyright);
document.body.appendChild(footer);

const skills = ["JavaScript", "HTML", "CSS", "Python", "SQL", "GitHub"];

const skillsSection = document.getElementById('skills');
const skillsList = skillsSection.querySelector('ul');

for (let i = 0; i < skills.length; i++) {
    const skill = document.createElement('li');
    skill.textContent = skills[i];
    skillsList.appendChild(skill);
}

const messageForm = document.forms['leave_message'];
messageForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const usersName = event.target.usersName.value;
    const usersEmail = event.target.usersEmail.value;
    const usersMessage = event.target.usersMessage.value;

    console.log("Name: ", usersName);
    console.log("Email: ", usersEmail);
    console.log("Message: ", usersMessage);

    const messageSection = document.getElementById('messages');

    let messageList = messageSection.querySelector('ul');

    const newMessage = document.createElement('li');
    newMessage.innerHTML = `<a href="mailto:${usersEmail}">${usersName}</a> <span> - ${usersMessage}</span>`;

    const removeButton = document.createElement('button');
    removeButton.innerText = 'remove';
    removeButton.type = 'button';

    removeButton.addEventListener('click', function() {
        const entry = removeButton.parentNode;
        entry.remove();
    })

    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);

    event.target.reset();
})