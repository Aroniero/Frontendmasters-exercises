// 1
// PREVIIOUS approach
function data() {
  return { a: 1, b: 2, c: 3 };
}

let temp = data();
let first = temp.a;
let second = temp.b;
let third = temp.c;

// DESTRUCTURING approach
function data() {
  return { a: 1, b: 2, c: 3, d: 4 };
}

let {
  a: first,
  b: second,
  ...third
  // third its gonna be seprate object with c + d
} = data();
// Position doesnt matter

// a) In sitution when we first declare variables and next do destructuring we have to use additional paranthesis.
let first, second;
({ a: first, b: second } = data());

// When u want to have reference to whole object then u dont have to make paranthetis for example:
let temp;
let first, second;
temp = { a: first, b: second } = data();

// 2 - Situation with nested patterns
// PREVIIOUS approach
function data() {
  return {
    a: 1,
    b: {
      c: 3,
      d: 4
    }
  };
}

let temp = data();
let a = temp.a;
let b = temp.b || {};
let c = b.c;
let d = b.d;

// DESTRUCTURING approach
function data() {
  return {
    a: 1,
    b:
      {
        c: 3,
        d: 4
      } || {}
  };
}

let {
  a,
  b: { c, d }
} = data();

// 3 - Situation with parameters in objects
// PREVIIOUS approach
function data(temp = {}) {
  let { a, b } = temp;
  // .....
}

// DESTRUCTURING approach
function data({ a, b } = temp) {
  // .....
}
