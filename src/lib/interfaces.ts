export interface Product {
    id: number,
    name: string,
    icon: string,
    description? : string,
}

let product: Product = {
    id: 12,
    name: 'SomeProduct',
    icon: 'some_pic.jpg',
    description: 'some_description'
}
