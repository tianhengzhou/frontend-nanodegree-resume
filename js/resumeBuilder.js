/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
    name : 'Tianheng Zhou',
    role : 'Web Developer',
    contacts :{
        mobile: '541-602-8097',
        email: 'zth198814@gmail.com',
        github: 'https://github.com/tianhengzhou',
        location: 'Sunnyvale'
    },
    welcomeMessage: 'Tianheng Zhou Web Developer',
    skills: ['HTML','CSS','NodeJs','AngularJs','ExpressJs','MongoDB','JavaScript'],
    biopic: url,
    display: function(){

    }
};

var education = {
    schools: [
        {
            name: 'Oregon State University',
            location: 'Corvallis',
            degree: 'Master of Engineering',
            majors: 'Electrical and Computer Engineering',
            dates: '2014'
        }
    ],
    onlineCourses: [
        {
            title: 'Front-End Web Developer Nanodegree',
            school: 'Udacity',
            date: '2015',
            url: 'https://profiles.udacity.com/u/tianhengzhou1'
        }
    ],
    display: function(){

    }
};
var work = {
    jobs: [
        {
            employer: 'Google',
            title: 'Test Engineer',
            location: 'Mountain View',
            dates: 'Mar 2015 - Present',
            description: 'Working in a test team to running GFiber CPE device feature regression test and design automation script via Selenium Webdriver and Python Fabric Library.'
        },
        {
            employer: 'Techbow LLC',
            title: 'Web Developer (Part Time)',
            location: 'San Jose',
            dates: 'Mar 2015 - Present',
            description: 'Working in an Agile team of 4 to create a blog web app using MEAN stack. Full stack contribution from the front end display to the models in MongoDB.'
        }
    ],
    display: function(){

    }
};
var projects = {
    projects: [
        {
            title: 'Blog',
            description: 'The thzlab blog is a project implements Angularjs as FrontEnd, Node.js and Express.js as BackEnd server and MongoDB as database. Also it implements Passport to support third party logins.',
            codeUrl : 'https://github.com/tianhengzhou/myblog',
            demoUrl : 'www.tianhengzhou.com'
        },
        {
            title: 'Resume',
            description: 'This static web resume is using HTML, Javascript and CSS.',
            codeUrl : 'https://github.com/tianhengzhou/myblog/blob/master/views/about.ejs',
            demoUrl : 'www.tianhengzhou.com/about'
        }
    ],
    display: function(){

    }
};


$(document).ready(function(){

});