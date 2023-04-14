type Size = "" | "S" | "M" | "XL";

class Products {
  constructor(
    public name: string = "",
    public price: number = 0,
    public size: Size = ""
  ) {}

  isProductReady(): boolean {
    for (const key in this) {
      switch (typeof this[key]) {
        case "string":
          if ((<string>(<unknown>this[key])).length <= 0)
            throw new Error(`${key} is empty`);
          break;
        case "number":
          if (<number>(<unknown>this[key]) <= 0)
            throw new Error(`${key} is zero or negative`);
          break;
        default:
          throw new Error(`${typeof this[key]} is not supported`);
      }
    }
    return true;
  }

  toString() {
    if (!this.isProductReady) return;
    return `Name: ${this.name}\nPrice: ${this.price}\nSize: ${this.size}`;
  }
}

(() => {
  const bluePants = new Products("Blue Pants", 780, "XL");
  console.log(bluePants.toString());
})();
