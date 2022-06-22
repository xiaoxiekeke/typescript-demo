"use strict";
/**
 * 使用class关键字定义一个类
 * 对象中包括两个部分
 * 属性
 * 方法
 */
class Person {
    constructor() {
        //定义实例属性
        this.name = "孙悟空";
        //readonly表示只读属性
        this.height = 180;
    }
    //定义实例方法
    sayHello() {
        console.log("hello");
    }
    // 定义静态方法
    static sayHi() {
        console.log("hi");
    }
}
//在属性前使用static创建静态属性(类属性)
Person.age = 19;
//静态的只读属性
Person.weight = 120;
const per = new Person();
console.log(per);
console.log(per.name);
console.log(Person.age);
// 只读属性不可更改
// per.height=190
per.sayHello();
Person.sayHi();
