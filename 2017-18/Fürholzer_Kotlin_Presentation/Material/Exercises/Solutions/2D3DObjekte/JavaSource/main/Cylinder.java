package main;

public class Cylinder extends Prism {
	private double height;
	private double rad;
	public Cylinder(double rad,double height) {
		super(new Circle(rad),height);
		this.height=height;
		this.rad=rad;
	}
	public String toString() {
		return "Zylinder : [ Radius : "+this.rad+" Höhe : "+this.height+" ]";
	}
}
