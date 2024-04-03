const dataArray = [
    {
        title: 'Why is JavaScript cool?',
        detail: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto molestiae iure quam autem dignissimos vitae maiores doloremque necessitatibus mollitia nostrum deserunt et ut aliquid, temporibus itaque enim, repellendus nesciunt quasi?'
    },
    {
        title: 'What is JavaScript?',
        detail: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto molestiae iure quam autem dignissimos vitae maiores doloremque necessitatibus mollitia nostrum deserunt et ut aliquid, temporibus itaque enim, repellendus nesciunt quasi?'
    },
    {
        title: 'How can i learn JavaScript?',
        detail: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto molestiae iure quam autem dignissimos vitae maiores doloremque necessitatibus mollitia nostrum deserunt et ut aliquid, temporibus itaque enim, repellendus nesciunt quasi?'
    },
    {
        title: 'Where can i learn JavaScript?',
        detail: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto molestiae iure quam autem dignissimos vitae maiores doloremque necessitatibus mollitia nostrum deserunt et ut aliquid, temporibus itaque enim, repellendus nesciunt quasi?'
    }
];

const makeHTML = data => {
    return `<details>
       <summary>${data.title}</summary>
       <p>${data.detail}</p>
    </details>`
};

const containerElement = document.getElementById('faq-container');  

containerElement.innerHTML = dataArray.map(dataItem => makeHTML(dataItem)).join('');

