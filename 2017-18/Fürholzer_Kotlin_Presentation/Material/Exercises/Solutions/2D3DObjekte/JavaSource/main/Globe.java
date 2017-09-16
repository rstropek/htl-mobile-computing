package main;

public class Globe extends Geometric3dObject {
	private double radius;
	public Globe(double rad) {
		this.radius=rad;
	}
	public double getNetArea() {
		return Math.PI*this.radius*4;
		//Keine Garantie auf Richtigkeit
	}

	public double getVolume() {
		return Math.PI*this.radius*4/3;
	}

	public String toString() {
		return "Kugel [ Radius : "+this.radius+" ]";
	}

}
