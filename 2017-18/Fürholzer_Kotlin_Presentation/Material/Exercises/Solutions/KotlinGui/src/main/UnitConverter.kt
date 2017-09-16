package main

//Statische Methoden sind nicht in einer Klasse!

public fun getCelsius(fahreinheit : String) : Any{
	try{
		var fahreinheitNum = fahreinheit.toDouble();
		return (fahreinheitNum - 32) / 1.8;
	}catch(ex : java.lang.NumberFormatException){
		return 0;
	}
	//Try & Catch funktionert wie in Java
}

public fun getFahreinheit(celsius : String) : Any{
	
	try{
		var celsiusNum = celsius.toDouble();
		println(celsius.toString());
		return celsiusNum * 1.8 + 32;
	}catch(ex : java.lang.NumberFormatException){
		return 0;
	}
}
