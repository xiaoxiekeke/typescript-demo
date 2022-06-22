"use strict";
class Dog {
    /**
     * constructor被称为构造函数
     * 构造函数会在对象创建时调用
     */
    constructor(name, age) {
        console.log("构造函数执行了");
        //在实例方法中，this表示当前的实例
        //构造函数中，this就是当前新建的对象
        console.log(this);
        this.name = name;
        this.age = age;
    }
    bark() {
        // alert('汪汪汪')
        //在方法中可以通过this表示当前方法调用的实例对象
        console.log(this.name);
    }
}
//利用构造函数创建新的对象
const dog = new Dog("小黑", 4);
const dog2 = new Dog("小白", 2);
console.log(dog);
console.log(dog2);
dog2.bark();
