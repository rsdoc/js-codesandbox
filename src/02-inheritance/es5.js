console.log("[ es5 inheritance ]");

// creating base constructor function
function Alert(title) {
  
  if (!(this instanceof Alert)) {
    return new Alert(title);
  }

  this.title = title || "Default Alert";
}

Alert.prototype.logData = function() {
  console.log("[ logData - (Alert) ] - ", this.title);
};

Alert.prototype.toString = function() {
  return `[ toString - (Alert) ] - ${this.title}`;
};

// creating derived constructor function
function SuccessAlert() {
  this.type = "success";
}


// creating instance of constructor function
const alert = new Alert("Default Alert");

console.log(alert.logData());
console.log(alert.toString());
