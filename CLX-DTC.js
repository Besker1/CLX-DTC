/**
 * using parameters can make it more dynamic and be able to be used for more than two numbers.
 * make a function to call CLX with a parameter of start to end
 *
 * make a for loop which would run from start to end
 *
 * also make anynomous function with for loop that start with 1 end 100
 *  for numbers multiples of 3 and 5 console.log(CLXDTC)
 *  for every number multiples of 3, console.log(CLX)
 *  for multiples of 5 console.log(DTC)
 *  for everything else print the number
 * time complexity 0(n)
 *
 *
 * "npm run test" to start progam
 */

// const Clx = (start, end) => {
//   for (let i = start; i <= end; i++) {
//     if (i % 15 == 0) {
//       console.log("CLXDTC");
//     } else if (i % 3 == 0) {
//       console.log("CLX");
//     } else if (i % 5 == 0) {
//       console.log("DTC");
//     } else {
//       console.log(i);
//     }
//   }
// };

// Clx(1, 100);

const Clx = () => {
  for (let i = 1; i <= 100; i++) {
    if (i % 15 == 0) {
      console.log("CLXDTC");
    } else if (i % 3 == 0) {
      console.log("CLX");
    } else if (i % 5 == 0) {
      console.log("DTC");
    } else {
      console.log(i);
    }
  }
};

Clx();
