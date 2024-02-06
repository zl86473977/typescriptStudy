import { hi } from "./m";
function sum(a: number, b: number): number {
  return a + b;
}

console.log(sum(123, 456));
console.log("haha");

console.log("hi:", hi);

const obj = { name: "孙悟空", age: 111 };
obj.age = 18;
console.log(obj);

let fn = (a: number, b: number) => a + b;
fn(123, 456);

// Promise.resolve(1).then(res => {
//   console.log(res);
// })
