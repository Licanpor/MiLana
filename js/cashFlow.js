var objToday = new Date(),
	weekday = ['Lunes', 'Martes', 'Miércoles', 'Juves', 'Viernes', 'Sábado', 'Domingo'];
	dayOfWeek = weekday[objToday.getDay()],
	//domEnder = function() { var a = objToday; if (/1/.test(parseInt((a + "").charAt(0)))) return "ero";
	dayOfMonth = today + objToday.getDate() < 10 ? '0' + objToday.getDate() : objToday.getDate();
	months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
	curMonth = months[objToday.getMonth()];
var today = dayOfWeek + ", " + dayOfMonth + " de " + curMonth;

document.getElementsByClassName('current_date')[0].textContent = today;