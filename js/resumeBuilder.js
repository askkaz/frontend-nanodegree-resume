
var bio = {
	"name": "Adam",
	"role":"SW Dev",
	"welcomeMessage": "Hello and welcome to my resume.",
	"contacts": {
		"mobile":"867-5309",
		"email":"frog@pond.net",
		"github": "askkaz",
		"location": "Washington, DC"
	},
	"skills": "programming"
};

var projects = {
	"projects" : [
	{
		"title": "Quora Typeahead Search",
		"dates": "February 2015",
		"description": "Solved programming challenge in C++",
		"images": "http://upload.wikimedia.org/wikipedia/commons/1/18/Vombatus_ursinus_-Maria_Island_National_Park.jpg"
	},
	{
		"title": "FE P1",
		"dates": "February 2015",
		"description": "Converted mock up to HTML/CSS",
		"images": "http://i.imgur.com/NCjy2M8.png"
	}
	]
};

projects.display = function(){
	for(project in projects.projects){
		$("#projects").append(HTMLprojectStart);
		var formattedTitle=HTMLprojectTitle.replace("%data%",projects.projects[project].title);
		var formattedDates=HTMLprojectDates.replace("%data%",projects.projects[project].dates);
		var formattedDescription=HTMLprojectDescription.replace("%data%",projects.projects[project].description);
		var formattedImages=HTMLprojectImage.replace("%data%",projects.projects[project].images);
		$(".project-entry:last").append( formattedTitle +formattedDates+formattedDescription+formattedImages);
	}
};

projects.display();
var work = {
	"jobs" : [
	{
		"employer": "PRKK",
		"title": "Member Technical Staff",
		"location": "Arlington, VA",
		"dates": "August 2014 to Present",
		"description": "Perform modeling and simulation"
	},
	{
		"employer": "IAI",
		"title": "Senior Systems Engineer / PM",
		"location": "Reston, VA",
		"dates": "November 2011 to August 2014",
		"description": "Systems engineering support"
	}
	]
};


var education = {
	"schools": [
	{
		"name": "MIT",
		"degree":"BS",
		"majors": "mechanical engineering",
		"location":"Cambridge, MA",
		"dates":"2002-2006",
		"url":"web.mit.edu"
	},
	{
		"name": "Columbia",
		"degree":"MS",
		"majors": "mechanical engineering",
		"location":"New York, NY",
		"dates":"2007-2010",
		"url":"columbia.edu"
	}
	],
	"onlineCourses":[
	{
		"title":"Javascript basics",
		"school":"Udacity",
		"dates":"March 2015",
		"url":"Udacity.com"
	},
	{
		"title":"Intro to HTML and CSS",
		"school":"Udacity",
		"dates":"February 2015",
		"url":"Udacity.com"
	}
	]
};

if(bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	var formattedSkill=HTMLskills.replace("%data%",bio.skills);
	console.log(formattedSkill);
	$("#skills").append(formattedSkill);
}

var formattedName=HTMLheaderName.replace("%data%","Adam Kaczmarek");
$("#header").prepend(formattedName);

var displayWork = function(){
	for(job in work.jobs){
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer=HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
		var formattedTitle=HTMLworkTitle.replace("%data%",work.jobs[job].title);
		var formattedLocation=HTMLworkLocation.replace("%data%",work.jobs[job].location);
		var formattedDates=HTMLworkDates.replace("%data%",work.jobs[job].dates);
		var formattedDescription=HTMLworkDescription.replace("%data%",work.jobs[job].description);
		$(".work-entry:last").append(formattedEmployer + formattedTitle + formattedLocation+formattedDates+formattedDescription);
	}
}

displayWork();

var inName = function(name){
	names=name.split(" ");
	return (names[0]+" "+names[1].toUpperCase());
};

$("#main").append(internationalizeButton);

$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;
	logClicks(x,y);
});

console.log(inName("sebastian thrun"))

$("#mapDiv").append(googleMap);
