enum Color {Red, Green, Blue}
let colorName: Color = Color.Green;
console.log(colorName, typeof colorName);

let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;
console.log('strLength-', strLength);

// JS中的函数是不考虑参数的类型和个数的
function sum(a, b) {
    return a + b;
}
sum(123, 456)