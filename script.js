console.log ("is this thing on?")

$(document).ready(function(){

// get the modal to pop up when button is clicked
    $(".joinUsButton").on("click", function(){
        $(".subscribe").show("fast");
    });

// get modal to close when button is clicked and/or use escape
$(".closeWindow").on("click", function(){
    $(".subscribe").hide("fast");
});

// accept user input from form when submit button is clicked
    $("form").on("submit", function(event){
        
        event.preventDefault();

        let userFirstName = $("#firstName").val();

        let userLastName = $("#lastName").val();

        let userEmail = $("#userEmail").val();

        if (userFirstName !== "" && 
        userLastName !== "" &&
        userEmail !== ""){
// then update text in modal to welcome user
            $(this).html(`<p>Hello, ${userFirstName} ${userLastName}! We will send your recommendations to ${userEmail}.</p>`);
        }
        else {
            alert("Please fill out all fields");
        }
    });
// close window after submit with x and/or escape button
    $("body").on("keydown", function(event){
        const key = event.key;
        if (key === "Escape"){
            $(".subscribe").hide("fast");
        }
    });

    $(".xOut").on("click", function(){
        $(".subscribe").hide("fast");
    });


});