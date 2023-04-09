let list_in_USD = [
  { product: "pen", price: 1 },
  { product: "french fries", price: 3 },
  { product: "burgur", price: 2 },
  { product: "t-shirt", price: 10 },
  { product: "skechers shoes", price: 1000 },
  { product: "macbook pro", price: 15000 },
  { product: "laptop", price: 10000 },
];

let list_in_INR = list_in_USD.map((e) => (e.price = e.price * 80));

console.log(list_in_INR);