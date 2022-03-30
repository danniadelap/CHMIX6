/*
 * --------------------------------------------------------------------
 * Simple Password Strength Checker
 * by Siddharth S, www.ssiddharth.com, hello@ssiddharth.com
 * for Net Tuts, www.net.tutsplus.com
 * Version: 1.0, 05.10.2009 	
 * --------------------------------------------------------------------
 */

$(document).ready(function() 
{
	let fuerzaContra;
	let caracterContra;
	let complejidad = $("#complejidad");
	let minContraLargo = 8;
	let puntajeBase = 0, puntaje = 0;
	
	let num = {};
	num.Exceso = 0;
	num.Superior = 0;
	num.Numeros = 0;
	num.Simbolos = 0;

	let bonus = {};
	bonus.Exceso = 3;
	bonus.Superior = 4;
	bonus.Numeros = 5;
	bonus.Simbolos = 5;
	bonus.Combo = 0; 
	bonus.FlatLower = 0;
	bonus.FlatNumber = 0;
	
	resultadoSalida();
	$(".inputContra").bind("keyup", checkVal);

function checkVal()
{
	init();
	
	if (caracterContra.length >= minContraLargo)
	{
		puntajeBase = 50;	
		analizarString();	
		calcComplejidad();		
	}
	else
	{
		puntajeBase = 0;
	}
	
	resultadoSalida();
}

function init()
{
	fuerzaContra= $(".inputContra").val();
	caracterContra = fuerzaContra.split("");
		
	num.Exceso = 0;
	num.Superior = 0;
	num.Numeros = 0;
	num.Simbolos = 0;
	bonus.Combo = 0; 
	bonus.FlatLower = 0;
	bonus.FlatNumber = 0;
	puntajeBase = 0;
	puntaje =0;
}

function analizarString ()
{	
	for (i=0; i<caracterContra.length;i++)
	{
		if (caracterContra[i].match(/[A-Z]/g)) {num.Superior++;}
		if (caracterContra[i].match(/[0-9]/g)) {num.Numeros++;}
		if (caracterContra[i].match(/(.*[!,@,#,$,%,^,&,*,?,_,~])/)) {num.Simbolos++;} 
	}
	
	num.Exceso = caracterContra.length - minContraLargo;
	
	if (num.Superior && num.Numeros && num.Simbolos)
	{
		bonus.Combo = 25; 
	}

	else if ((num.Superior && num.Numeros) || (num.Superior && num.Simbolos) || (num.Numeros && num.Simbolos))
	{
		bonus.Combo = 15; 
	}
	
	if (fuerzaContra.match(/^[\sa-z]+$/))
	{ 
		bonus.FlatLower = -15;
	}
	
	if (fuerzaContra.match(/^[\s0-9]+$/))
	{ 
		bonus.FlatNumber = -35;
	}
}
	
function calcComplejidad()
{
	puntaje = puntajeBase + (num.Exceso*bonus.Exceso) + (num.Superior*bonus.Superior) + (num.Numeros*bonus.Numeros) + (num.Simbolos*bonus.Simbolos) + bonus.Combo + bonus.FlatLower + bonus.FlatNumber;
	
}	
	
function resultadoSalida()
{
	if ($(".inputContra").val()== "")
	{ 
		complejidad.html("Esperando").removeClass("debil medio bueno exelente").addClass("default");
	}
	else if (caracterContra.length < minContraLargo)
	{
		complejidad.html("Al menos " + minContraLargo+ " caracteres por favor!").removeClass("medio bueno exelente").addClass("debil");
	}
	else if (puntaje<50)
	{
		complejidad.html("Debil!").removeClass("medio bueno exelente").addClass("debil");
	}
	else if (puntaje>=50 && puntaje<75)
	{
		complejidad.html("Promedio!").removeClass("bueno exelente").addClass("medio");
	}
	else if (puntaje>=75 && puntaje<100)
	{
		complejidad.html("Fuerte!").removeClass("exelente").addClass("bueno");
	}
	else if (puntaje>=100)
	{
		complejidad.html("Segura!").addClass("exelente");
	}
}

}
); 