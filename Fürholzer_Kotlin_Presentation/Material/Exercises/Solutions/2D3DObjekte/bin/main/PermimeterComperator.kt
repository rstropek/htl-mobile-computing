package main;

import java.util.Comparator

public object PermimeterComperator : Comparator<Geometric2dObject>{
	public override fun compare(obj1 : Geometric2dObject , obj2 : Geometric2dObject) : Int{
		return (obj1.getPermimeter() - obj2.getPermimeter()).toInt();
	}
}