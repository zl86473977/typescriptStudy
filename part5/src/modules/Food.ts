class Food {
  element: HTMLElement;

  constructor() {
    // 获取页面中的food元素并将其复制给element
    this.element = document.getElementById("food")!;
    this.change();
  }
  change(): void {
    const x = Math.round(Math.random() * 29) * 10;
    const y = Math.round(Math.random() * 29) * 10;
    this.element.style.left = x + "px";
    this.element.style.top = y + "px";
  }

  // 定义一个获取食物X轴坐标的方法
  get X() {
    return this.element.offsetLeft;
  }
  // 定义一个获取食物X轴坐标的方法
  get Y() {
    return this.element.offsetTop;
  }
}
export default Food;
// let food = new Food();
