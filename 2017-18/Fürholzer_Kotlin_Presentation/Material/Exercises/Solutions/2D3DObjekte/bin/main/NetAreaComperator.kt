package main

import java.util.Comparator;

public object NetAreaComperator : Comparator<Geometric3dObject>{
	public override fun compare(obj1 : Geometric3dObject, obj2 : Geometric3dObject) : Int{
		return (obj1.getNetArea() - obj2.getNetArea()).toInt();
	}
}