interface BotPizza {
  oven(): string;
}
interface BotCoffee {
  pour(): string;
}

interface BotFactory {
  createBotPizza() : BotPizza;
  createBotCoffee(param?: any) : BotCoffee;
}

class BotPizzaVoice implements BotPizza {
  oven(): string {
    return "can you oven pepperoni pizza?";
  }
}
class BotPizzaText implements BotPizza {
  oven(): string {
    return "oven pepperoni pizza";
  }
}

class BotCoffeeVoice implements BotCoffee {
  pour(): string {
    return "please pour espresso to my cup";
  }
}
class BotCoffeeText implements BotCoffee {
  pour(): string {
    return "pour espresso coffee";
  }
}

class BotVoiceFactory implements BotFactory {
  createBotPizza() {
    return new BotPizzaVoice();
  }
  
  createBotCoffee() {
    return new BotCoffeeVoice();
  }
}
class BotTextFactory implements BotFactory {
  createBotPizza() {
    return new BotPizzaText();
  }
  createBotCoffee() {
    return new BotCoffeeText();
  }
}

(function() {
  const botPizzaVoice = (new BotVoiceFactory()).createBotPizza();
  console.log(botPizzaVoice.oven());

  const botPizzaText = (new BotTextFactory()).createBotPizza()
  console.log(botPizzaText.oven());

  const botCoffeeVoice = (new BotVoiceFactory()).createBotCoffee();
  console.log(botCoffeeVoice.pour());

  const botCoffeeText = (new BotTextFactory()).createBotCoffee()
  console.log(botCoffeeText.pour());
})()