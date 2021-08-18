// Method inside an object
// This refers to object defined on (like self). C
let restaurant = {
  name: 'ASB',
  guestCapacity: 75,
  guestCount: 0,
  checkAvailability: function (partySize) {
    let seatsLeft = this.guestCapacity - this.guestCount;
    return partySize <= seatsLeft;
  },
  seatParty: function (partySize) {
    if (this.checkAvailability(partySize)) {
      this.guestCount += partySize;
    }
  },
  removeParty: function (partySize) {
    this.guestCount -= partySize;
  }
}


console.log(restaurant.checkAvailability(4));
restaurant.seatParty(73);
console.log(restaurant.checkAvailability(4));
restaurant.removeParty(10);
console.log(restaurant.checkAvailability(4));
restaurant.seatParty(73);
console.log(restaurant.checkAvailability(4));
