export interface ICustomer {
    firstName: string;
    lastName: string;
}

var customers: ICustomer[] = [
    { firstName: 'John', lastName: 'Doe' },
    { firstName: 'Jane', lastName: 'Smith'}
];

export function getAllCustomers(): ICustomer[] {
    return customers;
}

export function addCustomer(newCustomer) {
    customers.push(newCustomer);
}
