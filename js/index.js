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
