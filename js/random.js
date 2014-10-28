$(function(){
    $("input").on("keyup", function(e){                         //when enter is pressed, execute
        if(e.keyCode === 13){                                   //keyCode for "enter" is keyCode === 13
            var $this = $(this);                                //stores the specific event to this
            var number1 = ($("#first_value").val()) || "0";     //assign variable OR assign it to 0
            var number2 = $this.val() || "0";                   //assign variable OR assign it to 0
            var answer = parseInt(number1) + parseInt(number2);
            console.log(number1);                               //check number1
            console.log(number2);                               //check number2
            console.log(answer);                                //check if answer is correct
            $("div#answer").text(answer);                       //display answer
            $(".solution").show();                              //shows text "answer" when an answer is present
            $("input").val('');                                 //clears input field after button is clicked
        }                                                       //end of if statement
    });                                                         // end of input and function
});                                                             //end of function