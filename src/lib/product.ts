import {Product} from "./interfaces"


abstract class ProductBase implements Product {
    // constructor
    // This form automatically "maps" parameters to properties of the same name.
    // This form is called "auto-implemented properties."
    constructor(public id: number, public name: string, public icon: string) {}

    validate() : boolean {
        throw new Error('Not implemented');
    }
}


export class FoodProduct extends ProductBase {
    // functions
    validate() : boolean {
        return !!this.id && !!this.name && !!this.icon
    }
}
