export interface Product {
    id: number,
    name: string,
    icon: string,
    description? : string,
}

type ProductAlias =
    string |
    {
        id: number,
        name: string,
        icon: string,
        description?: string,
    }

let product: ProductAlias = 'Food';

enum ProductType {
    Sporting,
    Home
}
let pt: ProductType = ProductType.Sporting;

// A "string literal" type. The string must be the union of the string literals
type ProductTypeList = 'SPORTING' | 'HOME';
let ptl: ProductTypeList = 'SPORTING';
