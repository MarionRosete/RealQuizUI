export const isValidInput = (inputs) => {
  let error = {};
  for (let property in inputs) {
    switch (property) {
      case "email":
        if (inputs[property].match(validEmail)) {
          return false;
        } else {
          return "Please provide valid email";
        }
        break;
      case "password":
        if (inputs[property].length > 8) {
          return false;
        } else {
          return "Please provide eight characters long";
        }
        break;
      default:
        //REQUIRED INPUT
        if (!inputs[property]) {
          error[property] = "This field is required";
        }
        break;
    }
  }
  return Object.keys(error).length === 0 ? true : error;
};

const validEmail =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
