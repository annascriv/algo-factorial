function factorial(num) {
let product = 1;
  if (num===0) {
    return 1;
  } else {

  while (num>=1) {
    product*=num;
    num--;
  }
}
  return product;
}
//console.log(factorial(0))
module.exports = factorial;
