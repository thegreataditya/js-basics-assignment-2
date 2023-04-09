let interval = 3000;
let count = 1000;

setInterval(() => {
  console.log(interval - count);
  count += 1000;
}, 1000);

setInterval(() => {
  count = 1000;
  console.log(Math.random());
}, interval);