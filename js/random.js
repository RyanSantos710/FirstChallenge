$(function(){    
    var button = $("button#solutionbutton");
    button.on("click",function(){
        var number1 = ($("#first_value").val())|| "0";
        var number2 = ($("#second_value").val()) || "0";
        var answer = parseInt(number1) + parseInt(number2);
        console.log("Solution Clicked!");
        console.log(number1);
        console.log(number2);
        console.log(answer);
        $("div#answer").text(answer);
        $("input").val(''); //clears input field after button is clicked
    })
    
    
});