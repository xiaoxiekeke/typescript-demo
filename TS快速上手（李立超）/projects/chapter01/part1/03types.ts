//直接使用字面量来进行类型声明
let a:10;
a=10

//可以使用|来链接多个类型（联合类型 ）
let b:"male"|"female"
b="male"
b ="female"

let c:boolean|string;
c=false;
c="false"

//any类型 表示关闭该变量的类型检测（不建议使用）
let d:any;
// let d;隐式any
d=1
d="10"
d=false


// unknown表示未知类型
let e:unknown
e = 1
e = false
e = "10"



let s:string;
//d的类型是any它可以赋值给任意变量
s=d

//unknown是类型安全的any
//e的类型是unknow，它不可以赋值给其他类型变量 
// s=e
if(typeof e==="string"){
  s=e
}

//类型断言，用来告诉解析器变量的实际类型
/**
 * 语法：
 * 变量 as 类型
 * <类型>变量
 */
s=e as string
s=<string> e 


//void表示空，表示没有返回值(可以是null或者undefined)
function fn():void {
  return null
}

//never表示永远没有返回值（连null和undefined都没有）
function fn1(): never {
  throw new Error("报错了");
  
}