interface BotAdapter {
  sendMessage(): string;
}

class LineBotLegacy {
  sendMessageOldWay(): string {
    return "send message line old way";
  }
}

class LineBotAdapter implements BotAdapter {
  sendMessage(): string {
    console.log("called send message from adapter");
    const lineBot = new LineBotLegacy();
    return lineBot.sendMessageOldWay();
  }
}

(function() {
  const lineBot = new LineBotAdapter();
  console.log(lineBot.sendMessage());
})()