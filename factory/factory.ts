interface Tea {
  pour(): string;
}

class GreenTea implements Tea {
  pour(): string {
    return "pouring green tea";
  }
}

class EarlGreyTea implements Tea {
  pour(): string {
    return "pouring earl grey tea";
  }
}

class OolongTea implements Tea {
  pour(): string {
    return "pouring oolong tea";
  }
}

class TeaFactory {
  getTea(teaType: string) : Tea {
    switch(teaType.toLowerCase()) {
      case "green":
        return new GreenTea();
      case "earlgrey":
        return new EarlGreyTea();
      case "oolong":
        return new OolongTea();
      default:
        return null;
    }
  }
}

(function() {
  const factory = new TeaFactory();
  const greenTea = factory.getTea("green");
  console.log(greenTea.pour());

  const earlGreyTea = factory.getTea("earlGrey");
  console.log(earlGreyTea.pour());

  const oolongTea = factory.getTea("oolong");
  console.log(oolongTea.pour());
})()