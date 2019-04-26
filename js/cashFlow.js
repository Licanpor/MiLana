	var objToday = new Date();
	weekday = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
	dayOfWeek = weekday[objToday.getDay()];
	dayOfMonth = today + objToday.getDate() < 10 ? '0' + objToday.getDate() : objToday.getDate();
	months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
	curMonth = months[objToday.getMonth()];
var today = dayOfWeek + ", " + dayOfMonth + " de " + curMonth;

document.getElementsByClassName('current_date')[0].textContent = today;


/*
function balanceActualitation() {
	var cash = document.getElementById("balanceCash").innerHTML;
	var spen = document.getElementsById("spending").value;
}
*/
