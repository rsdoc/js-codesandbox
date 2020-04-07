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

// creating derived class
class FailureAlert extends Alert {
  constructor(title) {
    super(title);
    this.type = "Failure";
  }

  toString() {
    let result = super.toString();

    console.log(result);

    return `${result} of type ${this.type}`;
  }
}

const sa = new SuccessAlert("Success Alert");
const fa = new FailureAlert("Failure Alert");

console.log(sa.toString());
console.log(fa.toString());
