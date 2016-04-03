
function countTo (input) {
  for (var index = 1; index <= input; index++) {
    $(".output").append("<li>" + insertPingPong(index) + "</li>");
  }
}

function insertPingPong (number) {
  var result = "";
  if (number % 3 === 0) {
    result = result.concat("ping");
  }
  if (number % 5 === 0) {
    result = result.concat("pong");
  }
  if (!result) {
    result = number.toString();
  }
  return result;
  }



$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    $(".output").text("");

    var inputNumber = parseInt($("form #number").val());
    countTo(inputNumber);

  });
});
