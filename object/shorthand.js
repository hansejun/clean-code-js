/**
 * ShortHand Properties
 * Concise Method
 */

const firstName = 'John';
const lastName = 'Doe';

const person = {
  firstName: 'John',
  lastName: 'Doe',
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};

const person2 = {
  firstName,
  lastName,
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};
