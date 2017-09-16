package main

abstract public class Geometric2dObject {
	//So sieht eine Abstrakte Klasse aus - Bei Abstracten Klassen wird open nicht benötigt
	abstract public fun getArea() : Double;
	abstract public fun getPermimeter() : Double;
	override abstract public fun toString() : String;
}