
interface IFriendable {
    callName: string;
}

// Wir haben Person schonmal definiert, so geht es nicht
class Person implements IFriendable {

    firstName: string;
    lastName: string;
    friends = new Array<IFriendable>();

    get callName() {
        return this.firstName;
    }

    friend(friend: IFriendable) {

        this.friends.push(friend);
    }
}

const bob = new Person();
const jane = new Person();

bob.friend(jane);


// Vererbung

class Animal {

    type: string;
    isDangerous = false;

    constructor(type: string, isDangerous = false) {

        this.type = type;

        if(isDangerous !== undefined) {
            this.isDangerous = isDangerous;
        }
    }
}

class Bear extends Animal {

    weight: number;

    constructor() {
        super("mammal");
    }
}

class Cat extends Animal implements IFriendable {

    name: string;

    constructor(name: string) {
        super("mammal");

        this.name = name;
    }

    get callName() {
        return this.name;
    }
}

const theBear = new Bear();
const kitty = new Cat("Kitty");

//bob.friend(theBear);
bob.friend(kitty);