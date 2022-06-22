(function () {
  /**
   * 以abstract开头的类是抽象类
   *  抽象类和其他类区别不大，只是不能用来创建对象
   *  抽象类就是专门用来被继承的类
   * 
   * 抽象类中可以添加抽象方法，
   * 当某些方法不需要在父类中实现的时候，可以定义抽象方法
   */
  abstract class Animal {
    name: string;
    constructor(name: string) {
      this.name = name
    }
    // sayHello2() {
    //   console.log("动物在叫")
    // }
    /**
     *  定义一个抽象方法
     * 抽象方法使用abstract开头，没有方法体
     * 抽象方法只能定义在抽象类中，子类必须对抽象方法进行重写
     * */ 
    abstract sayHello():void;
  }

  class Dog extends Animal {
    sayHello(): void {
      console.log("汪汪汪")
    }
  }

  const dog = new Dog('旺财')
  dog.sayHello()

  

  // 抽象类不能被实例化
  // const an=new Animal()

})()