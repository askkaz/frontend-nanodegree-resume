var bio = {
	"name": "Adam Kaczmarek",
	"role": "SW Developer",
	"contacts": {
		"mobile": "867-5309",
		"email": "askkazgithub@gmail.com",
		"github": "askkaz",
		"twitter": "@adamkaz",
		"location": "Washington, DC"
	},
	"welcomeMessage": "Multi-domain Problem Solver",
	"skills": [
	"curiosity",
	"programming",
	"puzzling",
	"rowing",
	"rocket-science"
	],
	"biopic": "images/adam.jpg",
	display : function(){
		var toAdd = HTMLheaderName.replace("%data%",bio.name) + HTMLheaderRole.replace("%data%",bio.role);
		$("#header").prepend(toAdd);
		var toAddMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
		var toAddEmail = HTMLemail.replace("%data%",bio.contacts.email);
		var toAddGit = HTMLgithub.replace("%data%",bio.contacts.github);
		var toAddTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
		var toAddLocation = HTMLlocation.replace("%data%",bio.contacts.location);
		toAdd = toAddMobile + toAddEmail + toAddGit + toAddTwitter + toAddLocation;
		$("#topContacts").append(toAdd);
		$("#footerContacts").append(toAdd);
		toAdd = HTMLbioPic.replace("%data%",bio.biopic) + HTMLWelcomeMsg.replace("%data%",bio.welcomeMessage);
		$("#header").append(toAdd);
		$("#header").append(HTMLskillsStart);
		for(skill in bio.skills){
			var formattedSkill = HTMLskills.replace("%data%",bio.skills[skill]);
			$("#skills").append(formattedSkill);
		};
	}
};

var education = {
	"schools": [
	{
		"name": "MIT",
		"location": "Cambridge, MA",
		"degree": "BS",
		"majors": [
		"Mechanical Engineering"
		],
		"dates": 2006,
		"url": "http://web.mit.edu"
	},
	{
		"name": "Columbia University",
		"location": "New York, NY",
		"degree": "MS",
		"majors": [
		"Mechanical Engineering"
		],
		"dates": 2010,
		"url": "http://columbia.edu"
	}
	],
	"onlineCourses":[
	{
		"title": "Javascript basics",
		"school": "Udacity",
		"date": 2015,
		"url": "https://www.udacity.com/course/ud804"
	},
	{
		"title": "Intro to jQuery",
		"school": "Udacity",
		"date": 2015,
		"url": "https://www.udacity.com/course/ud245"
	},
	{
		"title": "Responsive Web Design Fundamentals",
		"school": "Udacity",
		"date": 2015,
		"url": "https://www.udacity.com/course/ud893"
	},
	{
		"title":"Intro to HTML and CSS",
		"school":"Udacity",
		"date": 2015,
		"url": "https://www.udacity.com/course/ud304"
	}
	],
	display : function(){
		for(school in this.schools){
			$("#education").append(HTMLschoolStart);
			var toAddName = HTMLschoolName.replace("%data%",this.schools[school].name);
			toAddName = toAddName.replace("#",this.schools[school].url);
			var toAddDegree = HTMLschoolDegree.replace("%data%",this.schools[school].degree);
			var toAddDates = HTMLschoolDates.replace("%data%",this.schools[school].dates);
			var toAddLocation = HTMLschoolLocation.replace("%data%",this.schools[school].location);
			var toAddMajor = "";
			for(major in this.schools[school].majors){
				toAddMajor = toAddMajor + HTMLschoolMajor.replace("%data%",this.schools[school].majors[major]);
			};
			$(".education-entry:last").append(toAddName + toAddDegree + toAddDates + toAddLocation + toAddMajor);
		};
		$("#education").append(HTMLonlineClasses);
		for(course in this.onlineCourses){
			$("#education").append(HTMLschoolStart);
			var toAddName = HTMLonlineTitle.replace("%data%",this.onlineCourses[course].title);
			toAddName = toAddName.replace("#",this.onlineCourses[course].url);
			var toAddSchool = HTMLonlineSchool.replace("%data%",this.onlineCourses[course].school);
			var toAddDates = HTMLonlineDates.replace("%data%",this.onlineCourses[course].date);
			var toAddURL = HTMLonlineURL.replace("%data%",this.onlineCourses[course].url);
			toAddURL = toAddURL.replace("#",this.onlineCourses[course].url);
			$(".education-entry:last").append(toAddName + toAddSchool + toAddDates + toAddURL);
		};
	}
};

var work = {
	"jobs" : [
	{
		"employer": "PRKK",
		"title": "Member, Technical Staff",
		"location": "Arlington, VA",
		"dates": "2014 - Now",
		"description": "Perform modeling and simulation of satellite architectures."
	},
	{
		"employer": "IAI",
		"title": "Senior Systems Engineer / PM",
		"location": "Reston, VA",
		"dates": "2011 - 2014",
		"description": "Systems engineering support for technical sensor procurements."
	},
	{
		"employer": "Orbital Sciences",
		"title": "Senior Systems Engineer",
		"location": "Sterling, VA",
		"dates": "2007 - 2011",
		"description": "Satellite navigation sensor and algorithm engineer."
	}
	],
	display : function(){
		for(job in work.jobs){
			$("#workExperience").append(HTMLworkStart);
			var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
			var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
			var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
			var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
			$(".work-entry:last").append(formattedEmployer + formattedTitle + formattedLocation + formattedDates + formattedDescription);
		};
	}
};

var projects = {
	"projects" : [
	{
		"title": "Qvora Type4head Search",
		"dates": "February - March 2015",
		"description": "Solved programming challenge in C++",
		"images": [
		"images/quora.png",
		"images/type.gif"
		]
	},
	{
		"title": "Front End Project 1",
		"dates": "February 2015",
		"description": "Converted mock up to HTML/CSS",
		"images": [
		"images/mug.png"
		]
	}
	],
	display : function(){
		for(project in projects.projects){
			$("#projects").append(HTMLprojectStart);
			var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
			var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
			var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
			var formattedImages = "";
			for(image in projects.projects[project].images){
				formattedImages = formattedImages + HTMLprojectImage.replace("%data%",projects.projects[project].images[image]);
			};
			$(".project-entry:last").append( formattedTitle + formattedDates + formattedDescription + formattedImages);
		};
	}
};

bio.display();
education.display();
work.display();
projects.display();

$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;
	logClicks(x,y);
});

$("#mapDiv").append(googleMap);

