import { hi } from "./m.js";
// 这是一个注释
console.log("hello app");
let a = 10;

console.log(a);

console.log(hi);

// noImplicitAny配置项测试
function add(a: number, b: number) {
    return a + b
}

// noImplicitThis配置项测试
function fn2(this: any) {
    alert(this)
}

// strictNullChecks配置项测试
let box1 = document.getElementById('box1');
box1?.addEventListener('click', function() {
    alert('box1')
})