var fecha = new Date(2001, 2, 18) 
var diasDeLaSemana = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"]
var diaSemana = diasDeLaSemana [fecha.getDay()]
var diaMes = fecha.getDate()
var mes = fecha.getMonth() + 1
var year = fecha.getFullYear()

alert ("Dia de la semana: "+diaSemana+"/ Día del mes: "+diaMes+"/ Mes: "+mes+"/ Año: "+year) 




