// Adding footer
const footer = document.createElement('footer');
const today = new Date(); //today's date
const thisYear = today.getFullYear(); //current year

// copyright that  will be appended to the footer
const copyright = document.createElement('p');
copyright.innerHTML = `&copy; Larysa Plostak ${thisYear}`;
footer.appendChild(copyright);
document.body.appendChild(footer);

const skills = ["JavaScript", "HTML", "CSS", "Python", "SQL", "GitHub"];

// Select skills section to add skils
const skillsSection = document.getElementById('Skills');
const skillsList = skillsSection.querySelector('ul');

// Adding skills
for (let i = 0; i < skills.length; i++) {
    const skill = document.createElement('li');
    skill.textContent = skills[i];
    skillsList.appendChild(skill);
}

// Message form logic
const messageForm = document.forms['leave_message'];
messageForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Read form fields
    const usersName = event.target.usersName.value;
    const usersEmail = event.target.usersEmail.value;
    const usersMessage = event.target.usersMessage.value;

    // Log form fields
    console.log("Name: ", usersName);
    console.log("Email: ", usersEmail);
    console.log("Message: ", usersMessage);

    // Select message section and 'ul' list inside
    const messageSection = document.getElementById('messages');
    let messageList = messageSection.querySelector('ul');

    // Create a message as a list item
    const newMessage = document.createElement('li');
    newMessage.innerHTML = `<a href="mailto:${usersEmail}">${usersName}</a> <span> - ${usersMessage}</span>`;

    // 'Remove' button that allows deleting messages
    const removeButton = document.createElement('button');
    removeButton.innerText = 'remove';
    removeButton.type = 'button';
    removeButton.style.margin = '10px';

    // 'Remove' button logic
    removeButton.addEventListener('click', function() {
        const entry = removeButton.parentNode;
        entry.remove();
    })

    // Making sure the button is appended to the message and the message appended to the list
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);

    // Reset the form
    event.target.reset();
})

// Fetching the list of repositories to add to the Projects section
fetch(`https://api.github.com/users/la-ry-sa/repos`)
    .then(response => response.text())
    .then(responseText => {
        const repositories = JSON.parse(responseText);
        console.log(repositories);
        const projectSection = document.getElementById('Projects');

        let projectList = projectSection.querySelector('ul');
        if (!projectList) {
            projectList = document.createElement('ul');
            projectSection.appendChild(projectList);
        }
        for (let i = 0; i < repositories.length; i++) {
            const project = document.createElement('li');
            const projectLink = document.createElement('a');
            projectLink.href = repositories[i].html_url;
            projectLink.textContent = repositories[i].name;
            projectLink.target = '_blank'; // open in a new tab
            project.appendChild(projectLink); //append the link to the project
            projectList.appendChild(project);
        }
    }
)
    .catch(error => {
        console.error('No projects found', error); 
    })