console.log("[ es6 method override ]");

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

class SuccessAlert extends Alert {
  constructor(title) {
    super(title);
    this.type = "success";
  }
}

const sa = new SuccessAlert("Success Alert");

console.log(sa.toString());
