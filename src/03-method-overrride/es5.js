console.log("[ es5 method override ]");

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

const sa = new SuccessAlert("Sucess from SA");

console.log(sa.toString());
