import {IPerson} from './interface'
import {Person} from './class-with-interface';

class SimplePerson {
    // Note that 'SimplePerson' does not explicity say that it is
    // compatible with 'IPerson', but it still is.
    constructor(public firstName: string, public lastName: string) { }

    public getDescription() { return `I am ${this.firstName} ${this.lastName}`; }

    get fullName() { return `${this.firstName} ${this.lastName}`; }
}

let p: IPerson;
p = new Person();
p = new SimplePerson('Foo', 'Bar');
console.log((<SimplePerson>p).fullName);
p = { firstName: 'Foo', lastName: 'Bar' };
p = { firstName: 'Foo', lastName: 'Bar', age: 99 };
//p = { firstNme: 'Foo', lastName: 'Bar', age: 99 };
