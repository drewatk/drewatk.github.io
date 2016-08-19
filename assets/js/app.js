var main = function() {
    $('#resume-button').click(function(event) {
        $('#resume').fadeToggle('slow');
        $('#buttons').toggle('fast');
    });
    $('#back-button').click(function(event) {
        $('#buttons').toggle('fast');
        $('#resume').fadeToggle('slow');

    });
};
$(document).ready(main);
