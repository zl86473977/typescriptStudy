import "./style/index.less";

class Food {
  x: number;
  y: number;
  element: HTMLElement;

  constructor() {
    // 获取页面中的food元素并将其复制给element
    this.element = document.getElementById("food")!;
    this.x = 0;
    this.y = 0;
    this.randomPos();
  }
  private randomPos(): void {
    this.x = Math.round(Math.random() * 30);
    this.y = Math.round(Math.random() * 30);
    this.element.style.left = 10 * this.x + "px";
    this.element.style.top = 10 * this.y + "px";
  }

  // 定义一个获取食物X轴坐标的方法
}

let food = new Food();
