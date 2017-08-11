// Basic type 'Tuple'
let aTuple: [number, string] = [1, 'Hello'];
let aListOfTuples: Array<[number, string]> = [[1, 'Hello'], [2, 'World']];

// Note typesafe access of tuple members.
let numberInTuple: number = aTuple[0];
let stringInTuple: string = aTuple[1];
//numberInTuple = aTuple[1];

// Basic type 'enum'
enum Color { Red, Green, Blue };  // Note that first enum starts with value 0
let anEnum: Color = Color.Green;// Assignment; anEnum gets value 1
enum Color2 { Red = 0b001, Green = 0b010, Blue = 0b100 };
let enumName: string = Color[2];// Note getting string name from enum (here 'Blue')
enum AccessMode { 
    Read = 0b01, 
    Write = Read << 1,          // Write becomes 0b10
    ReadWrite = Read | Write    // Note computed member 
};
console.log(AccessMode[3]);     // Prints 'ReadWrite'
