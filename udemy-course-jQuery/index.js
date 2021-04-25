$("h1").click(function () {
  alert("i am clicked!");
  $("h1").addClass("big-title");
});

$("button").click(function (event) {
  console.log(event);
});

$("btn").click(function (event) {
  $("h1").text(event.key);
});
