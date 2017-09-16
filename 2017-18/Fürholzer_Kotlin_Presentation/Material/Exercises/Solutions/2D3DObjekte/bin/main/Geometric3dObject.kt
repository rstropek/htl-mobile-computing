package main

abstract public class Geometric3dObject{
	abstract public fun getVolume() : Double;
	abstract public fun getNetArea() : Double;
	abstract override public fun toString() : String;
}