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
        location: 'Sunnyvale, CA',
        blogUrl: 'www.tianhengzhou.com'
    },
    welcomeMessage: 'Experienced Web Developer interests in MEAN Stack Technology',
    skills: ['HTML','CSS','NodeJs','AngularJs','ExpressJs','MongoDB','JavaScript'],
    biopic: './images/Profile.jpg',
    display: function(){
        var formatheaderName = HTMLheaderName.replace('%data%', bio.name),
            formatheaderrole = HTMLheaderRole.replace('%data%', bio.role),
            formatmobile = HTMLmobile.replace('%data%', bio.contacts.mobile),
            formatemail = HTMLemail.replace('%data%', bio.contacts.email),
            formatgithub = HTMLgithub.replace('%data%', bio.contacts.github),
            formatblog = HTMLblog.replace('%data%', bio.contacts.blogUrl),
            formatlocation = HTMLlocation.replace('%data%', bio.contacts.location),
            formatbioPic = HTMLbioPic.replace('%data%', bio.biopic),
            formatwelcomeMsg = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);
        $('#header').prepend(formatheaderrole).prepend(formatheaderName);
        $('#topContacts').append(formatmobile)
            .append(formatemail)
            .append(formatgithub)
            .append(formatblog)
            .append(formatlocation);

        $('#footerContacts')
            .append(formatmobile)
            .append(formatemail)
            .append(formatgithub)
            .append(formatblog)
            .append(formatlocation);

        $('#header').append(formatbioPic)
            .append(formatwelcomeMsg)
            .append(HTMLskillsStart);

        bio.skills.forEach(function(skill){
            var formatskills = HTMLskills.replace('%data%', skill);
            $('#skills').append(formatskills);
        })
    }
};

var education = {
    schools:
        {
            name: 'Oregon State University',
            location: 'Corvallis, OR',
            degree: 'Master of Engineering',
            majors: 'Electrical and Computer Engineering',
            dates: '2014'
        }
    ,
    onlineCourses:
        {
            title: 'Front-End Web Developer Nanodegree',
            school: 'Udacity',
            date: '2015',
            url: 'https://profiles.udacity.com/u/tianhengzhou1'
        }
    ,
    display: function(){
        $('#education').append(HTMLschoolStart);
        var formatschoolName = HTMLschoolName.replace('%data%', education.schools.name),
            formatschoolDegree = HTMLschoolDegree.replace('%data%', education.schools.degree),
            formatschoolDates = HTMLschoolDates.replace('%data%', education.schools.dates),
            formatschoolLocation = HTMLschoolLocation.replace('%data%', education.schools.location),
            formatschoolMajor = HTMLschoolMajor.replace('%data%', education.schools.majors),
            formatonlineTitle = HTMLonlineTitle.replace('%data%', education.onlineCourses.title),
            formatonlineSchool = HTMLonlineSchool.replace('%data%', education.onlineCourses.school),
            formatonlineDates = HTMLonlineDates.replace('%data%', education.onlineCourses.date),
            formatonlineURL = HTMLonlineURL.replace('%data%', education.onlineCourses.url);
        $('.education-entry').append(formatschoolName+formatschoolDegree)
            .append(formatschoolDates)
            .append(formatschoolLocation)
            .append(formatschoolMajor)
            .append(HTMLonlineClasses)
            .append(formatonlineTitle+formatonlineSchool)
            .append(formatonlineDates)
            .append(formatonlineURL)
            }
};
var work = {
    jobs: [
        {
            employer: 'Google',
            title: 'Test Engineer',
            location: 'Mountain View, CA',
            dates: 'Mar 2015 - Present',
            description: 'Working in a test team to running GFiber CPE device feature regression test and design automation script via Selenium Webdriver and Python Fabric Library.'
        },
        {
            employer: 'Techbow LLC',
            title: 'Web Developer (Part Time)',
            location: 'San Jose, CA',
            dates: 'Mar 2015 - Present',
            description: 'Working in an Agile team of 4 to create a blog web app using MEAN stack. Full stack contribution from the front end display to the models in MongoDB.'
        }
    ],
    display: function(){
        $('#workExperience').append(HTMLworkStart);
        work.jobs.forEach(function(job){
            var formatEmployer = HTMLworkEmployer.replace('%data%',job.employer),
                formatTitle = HTMLworkTitle.replace('%data%',job.title),
                formatDates = HTMLworkDates.replace('%data%',job.dates),
                formatDescription = HTMLworkDescription.replace('%data%',job.description),
                formatLocation = HTMLworkLocation.replace('%data%',job.location);
            $('.work-entry').append(formatEmployer+formatTitle)
                .append(formatDates)
                .append(formatLocation)
                .append(formatDescription);
        })
    }
};
var projects = {
    projects: [
        {
            title: 'Blog',
            description: 'The thzlab blog is a project implements Angularjs as FrontEnd, Node.js and Express.js as BackEnd server and MongoDB as database. Also it implements Passport to support third party logins.',
            demoUrl : 'https://www.tianhengzhou.com'
        },
        {
            title: 'Resume',
            description: 'This static web resume is using HTML, Javascript and CSS.',
            demoUrl : 'https://www.tianhengzhou.com/about'
        }
    ],
    display: function(){
        $('#projects').append(HTMLprojectStart);
        projects.projects.forEach(function(project){
            var formatTitle = HTMLprojectTitle.replace('%data%', project.title).replace('%url%', project.demoUrl),
                formatDescription = HTMLprojectDescription.replace('%data%', project.description);
            $('.project-entry').append(formatTitle)
                .append(formatDescription)
        })
    }
};
var maps = {
    display: function(){
        $('#mapDiv').append(googleMap);
    }
};
bio.display();
education.display();
work.display();
projects.display();
maps.display()
