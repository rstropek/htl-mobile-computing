// Note the use of a JavaScript class
class Person {
    get firstName() {
        return "Tom";
    }

    // Note the use of async/await
    async doSomethingAsync() {
        // Note the use of const
        const result = await Promise.resolve(42);
    }

    doSometing(callback) {
        callback(42);
    }
}

// Note the use of an arrow function
const p = new Person();
p.doSometing(result => console.log(result));
