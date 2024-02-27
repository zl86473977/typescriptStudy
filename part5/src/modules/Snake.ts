class Snake {
  // 表示蛇的元素
  element: HTMLElement; // 获取蛇的容器
  head: HTMLElement;
  bodies: HTMLCollection; // HTML DOM 中的 HTMLCollection 是即时更新的

  constructor() {
    this.element = document.getElementById("snake")!;
    this.head = document.querySelector("#snake > div")!;
    // 以下方法用document.querySelectorAll 不合适因为querySelectorAll不会自动更新
    this.bodies = this.element.getElementsByTagName("div");
  }

  // 获取蛇的坐标（蛇头坐标）
  get X() {
    return this.head.offsetLeft;
  }
  get Y() {
    return this.head.offsetTop;
  }

  set X(value) {
    // 如果新值和旧值相同，则直接返回不再修改
    if (this.X === value) {
      return;
    }
    // X的值的合法范围0-290之间
    if (value < 0 || value > 290) {
      // 进入判断说明蛇撞墙了,抛出一个异常
      throw new Error("蛇撞墙了");
    }
    // 禁止掉头
    if (
      this.bodies[1] &&
      (this.bodies[1] as HTMLElement).offsetLeft === value
    ) {
      if (value > this.X) {
        value = this.X - 10;
      } else {
        value = this.X + 10;
      }
    }

    this.moveBody();
    this.head.style.left = value + "px";
    this.judgeOverlap();
  }
  set Y(value) {
    // 如果新值和旧值相同，则直接返回不再修改
    if (this.Y === value) {
      return;
    }
    // X的值的合法范围0-290之间
    if (value < 0 || value > 290) {
      throw new Error("蛇撞墙了");
    }
    if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value) {
      if (value > this.Y) {
        value = this.Y - 10;
      } else {
        value = this.Y + 10;
      }
    }
    this.moveBody();
    this.head.style.top = value + "px";
    this.judgeOverlap();
  }

  // 蛇增加身体的方法
  addBody() {
    // 向element中添加有一个div
    this.element.insertAdjacentHTML("beforeend", "<div></div>");
  }

  moveBody() {
    if (this.bodies.length > 1) {
      for (let i = this.bodies.length - 1; i > 0; i--) {
        // 获取前边身体的位置
        (this.bodies[i] as HTMLElement).style.left =
          (this.bodies[i - 1] as HTMLElement).offsetLeft + "px";
        (this.bodies[i] as HTMLElement).style.top =
          (this.bodies[i - 1] as HTMLElement).offsetTop + "px";
      }
    }
  }
  // 检查有没有撞到自己
  judgeOverlap() {
    for (let i = this.bodies.length - 1; i > 0; i--) {
      const bd = this.bodies[i] as HTMLElement;
      // 判断重叠
      if (bd.offsetLeft === this.X && bd.offsetTop === this.Y) {
        throw new Error("身体重叠了,GAME OVER");
      }
    }
  }
}
export default Snake;
