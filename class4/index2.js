//map, filter and arrow function

// const ip = [1, 2, 3, 4, 5]; //-> input array
// function transform() {
//   //  -> transformation function
//   return i * 2;
// }

// const ans = ip.map(function); // -> map function using both
// conosole.log(ans); // -> to give answer

// ip.map(function(){

// })

//in case of finding the even values
const ip = [1, 2, 3, 4, 5, 6, 7, 7];
// const even = [];
// for (let i = 0; i < ip.length; i++) {
//   if (i % 2 == 0) {
//     even.push(i);
//   }
// }
// console.log(even);

//filtering logic

const ans = ip.filter((n) => {
  if (n % 2 == 0) {
    return true;
  } else {
    return false;
  }
});
console.log(ans);
