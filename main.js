/******************
 * YOUR CODE HERE *
 ******************/

const newPerson = function (firstName = 'Anonymous', lastName = 'Person', age, married = false) {
  return {
    firstName,
    lastName,
    age,
    married,
    goingOn: function() {
      return this.age + 1
    },
    ageUp: function() {
      this.age++
    },
    getFullName: function() {
      return `${this.firstName} ${this.lastName}`
    },
    marry: function(newPerson) {
      this.married = true
      newPerson.married = true
      this.spouseName = newPerson.getFullName()
      newPerson.spouseName = this.getFullName()
    },
    divorce: function(newPerson) {
      this.married = false
      newPerson.married = false
      delete this.spouseName
      delete newPerson.spouseName
    }
   }
}


/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/

if (typeof newPerson === 'undefined') {
  newPerson = undefined;
}


module.exports = newPerson;
