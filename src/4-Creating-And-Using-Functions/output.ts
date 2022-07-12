const prefix = '🐉 ';

type ProductType = {
  id: number,
  name: string,
  icon?: string,
};

export default async function updateOutput(id: string) {
  // Note that the `id` parameter is **not** the product ID but the ID of the `div` in the page.
  // TODO
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
