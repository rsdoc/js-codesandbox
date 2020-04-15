/**
 * Object.create()
 *  - gets fined grain control over, what my object has access to
 *
 *  - Object.create() - takes null or {} as an argument
 *  - always returns an Object
 **/
const user3 = Object.create(null);

user3.name = "Rahul Singh";
user3.score = 10;
user3.increment = function() {
  user3.score++;
};

console.log("the value of : ", user3);
