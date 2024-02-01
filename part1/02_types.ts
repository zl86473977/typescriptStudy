// 【不常用】object表示一个js对象
let a: object;
a = {};
a = function () {};
// --------------------------------------------

// {}用来指定对象中可以包含哪些属性
// 语法：{属性名：属性值，属性名：属性值}
// 在属性名后边加上? 表示属性是可选的
let b: { name: string; age?: number };
b = { name: "卡卡罗特" };

// [propName: string]: any 表示任意类型的属性
let c: { name: string; [key: string]: any };
c = { name: "雅木叉", a: 1, b: "ss" };

/**
 * 设置函数结构的类型声明
 * 语法： (形参：类型，形参：类型，...) => 返回值
 */
let d: (a: number, b: number) => number;
d = function (n1, n2) {
  return n1 + n2;
};

/**
 * 数组的类型声明：
 * 1. 类型[]
 * 2. Array<类型>
 */
// string[]表示自负床数组
let e: string[];
e = ["a", "b", "c"];
let f: number[];
let g: Array<number>;

/**
 * 元组，元组就是固定长度的数组
 * 语法：[类型，类型，类型...]
 */
let h: [string, string];
h = ["abc", "hello"];

/**
 * enum 枚举
 */
enum Gender {
  "male",
  "female",
}
let i: { name: string; gender: Gender };
i = {
  name: "萧炎",
  gender: Gender.male,
};

// &表示同时
let j: { name: string } & { age: number };
j = { name: "悟空", age: 19 };

type OneToFive = 1 | 2 | 3 | 4 | 5;
let k: OneToFive;
k = 1;
let l: OneToFive;
k = 5;


export default {a}