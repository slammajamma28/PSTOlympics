$(document).ready(function() {

    $("#button").click(function () {

        var word = $("#daword").val().toUpperCase();

        // Do da monster math
        var weight_total = 0;
        var split_word = word.split("");
        one_point = ["A", "E", "I", "L", "N", "O", "R", "S", "T", "U"];
        two_point = ["D", "G"];
        three_point = ["B", "C", "M", "P"];
        four_point = ["F", "H", "V", "W", "Y"];
        five_point = ["K"];
        eight_point = ["J", "X"];
        ten_point = ["Q", "Z"];
        console.log(split_word);
        
        for (var i=0; i<split_word.length;i++) {
            var this_letter = split_word[i];
            var add_this;

            if (one_point.indexOf(this_letter) >= 0) {
                weight_total = weight_total + 10;
            } else if (two_point.indexOf(this_letter) >= 0) {
                weight_total = weight_total + 20;
            } else if (three_point.indexOf(this_letter) >= 0) {
                weight_total = weight_total + 30;
            } else if (four_point.indexOf(this_letter) >= 0) {
                weight_total = weight_total + 40;
            } else if (five_point.indexOf(this_letter) >= 0) {
                weight_total = weight_total + 50;
            } else if (eight_point.indexOf(this_letter) >= 0) {
                weight_total = weight_total + 80;
            } else if (ten_point.indexOf(this_letter) >= 0) {
                weight_total = weight_total + 100;
            } else {
                weight_total = weight_total + 0;
            }
            console.log("Weight total after " + this_letter + " is " + weight_total);
        }
        
        $("#total").text(weight_total);
       add_this=0;
       weight_total=0;
       split_word="";
       word=""; 
    });

    $("#dictionaryWord").click(function() {
        window.location = "https://www.dictionary.com/browse/" + $("#daword").val().toLowerCase() + "?s=t";
    });

});