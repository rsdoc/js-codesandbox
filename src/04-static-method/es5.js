console.log("[ es5 static method ]");

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

  this.type = "Success";

  console.log(" [ SuccessAlert ] - constructor function");
}

SuccessAlert.prototype = Object.create(Alert.prototype);

SuccessAlert.prototype.constructor = SuccessAlert;

function FailureAlert(title) {
  Alert.call(this, title);

  this.type = "Failure";

  console.log(" [ FailureAlert ] - constructor function");
}

FailureAlert.prototype = Object.create(Alert.prototype);

FailureAlert.prototype.constructor = FailureAlert;

FailureAlert.prototype.toString = function() {
  const result = Alert.prototype.toString.call(this);
  return `${result} of type ${this.type}`;
};

// creating the static method
// static methods are directly assigned to the class
Alert.createAlert = function(type, title) {
  switch (type) {
    case "Success":
      return new SuccessAlert(title);
    case "Failure":
      return new FailureAlert(title);
    default:
      return new Alert(title);
  }
};

// instantiate the constructor function based on type

const success = Alert.createAlert("Success", "Data saved successfully.");

const failure = Alert.createAlert("Failure", "Error in code");

console.log(success.toString());
console.log(failure.toString());
