package main

public open class Square(len : Double) : Rectangle(len,len){
	//Hier wird von Rectangle abgeleitet
	public override fun toString() : String{
		return "Quadrat [ L�nge = ${super.length.toString()} ]";
	}
}