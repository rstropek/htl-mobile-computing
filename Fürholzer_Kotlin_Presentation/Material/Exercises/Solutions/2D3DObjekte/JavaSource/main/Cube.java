package main;

public class Cube extends Prism{
	private double len;
	public Cube(double length) {
		super(new Square(length),length);
		len = length;
	}
	public String toString() {
		return "W�rfel [ Seitenl�nge : "+this.len+" ]";
	}
}
