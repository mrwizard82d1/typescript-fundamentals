const prefix = '🐉 ';

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

  function addNumbersDeclaration(x: number, y: number) {
    const sum: number = x + y;
    return sum;
  }
}
