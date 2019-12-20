$(document).ready(function() {
  $(".btn").click(function() {
    var billType = $("#bill-type")
      .val()
      .trim();
    // console.log(billType);
    var totalAmount = $("#bill-amount")
      .val()
      .trim();
    // console.log(totalAmount);
    var tipPercentage = $("#bill-tip")
      .val()
      .trim();
    var totalPeople = $("#bill-sharing")
      .val()
      .trim();

    //Quick validation
    if (totalAmount === "") {
      alert("Please enter the bill amount");
      return;
    }
    //Check to see if this input is empty or less than or equal to 1
    if (totalPeople === "" || totalPeople <= 1) {
      totalPeople = 1;
      document.getElementById("each").style.display = "none";
    }
  });
});
