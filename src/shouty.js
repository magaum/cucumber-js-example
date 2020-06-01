class Person {
  constructor() {
    this.messages = [];
  }

  moveTo(distance) {

  }

  shout(message) {
    this.messages.push(message)
  }

  heard(message) {
    this.messages.push(message);
  }

  messageHeard() {
    return this.messages;
  }
}

module.exports = Person