package main

open public class Circle(radius : Double) : Geometric2dObject(){
	protected var radius : Double = radius;
	override public fun getArea() : Double{
		return Math.PI*this.radius*this.radius;
		//Wie in Java wird f�r Klassen wie Math kein Import ben�tigt
		//Wenn Kotlin in Java Bytecode kompilierd wird kann nur Math.PI benutzt werden
		//Wenn Kotlin nach JavaScript kompilierd wird stadtessen nur 'PI' benutzt
	}
	override public fun getPermimeter() : Double{
		return 2*this.radius*Math.PI;
	}
	override public fun toString() : String{
		return "Kreis [ L�nge = ${this.radius.toString()} ]";
	}
}