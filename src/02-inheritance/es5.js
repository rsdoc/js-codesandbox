console.log("[ es5 inheritance ]");

// creating base constructor function
// Alert's prototype is Object
function Alert(title) {
  console.log(" [ Alert ] - constructor function");
  this.title = title || "Default Alert";
}

Alert.prototype.logData = function() {
  console.log("[ logData - (Alert) ] - ", this.title);
};

Alert.prototype.toString = function() {
  return `[ toString - (Alert) ] - ${this.title}`;
};

// creating derived constructor function
function SuccessAlert(title) {
  Alert.call(this, title); // calling parent constructor function with SuccessAlert(this) scope

  this.type = "success";

  console.log(" [ SuccessAlert ] - constructor function");
}

// assigning prototype of parent to derived function
// we will clone or copy prototype of Alert
SuccessAlert.prototype = Object.create(Alert.prototype);

// reset back the SuccessAlert constructor
SuccessAlert.prototype.constructor = SuccessAlert;

const sa = new SuccessAlert("Sucess from SA");

// we want to use parent function methods
console.log(sa.toString());

// now we want to make use of base class Alter and use the functions assiciated with Alert constructor function

/**
 * 1. Call the parent constructor function from derived constructor function
 * Alert.call(this, "title");
 *  - this - will have scope of SuccessAlert function
 *
 * 2. Assign prototype of Alert function to prototype of SuccessAlert -> to make use of parent fucntion
 *
 * 3. Above step will override the constructor function of derived function.
 *
 * 4. we need to reset the constructor function of SuccessAlert.
 */
