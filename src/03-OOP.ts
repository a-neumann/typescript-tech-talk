
const myCustomer = {
    firstName: "John",
    lastName: "Doe",
    // ! implicit any
    addOrder: (order) => {
        return order.toString();
    }
};

// TypeScript erkennt, dass orderAsString ein string wird

let orderAsString = myCustomer.addOrder({ id: 123456 });


// Interfaces

interface IOrder {
    id: string;
}

// Klassen

class Customer {

    static staticProp = "customer";

    firstName: string;
    lastName: string;

    addOrder(order: IOrder) {

        console.log(`${this.firstName} has ordered ${order.id}!`);
    }
}

// Zugriff auf statische Eigenschaft
Customer.staticProp;

var john = new Customer();

// "date" gehört nicht zu IOrder
john.addOrder({ id: "31415926535", date: new Date("01-01-2017") });

interface IOrderWithDate extends IOrder {
    date: Date
}

let newOrder: IOrderWithDate = { id: "31415926535", date: new Date("01-01-2017") };

john.addOrder(newOrder);