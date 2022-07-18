export class FoodProduct {
    // properties / fields

    // constructor
    // This form automatically "maps" parameters to properties of the same name.
    // This form is called "auto-implemented properties."
    constructor(public id: number, public name: string, public icon: string) {}

    // functions
    validate() : boolean {
        return !!this.id && !!this.name && !!this.icon
    }
}

let fp = new FoodProduct(1, 'Pizza slice', 'icon.jpg');