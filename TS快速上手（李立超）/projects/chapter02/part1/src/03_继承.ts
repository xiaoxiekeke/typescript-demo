(function () {
  // //定义一个表示狗的类
  // class Dog{
  //   name:string;
  //   age:number;
  //   constructor(name:string,age:number){
  //     this.name=name;
  //     this.age=age;
  //   }
  //   sayHello(){
  //     console.log('汪汪汪！')
  //   }
  // }

  // // 定义一个表示猫的类
  // class Cat {
  //   name: string;
  //   age: number;
  //   constructor(name: string, age: number) {
  //     this.name = name;
  //     this.age = age;
  //   }
  //   sayHello() {
  //     console.log('喵喵喵')
  //   }
  // }

  // const dog=new Dog('汪汪',5)
  // const cat = new Cat('咪咪', 3)
  // console.log(dog)
  // dog.sayHello();
  // console.log(cat)
  // cat.sayHello();


  //定义一个Animal类
  class Animal{
    name: string;
    age: number;
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
    sayHello() {
      console.log('动物在叫')
    }
  }

  /**
   * 此时Animal称为父类，Dog称为子类
   * 使用继承后，子类拥有父类所有的方法和属性
   * 通过继承可以将多个类中共有的代码写在一个父类中
   *  如果想在子类中添加父类中没有的方法，直接添加即可
   *  如果在子类中添加父类相同的方法，子类中的方法会覆盖父类中的方法
   *    这种子类覆盖父类方法的形式，我们称作”重写“
   */
  //使Dog类继承Animal
  class Dog extends Animal{
    //添加自己的方法
    run(){
      console.log(`${this.name}在跑`)
    }
    sayHello() {
      console.log("汪汪汪")
    }
  }
  //使Cat类继承Animal
  class Cat extends Animal {
    sayHello() {
      console.log("喵喵喵")
    }
  }

  const dog=new Dog('旺财',5)
  const cat = new Cat('咪咪', 3)
  console.log(dog)
  dog.sayHello();
  dog.run()
  console.log(cat)
  cat.sayHello();

  
})();