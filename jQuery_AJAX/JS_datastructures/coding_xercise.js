"use stickt";
/* write a program that receives a list of variable names written in underscore_case
      and convert them to camelCase. The input will come from a textarea inserted into the DOM, and the conversion will happen when the button is pressed. The following data are posted to the textarea:
      underscore_case
      first_name
      Some_variable
      calculate_age
      delayed_departure*/

document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

const text = document.querySelector("textarea").value;
