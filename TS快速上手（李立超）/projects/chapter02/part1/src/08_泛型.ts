// function name(a:any):any {
  // return a
// }

/**
 * 在定义函数或者类时，如果遇到类型不明确就可以使用泛型
 * 
 */
function fn<T>(a:T):T {
  return a
}

//可以直接调用具有泛型的函数
let result1=fn(10)//不指定泛型，TS可以自动对类型进行推断

let result2=fn<string>("hello")//指定泛型

//泛型可以指定多个
function fn2<T,K>(a: T,b:K): T {
  console.log(b)
  return a
}
let result3 = fn2<string,number>("hello",123)

//
interface Inter{
  length:number
}

//T extends Inter 表示泛型T必须是Inter实现类（子类）
function fn3<T extends Inter>(a:T):number {
  return a.length
}
const result4 = fn3({length:3})

class myClass<T> {
  constructor(public name:T) {
    
  }
}