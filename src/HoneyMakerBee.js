class HoneyMakerBee extends Bee {
  constructor() {
    super(),
    this.age = 10,
    this.job = 'make honey',
    this.honeyPot = 0
  }
  makeHoney() {
    this.honeyPot++;
  }
  giveHoney() {
    this.honeyPot--;
  }
}

// var HoneyMakerBee = function() {
//   Bee.call(this);
//   this.age = 10; // overwrite prop
//   this.job = 'make honey' // overwrite prop
//   this.honeyPot = 0; // add prop
// };

// HoneyMakerBee.prototype = Object.create(Grub.prototype); // set chain
// HoneyMakerBee.prototype.constructor = HoneyMakerBee; // correct constructor
// HoneyMakerBee.prototype.makeHoney = function() { // add method
//   this.honeyPot++;
// }
// HoneyMakerBee.prototype.giveHoney = function() { // add method
//   this.honeyPot--;
// }

