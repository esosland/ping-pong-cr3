
function countTo (input) {
  for (var index = 1; index <= input; index++) {
    $(".output").append("<li>" + insertPingPong(index) + "</li>");
  }
}

function insertPingPong (number) {
  var message = "";
  if (number % 3 === 0) {
    message = message.concat("ping");
  }
  if (number % 5 === 0) {
    message = message.concat("pong");
  }
  if (!message) {
    message = number.toString();
  }
  return message;
  }



$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    $(".output").text("");

    var inputNumber = parseInt($("form #number").val());
    countTo(inputNumber);

  })
});
