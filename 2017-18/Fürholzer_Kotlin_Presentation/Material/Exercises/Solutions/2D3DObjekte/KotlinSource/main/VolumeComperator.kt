package main

import java.util.Comparator;

public object VolumeComperator : Comparator <Geometric3dObject>{
	public override fun compare(obj1:Geometric3dObject,obj2:Geometric3dObject) : Int{
		return (obj1.getVolume() - obj2.getVolume()).toInt();
	}
}