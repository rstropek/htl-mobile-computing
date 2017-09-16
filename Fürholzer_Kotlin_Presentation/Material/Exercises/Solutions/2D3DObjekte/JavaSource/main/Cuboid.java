package main;

public class Cuboid extends Prism{
	private double len;
	private double width;
	private double height;
	public Cuboid(double len,double width,double height) {
		super(new Rectangle(len,width), height);
		this.len=len;
		this.height=height;
		this.width = width;
	}
	public String toString() {
		return "Rechteck [ Länge : "+len+" Höhe : "+height+ " Breite :"+width +" ]";
	}
}
