class Singleton {
  private static instance: Singleton;

  constructor() {}

  static get Instance() {
    if (this.instance === null || this.instance === undefined) {
      return new Singleton();
    }
    return this.instance;
  }
}

(function() {
  const fooSingleton = Singleton.Instance;
  const barSingleton = Singleton.Instance;
  console.log("foo and bar are not same instances: " + (fooSingleton === barSingleton));
})()