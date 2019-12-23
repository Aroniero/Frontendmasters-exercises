//
// Imperative aproach
function data() {
  return [1, 2, 3, 4];
}

let temp = data();
let first = temp[0];
let second = temp[1];
let third = temp[2];
let fourth = tmp.slice(3);

// Destructuring aproach
function data() {
  return [1, 2, 3, 4];
}

let [first, second, third, ...fourth] = data();

//******************************* */
// Imperative aproach
function data(temp) {
  let [first, second, third];
}

// Destructuring aproach
function data([first, second, third] = []) {
  // .....
}
