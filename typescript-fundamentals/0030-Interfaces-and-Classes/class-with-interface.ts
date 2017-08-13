import {IPerson} from './interface'

export class Person implements IPerson {
  public firstName: string;
  public lastName: string;
  public age: number;

  // Note that 'Person' does not explicity say that it is
  // compatible with 'IPersonWithDescription', but it implicitly is
  // because all necessary members are implemented. This concept is called
  // 'structural subtyping' (details in
  // http://www.typescriptlang.org/docs/handbook/type-compatibility.html)
  public getDescription(): string {
    return `${this.firstName} ${this.lastName} is ${this.age} years old`;
  }
}
