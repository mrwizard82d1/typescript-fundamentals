abstract class ProductBase {
    // constructor
    // This form automatically "maps" parameters to properties of the same name.
    // This form is called "auto-implemented properties."
    constructor(public id: number, public name: string, public icon: string) {}

    validate() : boolean {
        throw new Error('Not implemented');
    }
}


let pb = new ProductBase(1, 'foo', 'bar');

export class FoodProduct extends ProductBase {
    // functions
    validate() : boolean {
        return !!this.id && !!this.name && !!this.icon
    }
}

class SportingGoodsProduct extends ProductBase {
    constructor (id: number, name: string, icon: string) {
        super(id, name, icon);
    }
}
