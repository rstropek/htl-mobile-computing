import * as loki from 'lokijs';

export class Datastore {
    constructor(public db: loki, public customers: loki.Collection) { }
}

export function init(): Datastore {
    const db = new loki('./data.db', { autosave: true });

    let customers = db.getCollection('customers');
    if (!customers) {
        customers = db.addCollection('customers');
    }

    return new Datastore(db, customers);
}