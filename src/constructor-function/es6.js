console.log("[es6 constructor function]");

// es6 way of creating constructor function
class Alert {
  constructor(title) {
    this.title = title || "Default Alert";
  }

  logData() {
    console.log("[Logger - Alert - log Data] - ", this.title);
  }
}

const alert = new Alert("Success");

console.log(alert.logData());
