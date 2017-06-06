interface LaptopPrototype {
  clone(): LaptopPrototype;
}

class Apple implements LaptopPrototype {
  clone(): LaptopPrototype {
    return new Apple();
  }
}

class Dell implements LaptopPrototype {
  clone(): LaptopPrototype {
    return new Dell();
  }
}

class Toshiba implements LaptopPrototype {
  clone(): LaptopPrototype {
    return new Toshiba();
  }
}

class LaptopBuilder {
  private laptopMap: { [brand: string]: LaptopPrototype; } = {};

  constructor() {
    this.laptopMap["Apple"] = new Apple();
    this.laptopMap["Dell"] = new Dell();
    this.laptopMap["Toshiba"] = new Toshiba();
  }

  createLaptop(brand: string): LaptopPrototype {
    return this.laptopMap[brand].clone();
  }
}

(function() {
  const laptopBuilder = new LaptopBuilder();
  const clones = ["Apple", "Dell", "Toshiba"].map(brand => {
    return laptopBuilder.createLaptop(brand);
  });
  console.log(clones);
})()