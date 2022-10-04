$(document).ready(function() {

    $.each(devProfile, function(key, valueObj) {

        if (key == 'pic') {
            console.log('<img src="' + valueObj + '" alt="dev pic" class="mx-auto d-block img-fluid rounded"/>');
            $('#dev-profile-data').append('<img src="' + valueObj + '" alt="dev pic" class="mx-auto d-block img-fluid rounded"/>');
        } else {
            $('#dev-profile-data').append("<p><b>" + key + ":</b>" + " " + valueObj + "</p>");
        }
    });

    $('#month-box li').click(function() {
        $('#console-box').text($(this).text());
        $(this).toggleClass('selected').siblings().removeClass('selected');;
    });


});

const devProfile = {
    "Name": ["Kevin Salgado"],
    "pic": "https://camo.githubusercontent.com/63dd79341795dcabe86885975fbdb6cd45203a9b8db05ee09ee54425a1435c99/68747470733a2f2f6672696e6b6961632e636f6d2f6d656d652f5330374530382f313030333736382e6a70673f6236346c696e65733d4945527649456b6761323576647942336147463043694169636d686c6447397961574e6862434a745a574675637a383d",
    "Title": "Student at the University of North Alabama, Help Desk Analyst at Hexagon Safety & Infrastructure",
    "Github": ["Kbrian5: https://github.com/KBrian5"],
    "Background Info": "Auburn Univeristy: MIS '99, Masters MIS '04, Doctorate MGT of IS & Innovation '08",
    "Hobbies": "JAM Stack, Frisbee",
    "Music": "what? barely keeping up with my real ones.",
    "Skills": "html5, css3, bs4, jQuery, js, json, so many wow...visual studio code, github, gist, markdown, codepen..."
};