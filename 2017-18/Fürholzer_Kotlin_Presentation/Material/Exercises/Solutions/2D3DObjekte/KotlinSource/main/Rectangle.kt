package main

public open class Rectangle (length : Double, width : Double) : Geometric2dObject(){
	//Das Schl�sselwort open erlaubt es aus dieser Klasse weiter abzuleiten
	//Falls open nicht gegeben ist darf nicht abgeleitet werden
	protected var length : Double = length;
	private var width : Double = width;
	//Konstruktor kann auch direkt in der resten Zeile festgelegt werden
	public override fun getArea() : Double{
		//Wenn eine Methode �berschrieben wird muss immmer das schl�sselwort 'override benutzt werden
		return this.width*this.length;
	}
	public override fun getPermimeter() : Double{
		return 2*(this.width*this.length);
	}
	public override fun toString() : String{
		return "Rechteck [ L�nge = ${this.length.toString()} ; Breite = ${this.width.toString()} ]";
		//arbitrary expressions wie in Javascript sind auch m�glich
	}
}