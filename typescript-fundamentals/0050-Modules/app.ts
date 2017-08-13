import * as myModule from './module';
import MyThirdClass from './anotherModule';

const c1 = new myModule.MyFirstClass();
console.log(c1.greeting);

const c2 = new myModule.MySecondClass();
console.log(c2.greeting);

const c3 = new MyThirdClass();
console.log(c3.greeting);
