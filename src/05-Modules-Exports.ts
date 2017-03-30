import { leapYear } from "is";

export function isLeapYear(year: Date) {

    return leapYear(year.getFullYear());
};

export class Bird extends Animal {

    // es können auch Zugriffsmodifikatoren verwendet werden
    private isEvil = true;

    constructor() {
        super("bird", false);
    }

    shitCar(car: any) {
        
        console.log("poop");

        return this;
    }
}