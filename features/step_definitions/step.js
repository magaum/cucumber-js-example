const Person = require('../../src/shouty')
const { Given, When, Then } = require('cucumber')
const { assertThat, is } = require('hamjest')

Given('Lucy is located {int} meters from Sean', function (distance) {
  this.lucy = new Person
  this.sean = new Person
  this.lucy.moveTo(distance);
});

When('Sean shouts {string}', function (message) {
  this.sean.shout(message);
  this.lucy.heard(message);
  this.message = message;
});

Then('Lucy hears Sean\'s message', function () {
  assertThat(this.lucy.messageHeard(), is([this.message]))
});