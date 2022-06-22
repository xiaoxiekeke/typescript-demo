import Snake from './Snake'
import Food from './Food'
import ScorePanel from './ScorePanel'
//游戏控制器，控制其他所有的类
class GameControl{
  snake:Snake;
  food:Food;
  scorePanel:ScorePanel;
  direction:string='right';
  //记录游戏是否结束
  isLive:Boolean=true;
  constructor(){
    this.snake=new Snake();
    this.food=new Food();
    this.scorePanel=new ScorePanel(10,1)

    this.init()
  }
  //游戏的初始化方法，调用后游戏即将开始
  init(){
    //绑定键盘按下的时间
    document.addEventListener('keydown', this.keydownHandler.bind(this))
    this.run()
  }

  /**
   * ArrowUp Up
   * ArrowDown Down
   * ArrowLeft Left
   * ArrowRight Right
   * @param event 
   */
  //创建键盘按下的响应函数
  keydownHandler(event:KeyboardEvent){
    console.log(event.key)
    
    this.direction=event.key
  }

  //控制蛇移动的方法
  run(){
    /**
     * 根据方向来使蛇的位置改变
     */
    let X=this.snake.X;
    let Y = this.snake.Y;
    //根据按件方向修改蛇的方向
    switch (this.direction) {
      case 'ArrowUp':
      case 'Up':
        Y-=10
        break;
      case 'ArrowDown':
      case 'Down':
        Y += 10
        break;
      case 'ArrowLeft':
      case 'Left':
        X -= 10
        break;
      case 'ArrowRight':
      case 'Right':
        X += 10
        break;
      default:
        break;
    }

    // 检查蛇是否吃到食物
    this.checkEat(X,Y)

    try{
      this.snake.X = X
      this.snake.Y = Y
    }catch(e){
      console.log(e)
      alert(e.message+',GAME OVER')
      this.isLive=false
    }
    

    this.isLive&&setTimeout(
      this.run.bind(this),
      300-(this.scorePanel.level-1)*30
    )

  }

  //定义一个方法，检查蛇是否吃到食物
  checkEat(X:number,Y:number){
    // this.snake.X = X
    // this.snake.Y = Y
    if (X === this.food.X && Y === this.food.Y){
      console.log('吃到食物了！')
      //食物的位置要进行重置
      this.food.change()
      // 分数增加
      this.scorePanel.addScore()
      //蛇的身体增加
      this.snake.addBody()
    }
  }

}
export default GameControl