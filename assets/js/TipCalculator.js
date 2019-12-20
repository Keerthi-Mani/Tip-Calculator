$(document).ready(function() {
  $(".btn").click(function() {
    //Get the bill amount
    var amt = $("#bill-amount")
      .val()
      .trim();
    if (amt !== "") {
      amount = parseFloat(amt);
    }

    //Get the tip percentage
    var percentage = $("#bill-tip")
      .val()
      .trim();

    if (percentage !== "") {
      tipPercentage = parseFloat(percentage);
    }
    //Get number of people to share
    var numOfPersons = $("#bill-sharing")
      .val()
      .trim();
    if (numOfPersons !== "") {
      numberOfPersons = parseFloat(numOfPersons);
    } else {
      numberOfPersons = 1;
    }
    //In case total number of people is invalid, default it to 1
    if (numberOfPersons <= 0) {
      numberOfPersons = 1;
    }

    //if amount or % is not entered, alert the user to enter it
    if (amt === "" || amount <= 0) {
      alert("Please enter the bill amount");
      return;
    }
    if (percentage === "" || tipPercentage <= 0) {
      alert("Please enter the percentage");
      return;
    }

    //calculate the tip amount per person
    var tips = amount * (tipPercentage / 100);
    var totalAmount = tips + amount;
    var amountPerPerson = totalAmount / numberOfPersons;

    //Display the tip!
    $("#tip").text("$" + amountPerPerson.toFixed(2) + " " + "each");
  });
});
