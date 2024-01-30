// 也可以直接使用字面量进行类型声明
let a:10;
a = 10;
// a = 11

// 可以使用 | 来连接多个类型
let b: "male" | "female"
b = "male"
b = "female"

let  c: boolean | string
c = true;
c = 'hello'

// any表示的是任意类型，一个变量设置类型为any后相当于对该变量关闭了TS的类型检查
// 声明变量如果不指定类型，则TS解析器会自动判断变量的类型喂any（隐式的any）
let d: any;
d = 'hello'
d = 10;

// unknown 表示未知类型的值
let e: unknown
e = 10
e = 'hello'

let s:string;
// d的类型是any，它可以复制给任意变量
s = d
console.log('s', s);
// unknown实际上就是一个类型安全的any
// unknown类型的变量，不能直接赋值给其他变量
// 解决方法1
if(typeof e === 'string') {
    s = e;
}
// 解决方法2，类型断言
s = e as string
s = <string>e

function fun(num) {
    if(num > 0) {
        return 1
    } else {
        return true
    }
}