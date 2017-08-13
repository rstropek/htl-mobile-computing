// Note that some code lines are commented in this sample. They
// would lead to compiler errors.

const anObject = { firstName: 'Foo', lastName: 'Bar', age: 99 };
anObject.firstName = 'John';

//anObject.anything = '...';
//anObject.age = "99";

// Note optional "age" in the following declaration
let anotherObject: { firstName: string, lastName: string, age?: number };
anotherObject = { firstName: 'Foo', lastName: 'Bar' };
