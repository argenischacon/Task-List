/* var numero1 = prompt ("Ingrese el primer numero: ")
var numero2 = prompt ("Ingrese el segundo numero: ")

if(numero1 > numero2){
    console.log("El numero mayor es: "+numero1)
}else{
    console.log("El numero mayor es "+numero2)
} */


var fecha_string = prompt ("Ingrese una fecha: ","MM/DD/YYYY")
var fecha = new Date(fecha_string) 
var dias = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"]

alert ("La fecha introducida es: "+fecha.getDate()+"/"+(fecha.getMonth()+1)+"/"+fecha.getFullYear()+
"\nDia de la semana: "+dias[fecha.getDay()])


