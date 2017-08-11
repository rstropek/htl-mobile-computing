// Basic data type 'any'
let anything: any = false;
anything = 5.0;
let arrayOfAnything: any[] = [1, new Date(), 'Foo Bar', false];

// Note the type assertation here. The following lines do no runtime checking!
let aDecimal: number = <number>anything;
let aSecondDecimal: number = anything as number;

// Basic type 'Array'
let aList: number[] = [1, 2, 3, 4];
let aListWithDifferentTypes: (number | string)[] = [1, 'Hello'];
// Note 'Union Type' here
let anotherList = [1, 2, 3];
let yetAnotherList: Array<number> = [1, 2, 3];

// Note typesafe array operations.
aList.push(5);
//aList.push('Foo Bar');
