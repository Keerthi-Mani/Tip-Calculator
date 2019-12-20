$(document).ready(function() {
  $(".btn").click(function() {
    // console.log(billType);
    var amount = parseFloat(
      $("#bill-amount")
        .val()
        .trim()
    );
    // console.log(amount);
    var tipPercentage = parseFloat(
      $("#bill-tip")
        .val()
        .trim()
    );
    var totalPeople = parseInt(
      $("#bill-sharing")
        .val()
        .trim()
    );

    //Quick validation
    if (amount <= 0 || tipPercentage <= 0) {
      alert("Please enter the bill amount");
      return;
    }
    //Check to see if this input is empty or less than or equal to 1
    if (totalPeople === "" || totalPeople <= 1) {
      totalPeople = 1;
      $("#each").hide();
    } else {
      $("#each").show();
    }
    var tips = amount * (tipPercentage / 100);
    var totalAmount = tips + amount;
    var amountPerPerson = (totalAmount / totalPeople).toFixed(2);

    //Display the tip!
    $("#tip").text("$" + amountPerPerson + " " + "each");
  });
});
