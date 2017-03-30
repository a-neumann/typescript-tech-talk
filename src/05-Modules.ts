import { isLeapYear, Bird } from "./05-Modules-Exports";

let now = new Date();
let byrd = new Bird();

const bmw = { brand: "BMW" };

if (!isLeapYear(now)) {

    byrd.shitCar(bmw)
        .shitCar(bmw)
        .shitCar(bmw);
}

// Zugrriff auf private Eigenschaft
byrd.isEvil;