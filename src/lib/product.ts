class FoodProduct {
    // properties / fields
    id = 0;
    name = '';
    icon = '';
    // constructor
    constructor(id: number, name: string, icon: string) {
        this.id = id;
        this.name = name;
        this.icon = icon;
    }

    // functions
}

let fp = new FoodProduct(1, 'Pizza slice', 'icon.jpg');