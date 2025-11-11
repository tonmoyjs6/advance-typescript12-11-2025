let value: unknown = "TypeScript is awesome!";

// 🧠 TODO:
// 1️⃣ Assert 'value' as a string and get its length
// 2️⃣ Assert 'value' as a number (just for experiment) and multiply by 2
// 3️⃣ Print both results


const valueOfString= (value as string).length
const valueofStringMultipl=(valueOfString as number)*2
console.log(valueOfString,valueofStringMultipl);
// kg to gram convertor ->type assertion

// ! how to define variable type by own