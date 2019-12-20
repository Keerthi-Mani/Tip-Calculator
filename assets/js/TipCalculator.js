$(".btn").on(click, function() {
  var billType = $("#bill-type")
    .val()
    .trim();
  var totalAmount = $("bill-amount")
    .val()
    .trim();
  var tipPercentage = $("bill-tip")
    .val()
    .trim();
  var totalPeople = $("bill-sharing")
    .val()
    .trim();

  //Quick validation
  if (totalAmount === "") {
    alert("Please enter the amount");
    return;
  }
  //Check to see if this input is empty or less than or equal to 1
});
