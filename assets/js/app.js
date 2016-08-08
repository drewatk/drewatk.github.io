var main = function() {
    var showResume = false
    var toggleResume = function(event) {
        $('#resume').fadeToggle('slow');
        $('#buttons').fadeToggle('fast')
    }
    $('#resume-button').click(toggleResume);
}

$(document).ready(main);