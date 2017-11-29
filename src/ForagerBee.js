class ForagerBee extends Bee {
  constructor() {
  	super(),
  	this.age = 10,
  	this.job = 'find pollen',
  	this.canFly = true,
  	this.treasureChest = []
  }
  forage(treasure) {
    this.treasureChest.push(treasure);
  }
}

// var ForagerBee = function() {
//   Bee.call(this);
//   this.age = 10;
//   this.job = 'find pollen';
//   this.canFly = true;
//   this.treasureChest = [];
// };

// ForagerBee.prototype = Object.create(Grub.prototype);
// ForagerBee.prototype.constructor = ForagerBee;
// ForagerBee.prototype.forage = function(treasure) {
//   this.treasureChest.push(treasure);
// }

