// Make sure we wait to attach our handlers until the DOM is fully loaded.

console.log("burgers.js is read");

$(function() {
  $(".devour-btn").on("click", function(event) {
    var id = $(this).data("id");
    
    var newDevouredState = {
      devoured: true
    };
    
    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevouredState
    }).then(
      function() {
        console.log("i was devoured");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
  
  $("#submit-burger").on("click", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    console.log("on submit button");
    var newBurger = {
      burger_name: $("#add-burger-box").val().trim(),
      devoured: false
    };
    
    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
