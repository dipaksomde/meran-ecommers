const arr = [1, 2, 3]
const cart = [
    { price: 10, qty: 2 },
    { price: 5, qty: 4 },
]

// let sum = 0
// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i]
// }
// console.log(sum)
const x = cart.reduce((sum, item) => sum + (item.price * item.qty), 0)
console.log(x)