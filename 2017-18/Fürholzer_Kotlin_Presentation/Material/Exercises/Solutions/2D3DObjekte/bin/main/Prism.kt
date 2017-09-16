package main

abstract public class Prism(groundArea : Geometric2dObject,height : Double) : Geometric3dObject(){
	protected val groundArea : Geometric2dObject = groundArea;
	protected var height : Double = height;
	override public fun getVolume() : Double{
		return this.height * this.groundArea.getArea();
	}
	override public fun getNetArea() : Double{
		return (2*this.groundArea.getArea())+(this.groundArea.getPermimeter()*this.height);
	}
}