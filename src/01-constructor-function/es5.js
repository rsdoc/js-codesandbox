console.log("[es5 constructor function]");

/**
 * By convention - keep function name as Capitalize.
 * Scope of this - will be Alert constructor function
 * By default - if no return is specified - it returns instance of Alert costructor function
 */
function Alert(title) {
  // adding guard to return instance of Alert
  // incase someone called this as -
  // const alert = Alert("Success") i.e normal function call
  // make use of prototype
  if (!(this instanceof Alert)) {
    return new Alert(title);
  }
  this.title = title || "Default Alert";

  // adding functions
  // we should avoid using functions here - to not allocated memory to this function on every intantiation

  /**
   this.logData = function() {
    console.log("[Logger - Alert - log Data line] - ", this.title);
  };
   */
}

// all istances will have ref to this method
Alert.prototype.logData = function() {
  console.log("[ logData - (Alert) ] - ", this.title);
};

Alert.prototype.toString = function() {
  return `[ toString - (Alert) ] - ${this.title}`;
};

// creating instance of constructor function
const alert = new Alert("Success toast");

console.log(alert.logData());
console.log(alert.toString());
