class ScorePanel {
  score = 0;
  level = 1;
  scoreEle: HTMLElement;
  levelEle: HTMLElement;
  maxLevel: number; // 设置一个变量限制等级
  upScore: number; // 设置一个变量表示多少分时升级
  constructor(maxLevel: number = 10, upScore: number = 10) {
    // 分数和等级所在的元素，在构造函数中进行初始化
    this.scoreEle = document.getElementById("score")!;
    this.levelEle = document.getElementById("level")!;
    this.maxLevel = maxLevel;
    this.upScore = upScore;
  }
  addScore() {
    this.scoreEle.innerText = ++this.score + "";
    if (this.score % this.upScore === 0) {
      this.levelUp();
    }
  }
  levelUp() {
    this.levelEle.innerText = ++this.level + "";
  }
}

export default ScorePanel;
// const scorePanel = new ScorePanel();
// for (let i = 0; i < 10; i++) {
//   scorePanel.addScore();
// }
