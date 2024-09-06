const footer = document.createElement('footer');
document.body.appendChild(footer);

const today = new Date();
const thisYear = today.getFullYear();

const copyright = document.createElement('p');
copyright.innerHTML = `© Larysa Plostak ${thisYear}`;

