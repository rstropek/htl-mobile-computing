var customers = [
    { firstName: 'John', lastName: 'Doe' },
    { firstName: 'Jane', lastName: 'Smith'}
];

exports.getAllCustomers = function() {
    return customers;
}

exports.addCustomer = function(newCustomer) {
    customers.push(newCustomer);
}
