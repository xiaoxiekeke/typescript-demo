/**
 * 使用class关键字定义一个类
 * 对象中包括两个部分
 * 属性
 * 方法
 */
class Person{
  //定义实例属性
  name:string="孙悟空";

  //在属性前使用static创建静态属性(类属性)
  static age:number=19;
  //readonly表示只读属性
  readonly height:number=180
  //静态的只读属性
  static readonly weight:number=120

  //定义实例方法
  sayHello(){
    console.log("hello");
  }
  // 定义静态方法
  static sayHi(){
    console.log("hi")
  }
}

const per=new Person()

console.log(per);
console.log(per.name)
console.log(Person.age)

// 只读属性不可更改
// per.height=190

per.sayHello()
Person.sayHi()
