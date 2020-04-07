console.log("[es6 constructor function]");

// es6 way of creating constructor function
class Alert {
  constructor(title) {
    this.title = title || "Default Alert";
  }

  logData() {
    console.log("[ logData - (Alert) ] - ", this.title);
  }

  toString() {
    return `[ toString - (Alert) ] - ${this.title}`;
  }
}

const alert = new Alert("Success");

console.log(alert.logData());
