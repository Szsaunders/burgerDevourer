// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".burger-item").on("click", function(event) {
    console.log(this)
    var id = $(this).attr("id");
    console.log($(this).attr("id"))
    var newEatenState = {
      devoured: "1"
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newEatenState
    }).then(
      function() {
        console.log("burg successfully devoured");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurg = {
      burger_name: $("#ca").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurg
    }).then(function() {
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
