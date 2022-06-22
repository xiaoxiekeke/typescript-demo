"use strict";
(function () {
    const obj = {
        name: 'sss',
        age: 111
    };
    const obj2 = {
        name: 'sss',
        age: 111,
        gender: '男'
    };
    /**
     * 定义类时，可以使类去实现一个接口
     *  实现接口就是使类去满足接口的要求
     */
    class MyClass {
        constructor(name) {
            this.name = name;
        }
        sayHello() {
            throw new Error("Method not implemented.");
        }
    }
})();
