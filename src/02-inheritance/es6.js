console.log("[ es6 inheritance ]");

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

// create derived class and inheriting the Alert Class
class SuccessAlert extends Alert {
  constructor(title) {
    // calling Alert constructor function
    super(title);
    this.type = "success";
  }
}

const sa = new SuccessAlert("Success Alert");

console.log(sa.toString());
