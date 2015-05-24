

// Objects contaning data and the display function which can be called anywhere in any order. 

var Work = {
	"jobs" : [
	{
		"employer" : "Uniterm Direct",
		"title" : "IT Technician",
		"location" : "Johannesburg",
		"date" : "2011-2012",
		"description" : "Wireless networking "
	},
	{
		"employer" : "FC Porto",
		"title" : "Soccer Player",
		"location" : "Porto",
		"date" : "2013 - Current",
		"description" : "Midfielder"

	},

	],
	displayWork : function (){
	for (i in Work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%",Work.jobs[i].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%",Work.jobs[i].title);
		var formattedEmpployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmpployerTitle);
		var formattedDate = HTMLworkDates.replace("%data%",Work.jobs[i].date);
		var formattedLocation = HTMLworkLocation.replace("%data%",Work.jobs[i].location);
		var formattedDescription = HTMLworkDescription.replace("%data%",Work.jobs[i].description);
		$(".work-entry:last").append(formattedDate);
		$(".work-entry:last").append(formattedLocation);
		$(".work-entry:last").append(formattedDescription);
	}

	}
}

var Projects = {
	"project" : [
	{
		"title" : "Information Systems Network Engineering Final Project",
		"date" : "2011-2012",
		"description" : "Project as part of the Network Engineering course at CTI South Africa",
		"images" : ["http://www.conceptdraw.com/samples/resource/images/solutions/network-diagram/network-diagram-LANFaultToleranceSystem.png","http://www.conceptdraw.com/samples/resource/images/solutions/network-diagram/network-diagram-System-Design.png"]
	}
	],

	displayProjects : function(){
		for (var i in Projects.project){
		$("#projects").append(HTMLprojectStart);
		var formattedProjectTitle = HTMLprojectTitle.replace("%data%",Projects.project[i].title);
		var formattedProjectDate = HTMLprojectDates.replace("%data%",Projects.project[i].date);
		var formattedProjectDescription = HTMLprojectDescription.replace("%data%",Projects.project[i].description);
		$(".project-entry:last").append(formattedProjectTitle);
		$(".project-entry:last").append(formattedProjectDate);
		$(".project-entry:last").append(formattedProjectDescription);
		for (images in Projects.project[i].images){
			var formattedProjectImage  = HTMLprojectImage.replace("%data%",Projects.project[i].images[images]);
			$(".project-entry:last").append(formattedProjectImage);
		}
		}
	}
}

var Bio = {
	"name" : "Ricardo Pinto",
	"role" : "Soccer Player and IT enthusiast",
	"contacts" : {
		"mobile" : "xxx-xxxx",
		"email" : "xxx@xxxx.xxx",
		"github" : "xxxxx_xxxx",
		"twitter" : "#xxxx",
		"location" : "Portugal"
	},
	"welcomeMessage" : "Welcome to my personal website",
	"skills" : ["Piloting","HTML","Javascript", "Jquery"],
	"biopic" : "url",

	displayBio : function(){
		formattedHeaderRole = HTMLheaderRole.replace("%data%",Bio.role);
		$("#header").prepend(formattedHeaderRole);
		formattedName = HTMLheaderName.replace("%data%",Bio.name);
		$("#header").prepend(formattedName);


		$("#header").append(HTMLbioPic.replace("%data%","images/fry.jpg"));
		$("#header").append(HTMLskillsStart);

		if (Bio.skills.length > 0) {
		for (i in Bio.skills){
			var formattedSkill = HTMLskills.replace("%data%",Bio.skills[i]);
			$("#skills").append(formattedSkill);
		}
	}
		$("#topContacts").append(HTMLmobile.replace("%data%",Bio.contacts.mobile));
		$("#topContacts").append(HTMLemail.replace("%data%",Bio.contacts.email));
		$("#topContacts").append(HTMLtwitter.replace("%data%",Bio.contacts.twitter));
		$("#topContacts").append(HTMLgithub.replace("%data%",Bio.contacts.github));
		$("#topContacts").append(HTMLlocation.replace("%data%",Bio.contacts.location));
		$("#footerContacts").append(HTMLmobile.replace("%data%",Bio.contacts.mobile));
		$("#footerContacts").append(HTMLemail.replace("%data%",Bio.contacts.email));
		$("#footerContacts").append(HTMLtwitter.replace("%data%",Bio.contacts.twitter));
		$("#footerContacts").append(HTMLgithub.replace("%data%",Bio.contacts.github));
		$("#footerContacts").append(HTMLlocation.replace("%data%",Bio.contacts.location));

}
}

var Education = {

	"schools" : [{
		"name" : "ESSMDF",
		"location" : "Lisbon",
		"degree" : "High School certificate",
		"majors" : ["Maths","Science"],
		"dates" : 2003,
		"url" : "http://www.fap.pt"
	},
	{
		"name" : "Airline Pilot Training Centre",
		"location" : "Port Elizabeth",
		"degree" : "Pilots License",
		"majors" : ["Piloting"],
		"dates" : 2004,
		"url" : "http://www.aptrac.co.za"
	},

	{
		"name" : "CTI",
		"location" : "Johannesburg",
		"degree" : "Information Systems Network Engineering Diploma",
		"majors" : ["Networking","Linux","Microsoft Server"],
		"dates" : 2011,
		"url" : "http://www.cti.co.za"
	}
    ],

    "onlineCourses" : [{
    	"title" : "Nano Degree Front End Developer",
    	"school" : "Udacity ",
    	"dates" : 2015,
    	"url" : "http://www.udacity.com"
    }],

    displayEducation : function (){
    	for (schools in Education.schools){
    		$("#education").append(HTMLschoolStart);
    		var formattedschoolName = HTMLschoolName.replace("%data%",Education.schools[schools].name).replace("#",Education.schools[schools].url);
    		$(".education-entry:last").append(formattedschoolName);
    		var formattedschoolDegree = HTMLschoolDegree.replace("%data%",Education.schools[schools].degree);
    		$(".education-entry:last").append(formattedschoolDegree);
    		var formattedschoolDates = HTMLschoolDates.replace("%data%",Education.schools[schools].dates);
    		$(".education-entry:last").append(formattedschoolDates);
    		var formattedschoolLocation = HTMLschoolLocation.replace("%data%",Education.schools[schools].location);
    		$(".education-entry:last").append(formattedschoolLocation);
    		var formattedschoolMajors = HTMLschoolMajor.replace("%data%",Education.schools[schools].majors);
    		$(".education-entry:last").append(formattedschoolMajors);
    	}
    	$("#education").append(HTMLonlineClasses);
    	for (schools in Education.onlineCourses){
    		$("#education").append(HTMLschoolStart);
    		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%",Education.onlineCourses[schools].title).replace("#",Education.onlineCourses[schools].url);
    		$(".education-entry:last").append(formattedOnlineTitle);
    		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%",Education.onlineCourses[schools].school);
    		$(".education-entry:last").append(formattedOnlineSchool);
    		var formattedOnlineDates = HTMLonlineDates.replace("%data%",Education.onlineCourses[schools].dates);
    		$(".education-entry:last").append(formattedOnlineDates);
    		var formattedOnlineURL = HTMLonlineURL.replace("%data%",Education.onlineCourses[schools].url).replace("#",Education.onlineCourses[schools].url);
    		$(".education-entry:last").append(formattedOnlineURL);

    	}
    }
} 


Bio.displayBio();
Work.displayWork();
Projects.displayProjects();
Education.displayEducation();
$("#mapDiv").append(googleMap);