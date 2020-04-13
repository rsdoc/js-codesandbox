// creating object using dot notation
const user2 = {}; // create an empty object

user2.name = "Rahul";
user2.score = 5;
user2.increment = function() {
  user2.score++;
};

user2.increment();

console.log(user2);
