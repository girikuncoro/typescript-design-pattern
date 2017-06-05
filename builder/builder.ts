enum CoffeeSize {
  Tall,
  Grande,
  Venti
}

class CoffeeBuilder {
  private name: String;
  private bean: String;
  private size: CoffeeSize;
  private isHot: Boolean;

  constructor(name: String) {
    this.name = name;
  }

  get Name() {
    return this.name;
  }

  setBean(bean: String): CoffeeBuilder {
    this.bean = bean;
    return this;
  }

  get Bean() {
    return this.bean;
  }

  setSize(size: CoffeeSize): CoffeeBuilder {
    this.size = size;
    return this;
  }

  get Size() {
    return this.size;
  }

  setIsHot(isHot: Boolean): CoffeeBuilder {
    this.isHot = isHot;
    return this;
  }

  get IsHot() {
    return this.isHot;
  }

  build(): Coffee {
    return new Coffee(this);
  }
}

class Coffee {
  private name: String;
  private bean: String;
  private size: CoffeeSize;
  private isHot: Boolean;

  constructor(builder: CoffeeBuilder) {
    this.name = builder.Name;
    this.bean = builder.Bean;
    this.size = builder.Size;
    this.isHot = builder.IsHot;
  }

  get Name() {
    return this.name;
  }

  get Bean() {
    return this.bean;
  }

  get Size() {
    return this.size;
  }

  get IsHot() {
    return this.isHot;
  }
}

(function() {
  const coffee = new CoffeeBuilder("caramel machiatto")
    .setBean("arabica")
    .setSize(CoffeeSize.Grande)
    .setIsHot(false)
    .build();

  console.log(coffee);
})()