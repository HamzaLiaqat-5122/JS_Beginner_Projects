const dataArray = [
    {
        title: 'Why is JavaScript cool?',
        detail: 'JavaScript can be used in both the front-end and back-end of web development. JavaScript is standardized so it is frequently updated with new versions. JavaScript integrates easily with HTML and CSS. JavaScript allows websites to have interactivity like scroll transitions and object movement.'
    },
    {
        title: 'What is JavaScript?',
        detail: 'JavaScript is a text-based programming language used both on the client-side and server-side that allows you to make web pages interactive.'
    },
    {
        title: 'How can i learn JavaScript?',
        detail: 'Watch JavaScript Tutorials.Read JavaScript Books.Practice With JavaScript Projects. Listen to JavaScript Podcasts. Join Coding Communities or Groups. Apply for a Web Developer Internship.Practice With JavaScript Flashcards.Practice in Interactive JavaScript Environments.'
    },
    {
        title: 'Where can i learn JavaScript?',
        detail: 'Udemy Free JavaScript Tutorials.Pluralsight.com.Coursera JavaScript Foundation Courses.Freecodecamp.org.Codecademy.'
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

