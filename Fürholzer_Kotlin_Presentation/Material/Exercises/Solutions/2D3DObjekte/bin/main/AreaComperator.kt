package main

import java.util.Comparator;

public object AreaComperator : Comparator<Geometric2dObject>{
	//Ein Objekt ist eine Klasse die nicht Intialisiert werden muss.
	//Sehr Praktisch wenn nur Methoden überschrieben werden müssen
	public override fun compare(obj1 : Geometric2dObject, obj2 : Geometric2dObject) : Int{
		return (obj1.getArea()-obj2.getArea()).toInt();
		//gecastet wird in Kotlin mit .toInt(), toDouble(), toChar(), ...
	}
}