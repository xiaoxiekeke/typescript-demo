class Snake {
  element:HTMLElement;
  head: HTMLElement;
  bodies:HTMLCollection;
  constructor() {
    this.element = document.getElementById('snake') as HTMLElement
    this.head=document.querySelector('#snake > div') as HTMLElement;
    this.bodies = this.element.getElementsByTagName('div')
  }

  //获取蛇的坐标（蛇头坐标）
  get X() {
    return this.head.offsetLeft
  }
  get Y() {
    return this.head.offsetTop
  }
  //设置蛇头的坐标（蛇头坐标）
  set X(value:number) {
    if(this.X===value){
      return
    }
    //X值合法范围0-299
    if(value<0||value>290){
      throw new Error("蛇撞墙了");
      
    }
    if(this.bodies[1]&&(this.bodies[1] as HTMLElement).offsetLeft===value){
      console.log('水平方向发生掉头')
      if(value>this.X){
        //如果新值大于旧值X，说明蛇向右走，此时发生掉头，应该使蛇继续向左走
        value=this.X-10
      }else{
        value=this.X+10
      }
    }
    this.moveBody()
    this.head.style.left=value+'px'
    this.checkHeadBody()
  }
  set Y(value: number) {
    if (this.Y === value) {
      return
    }
    //Y值合法范围0-299
    if (value < 0 || value > 290) {
      throw new Error("蛇撞墙了");
    }

    if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value) {
      console.log('垂直方向发生掉头')
      if (value > this.Y) {
        //如果新值大于旧值Y，说明蛇向下走，此时发生掉头，应该使蛇继续向上走
        value = this.Y - 10
      } else {
        value = this.Y + 10
      }
    }
    this.moveBody()
    this.head.style.top = value + 'px'
    this.checkHeadBody()
  }

  //增加蛇的身体
  addBody(){
    this.element.insertAdjacentHTML('beforeend','<div></div>')
  }

  //蛇身体移动方法
  moveBody(){
    /**
     * 将后面身体设置为前面身体的位置
     */
    //遍历所有身体
    for(let i=this.bodies.length-1;i>0;i--){
      let X=(this.bodies[i-1] as HTMLElement).offsetLeft;
      let Y =(this.bodies[i-1] as HTMLElement).offsetTop;
      (this.bodies[i] as HTMLElement).style.left=X+'px';
      (this.bodies[i] as HTMLElement).style.top=Y+'px';
    }
  }

  // 获取所有身体，检查其是否与蛇头坐标发生重叠
  checkHeadBody(){
    for(let i=1;i<this.bodies.length;i++){
      let bd=this.bodies[i] as HTMLElement
      if(this.X===bd.offsetLeft&&this.Y===bd.offsetTop){
        //蛇头撞到身体
        throw new Error("撞到身体");
        
      }
    }
  }

}
export default Snake