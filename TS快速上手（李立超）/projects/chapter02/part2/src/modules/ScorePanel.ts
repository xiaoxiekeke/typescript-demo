class ScorePanel {
  score = 0;
  level = 1;
  scoreEle: HTMLElement;
  levelEle: HTMLElement;
  maxLevel: number;
  upScore: number;
  constructor(maxLevel: number = 10, upScore: number = 10) {
    this.scoreEle = document.getElementById("score")!
    this.levelEle = document.getElementById("level")!
    this.maxLevel = maxLevel
    this.upScore = upScore
  }
  //设置一个加分的方法
  addScore() {
    //使分数自增
    this.scoreEle.innerHTML = ++this.score + ''
    if (this.score % this.upScore === 0) {//默认每10分升一级
      this.levelUp()
    }
  }
  //提示等级的方法
  levelUp() {
    if (this.level < this.maxLevel) {
      //使分数自增
      this.levelEle.innerHTML = ++this.level + ''
    }
  }
}
export default ScorePanel
// const scorePanel = new ScorePanel()
// scorePanel.addScore();
// scorePanel.addScore();
// scorePanel.addScore();