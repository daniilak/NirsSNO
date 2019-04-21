$(document).ready(function () {

	$(document).on('change', '#events', function() {
    	window.location.replace("https://ais.snochuvsu.ru/print?id=" + $('#events :selected').val());
    })

});