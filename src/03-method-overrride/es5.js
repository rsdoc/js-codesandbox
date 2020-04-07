console.log("[ es5 method override ]");

/**
 * 1. override the method of Base class
 * 2. Call the method of Base class from derived class
 */

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

function SuccessAlert(title) {
  Alert.call(this, title);

  this.type = "success";

  console.log(" [ SuccessAlert ] - constructor function");
}

SuccessAlert.prototype = Object.create(Alert.prototype);

SuccessAlert.prototype.constructor = SuccessAlert;

// creating FailureAlert derived class
function FailureAlert(title) {
  Alert.call(this, title);

  this.type = "Failure";

  console.log(" [ FailureAlert ] - constructor function");
}

FailureAlert.prototype = Object.create(Alert.prototype);

FailureAlert.prototype.constructor = FailureAlert;

// method overriding of Alert in FailureAlert
FailureAlert.prototype.toString = function() {
  // making call to parent constructor function
  const result = Alert.prototype.toString.call(this);
  return `${result} of type ${this.type}`;
};

const sa = new SuccessAlert("Sucess from SA");
const fa = new FailureAlert("Failure from FA");

console.log(sa.toString());
console.log(fa.toString());
