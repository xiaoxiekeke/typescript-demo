"use strict";
(function () {
    //定义一个表示人的类
    class Person {
        constructor(name, age) {
            this.name = name;
            this._age = age;
        }
        /**
         * getter 属性的读取器
         * setter 属性的存储器
         */
        //定义方法，用来获取name属性
        // getAge(){
        //   return this.age
        // }
        // setAge(age:number){
        //   //判断年龄是否合法
        //   if(age>=0){
        //     this.age = age
        //   }
        // }
        // ts中设置getter、setter，用起来和属性一样
        get age() {
            return this._age;
        }
        set age(age) {
            if (age >= 0) {
                this._age = age;
            }
        }
    }
    const per = new Person('孙悟空', 18);
    /**
     * 属性是在对象中设置，属性可以任意的被修改
     *  属性可以任意被修改,将会导致对象中的数据变得非常不安全
     *
     */
    per.name = "猪八戒";
    //私有属性不可访问
    // per._age=-38
    // 传统方式使用get set
    // console.log(per.getAge())
    // per.setAge(-18)
    // ts方式使用get set
    console.log(per.age);
    per.age = -33;
    console.log(per.age);
    //可以直接将属性定义在构造函数中
    class C {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    const c = new C("孙悟空", 18);
})();
