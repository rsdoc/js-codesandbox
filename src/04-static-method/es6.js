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

// creating the static method is same as es5
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
