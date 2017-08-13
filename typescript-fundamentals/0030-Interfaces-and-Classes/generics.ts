interface ICursor<T> {
    readonly current: T;
    moveNext(): boolean;
};
class Cursor<T> implements ICursor<T> {
    private index = -1;
    constructor(private list: ReadonlyArray<T>) { }
    get current(): T {
        if (this.index < 0) throw new Error("moveNext never called");
        return this.list[this.index];
    }
    moveNext(): boolean {
        if (this.list.length == 0 || this.index >= (this.list.length - 1)) return false;
        this.index++;
        return true;
    }
}
let c = new Cursor([1, 2, 3, 4]);
while (c.moveNext()) console.log(c.current);