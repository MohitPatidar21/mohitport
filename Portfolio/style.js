const aboutLink = document.querySelector('#about-link');

aboutLink.addEventListener('click', function (event) {
    event.preventDefault();

    const aboutSection = document.querySelector('#about');
    aboutSection.scrollIntoView({ behavior: 'smooth' });
});



const backLink = document.querySelector('#back-link');

backLink.addEventListener('click', function (event) {
    event.preventDefault();

    const backSection = document.querySelector('#backimg');
    backSection.scrollIntoView({ behavior: 'smooth' });
});

const workLink = document.querySelector('#work-link');

workLink.addEventListener('click', function(event) {
    event.preventDefault();

    const workSection = document.querySelector('#workimg');
    workSection.scrollIntoView({ behavior: 'smooth'});
})