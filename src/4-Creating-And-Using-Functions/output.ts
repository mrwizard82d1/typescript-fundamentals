import { productsURL } from "../lib";

const prefix = '🐉 ';

type ProductType = {
  id: number,
  name: string,
  icon?: string,
};

function layoutProducts(products: ProductType[]) {
  function makeProductHtml(product: ProductType) : string  {
    return `
    <span class="card-id">#${product.id}</span>
        <i class="card-icon ${product.icon} fa-lg"></i>
    <span class="card-name">${product.name}</span>
    `
  }

  function makeCardHtml(product: ProductType) : string {
    return `
    <li>
        <div class="card">
            <divmak class="content">
                ${makeProductHtml(product)}
            </div>
        </div>
    </li>
    `
  }

  const items = products.map(p => makeCardHtml(p));
  const productsHtml = `<ul>${items.join('')}</ul>`
  return productsHtml;
}

export default async function updateOutput(id: string) {
  // Note that the `id` parameter is **not** the product ID but the ID of the `div` in the page.
  const products = await getProducts();
  const output = document.querySelector(`#${id}`)
  const html = layoutProducts(products);

  if (output && html) {
    output.innerHTML = html;
  }
}

async function getProducts(): Promise<ProductType[]> {
  const response : Response = await fetch(productsURL);
  let products: ProductType[] = await response.json();
  return products;
}

// Run the learning samples. This works even though `runLearningSamples` is not yet defined because JavaScript and
// TypeScript hoist functions to the semantic top of the module itself.
runTheLearningSamples();

function runTheLearningSamples() {
  function displayProductInfo(id: number, name: string) {
    // We are learning about typed parameters
    console.log(`${prefix} typed parameters`);
    console.log(`product id=${id}, name=${name}`)
  }

  displayProductInfo(10, 'Pizza');

  // Again, I take advantage of function hoisting
  console.log(`${prefix} function declaration`);
  console.log(`${addNumbersDeclaration(7, 11)}`);

  function addNumbersDeclaration(x: number, y: number): number {
    const sum: number = x + y;
    return sum;
  }

  // Remember, function **expressions** are **not** hoisted to the top of the module.
  const addNumbersExpression = function (x: number, y: number) {
    const sum: number = x + y;
    return sum;
  }

  console.log(`${prefix} function expression`);
  console.log(`${addNumbersExpression(5, 8)}`);

  const sampleProducts = [
    {
      id: 10,
      name: 'Pizza slice',
      icon: `fas fa-pizza-slice`
    },
    {
      id: 20, name: 'Ice cream', icon: 'fas fa-ice-cream' },
    {
      id: 30,
      name: 'Cheese',
      icon: 'fas fa-cheese'
    },
  ];

  function getProductNames() : string[] {
    return sampleProducts.map((p)=> p.name);
  }

  console.log(`${prefix} return array`);
  console.log(getProductNames());

  function getProductById(id: number) : ProductType | undefined {
    return sampleProducts.find(p => p.id === id);
  }

  console.log(`${prefix} ProductType`);
  console.log(getProductById(10));
  console.log(getProductById(21));

  function displayProducts(products: ProductType[]) : void{
    const productNames = products.map(p => p.name.toLowerCase());
    const msg = `Sample products include ${productNames.join(', ')}`;

    console.log(`${prefix} return void`);
    console.log(`${msg}`);
  }

  displayProducts(sampleProducts);
}
