$(document).ready(function() {

    $.each(devProfile, function(key, valueObj) {

        if (key == 'pic') {
            console.log('<img src="' + valueObj + '" alt="dev pic" class="mx-auto d-block img-fluid rounded"/>');
            $('#dev-profile-data').append('<img src="' + valueObj + '" alt="dev pic" class="mx-auto d-block img-fluid rounded"/>');
        } else {
            $('#dev-profile-data').append("<p><b>" + key + ":</b>" + " " + valueObj + "</p>");
        }
    });


});

const devProfile = {
    "Name": ["Kevin Salgado"],
    "pic": "https://wallpaperaccess.com/full/2948867.jpg",
    "Title": "Student at the University of North Alabama, Help Desk Analyst at Hexagon Safety & Infrastructure",
    "Github": ["Kbrian5: https://github.com/KBrian5"],
    "Background Info": "University of North Alabama: ",
    "Hobbies": "",
    "Music": "",
    "Skills": ""
};