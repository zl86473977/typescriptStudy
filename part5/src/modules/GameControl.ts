import Food from "./Food";
import ScorePanel from "./ScorePanel";
import Snake from "./Snake";

class GameControl {
  snake: Snake;
  food: Food;
  scorePanel: ScorePanel;
  //创建一个属性来存储舍得移动方向
  direction: string = "";
  isLive = true; // 创建一个属性来记录游戏是否结束

  constructor() {
    this.snake = new Snake();
    this.food = new Food();
    this.scorePanel = new ScorePanel(10, 1);
    this.init();
  }

  // 游戏的初始化方法，调用后游戏即开始
  init() {
    // 绑定键盘按键按下的事件
    document.addEventListener("keydown", this.keydownHandler.bind(this));
    this.run();
  }

  // 创建一个键盘按下的响应函数
  keydownHandler(event: KeyboardEvent) {
    // 需要检查event.key的值是否合法
    // ArrowUp  Up
    // ArrowDown  Down
    // ArrowLeft  Left
    // ArrowRight  Right
    if (
      ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(event.key)
    ) {
      this.direction = event.key;
    }
  }

  // 创建一个控制蛇移动的方法
  // 上 top-
  // 下 top+
  // 左 left-
  // 右 left+
  run() {
    let x = this.snake.X;
    let y = this.snake.Y;
    switch (this.direction) {
      case "ArrowUp":
      case "Up":
        y -= 10;
        break;
      case "ArrowDown":
      case "Down":
        y += 10;
        break;
      case "ArrowLeft":
      case "Left":
        x -= 10;
        break;
      case "ArrowRight":
      case "Right":
        x += 10;
        break;
    }
    this.checkEat(x, y);
    try {
      this.snake.X = x;
      this.snake.Y = y;
    } catch (err) {
      this.isLive = false;
      console.error((err as Error).message + "GAME OVER");
    }

    this.isLive &&
      setTimeout(this.run.bind(this), 200 - (this.scorePanel.level - 1) * 10);
  }

  // 定义一个方法,用来检查蛇是否吃到食物
  checkEat(X: number, Y: number) {
    if (X === this.food.X && Y === this.food.Y) {
      console.log("吃到食物了");
      this.food.change();
      this.scorePanel.addScore();
      this.snake.addBody();
    }
  }
}

export default GameControl;
