var objToday = new Date(),
	weekday = ['Lunes', 'Martes', 'Miércoles', 'Juves', 'Viernes', 'Sábado', 'Domingo'];
	dayOfWeek = weekday[objToday.getDay()],
	domEnder = function() { var a = objToday; if (/1/.test(parseInt((a + "").charAt(0)))) return "ero"; a = parseInt((a + "").charAt(1)); return 1 == a ? "st" : 2 == a ? "nd" : 3 == a ? "rd" : "th" }(),
	dayOfMonth = today + ( objToday.getDate() < 10) ? '0' + objToday.getDate() + domEnder : objToday.getDate() + domEnder,
	months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
	curMonth = months[objToday.getMonth()],
var today = dayOfWeek + " " + dayOfMonth + " de " + curMonth;

document.getElementsByTagName('h1')[0].textContent = today;
