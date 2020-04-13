/**
 * Suppose we are building quiz game
 * user - name - "Rahul Singh"
 *      - score - 4
 *      - Functionality - Ability to increase/decrease score
 */

// creating object with Object literal
const user1 = {
  name: "Rahul Singh",
  score: 4,
  increment: function() {
    user1.score++;
  }
};

/**
 *  Objects store function with their associated data
 *  - is known as Encapsulation
 */

user1.increment();
console.log(user1);
