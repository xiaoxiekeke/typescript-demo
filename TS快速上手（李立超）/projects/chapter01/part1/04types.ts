// a表示一个js对象
let a:object;
a={}
a=function(){

}


//{}用来指定对象中可以包含哪些属性
//属性名后加？表示属性是可选的
let b:{name:string,age?:number}
b={name:'孙悟空'}
b = { name: '孙悟空',age:18 }

//要求该变量有name属性，其他属性有没有不管
let c:{name:string,[propName:string]:any}
c = { name: '孙悟空', age: 18 }

//定义d函数类型结构的类型声明：
/**
 * 语法：(形参:类型,形参:类型,......)=>返回值
 */
let d:(a:number,b:number)=>number
d=function (n1:number,n2:number) {
 return n1+n2 
}

/**
 * 数组的声明方式
 * 类型[]
 * Array<类型>
 */
//string[]表示字符串数组
let e:string[]
e=['a','b','c','d']
let f:number[]

let g:Array<number>;
g=[1,2,3]


/**
 * y元祖，就是固定长度的数组，（效率更高）
 * 语法：[类型,类型,类型]
 */
let h:[string,number]
h=['hello',123]

/**
 * enum枚举 将所有可能的情况列举出来
 */
enum Gender{
  male,
  female
}
let i:{name:string,gender:Gender}
i={
  name:'孙悟空',
  gender:Gender.male//male
}


//&表示同时，可以连接两个对象
let j:{name:string}&{age:number}
j={name:'孙悟空',age:18}


//类型的别名,可以简化类型的使用
let k:1|2|3
let l: 1 | 2 | 3
type myType = 1 | 2 | 3
let m:myType