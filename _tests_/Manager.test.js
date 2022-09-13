const Manager = require('../lib/Manager');

test('creates an Manager object', () => {
    
    const manager = new Manager('Thomas', 1, 'brothers@limited.com', 4);

    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('gets role of employee', () => {
    const manager = new Manager('Thomas', 1, 'brothers@limited.com');


    expect(manager.getRole()).toEqual("Manager");
});