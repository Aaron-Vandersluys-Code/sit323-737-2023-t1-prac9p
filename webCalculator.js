/* 

Aaron James Vandersluys
221178806
SIT323
5.1 P: Containerization
** This task was originally submitted as task 4.1 P.
I am using it again for the purposes of demonstrating
containerization for task 5.1 P **

*/

/*

Declaring express as a requirement for the project
and creating a new express application.

*/

const express = require("express");
const res = require("express/lib/response");
const app = express();

// Declaration of arithmetic functions, to be used by microservice
const addition = (num1, num2) => {
  return num1 + num2;
};
const subtraction = (num1, num2) => {
  return num1 - num2;
};
const multiplication = (num1, num2) => {
  return num1 * num2;
};
const division = (num1, num2) => {
  return num1 / num2;
};

/* 

Addition API endpoint
Example operation (in browser): localhost:3040/addition?num1=25&num2=75

Comments explaining functionality of the following endpoint can also
be applied to other endpoints, as they share common functionality.  
*/

// Get the addition function.
app.get("/addition", (req, res) => {
  // try & catch block, utilised to "try" code and "catch" errors.
  try {
    // convert browser inputs to floating point number
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    /*

    Error handling, utilising not a number. If the user inputs 
    a character that is not number, such as a single or multiple
    string of letters the error will be thrown, with a message 
    displayed to the user explaining that only integers can be 
    excepted as input. This common functionality in each API 
    endpoint. 

    */

    if (isNaN(num1)) {
      throw new Error("Number 1 must be defined as an integer");
    }
    if (isNaN(num2)) {
      throw new Error("Number 2 must be defined as an integer");
    }

    // Apply logic and print results to user, if there are no errors, with succesful status number.
    const result = addition(num1, num2);
    res.status(200).json({ statuscode: 200, data: result });

    // Catch the error, if found and print error message to user, with error status number.
  } catch (error) {
    console.error(error);
    res.status(500).json({ statuscode: 500, msg: error.toString() });
  }
});

/* 

Subtraction API endpoint
Example operation (in browser): localhost:3040/subtraction?num1=100&num2=25

*/

app.get("/subtraction", (req, res) => {
  try {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    if (isNaN(num1)) {
      throw new Error("Number 1 must be defined as an integer");
    }
    if (isNaN(num2)) {
      throw new Error("Number 2 must be defined as an integer");
    }

    const result = subtraction(num1, num2);
    res.status(200).json({ statuscode: 200, data: result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ statuscode: 500, msg: error.toString() });
  }
});

/* 

Multiplication API endpoint
Example operation (in browser): localhost:3040/multiplication?num1=5&num2=12

*/

app.get("/multiplication", (req, res) => {
  try {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    if (isNaN(num1)) {
      throw new Error("Number 1 must be defined as an integer");
    }
    if (isNaN(num2)) {
      throw new Error("Number 2 must be defined as an integer");
    }

    const result = multiplication(num1, num2);
    res.status(200).json({ statuscode: 200, data: result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ statuscode: 500, msg: error.toString() });
  }
});

/* 

Division API endpoint
Example operation (in browser): localhost:3040/division?num1=12&num2=2

*/

app.get("/division", (req, res) => {
  try {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    if (isNaN(num1)) {
      throw new Error("Number 1 must be defined as an integer");
    }
    if (isNaN(num2)) {
      throw new Error("Number 2 must be defined as an integer");
    }

    const result = division(num1, num2);
    res.status(200).json({ statuscode: 200, data: result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ statuscode: 500, msg: error.toString() });
  }
});

// Port listening, allowing the application to listen to incoming network requests

const port = 3040;
app.listen(port, () => {
  console.log("Terminal listening on port: " + port);
});
