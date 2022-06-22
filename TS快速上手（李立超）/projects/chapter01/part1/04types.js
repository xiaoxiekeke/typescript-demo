// a表示一个js对象
var a;
a = {};
a = function () {
};
//{}用来指定对象中可以包含哪些属性
//属性名后加？表示属性是可选的
var b;
b = { name: '孙悟空' };
b = { name: '孙悟空', age: 18 };
//要求该变量有name属性，其他属性有没有不管
var c;
c = { name: '孙悟空', age: 18 };
//定义d函数类型结构的类型声明：
/**
 * 语法：(形参:类型,形参:类型,......)=>返回值
 */
var d;
d = function (n1, n2) {
    return n1 + n2;
};
/**
 * 数组的声明方式
 * 类型[]
 * Array<类型>
 */
//string[]表示字符串数组
var e;
e = ['a', 'b', 'c', 'd'];
var f;
var g;
g = [1, 2, 3];
/**
 * y元祖，就是固定长度的数组，（效率更高）
 * 语法：[类型,类型,类型]
 */
var h;
h = ['hello', 123];
/**
 * enum枚举 将所有可能的情况列举出来
 */
var Gender;
(function (Gender) {
    Gender[Gender["male"] = 0] = "male";
    Gender[Gender["female"] = 1] = "female";
})(Gender || (Gender = {}));
var i;
i = {
    name: '孙悟空',
    gender: Gender.male //male
};
//&表示同时，可以连接两个对象
var j;
j = { name: '孙悟空', age: 18 };
//类型的别名,可以简化类型的使用
var k;
var l;
var m;
