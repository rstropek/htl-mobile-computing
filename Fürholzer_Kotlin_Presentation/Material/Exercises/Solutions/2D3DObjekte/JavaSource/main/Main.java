package main;

import java.util.ArrayList;

public class Main {
	public static void main(String[] args) {
		ArrayList<Geometric2dObject> objects2d = new ArrayList<>();
		ArrayList<Geometric3dObject> objects3d = new ArrayList<>();
		
		objects2d.add(new Square(12.5));
		objects2d.add(new Rectangle(4.5,17));
		objects2d.add(new Rectangle(9,4));
		objects2d.add(new Circle(13));
		objects2d.add(new Circle(7.5));
		objects2d.sort(AreaComperator.INSTANCE);
		//In Java wird eine Instanz eines Kotlin Objects mithilfe von .INSTANCE erstellt
		System.out.println("2D - Objekte sortiert nach Fläche");
		System.out.println(objects2d);
	}
}
