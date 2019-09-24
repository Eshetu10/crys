var random_result;
var lost = 0;
var win = 0;
var previous = 0;
var resetAndStart = function () {
    $(".crystals").empty();
    var images = [
'https://steemitimages.com/DQmRFkA2gjud4LJLwJS2sZ9Jy1EHbanJbGJqvphfTp4mk6G/diamond-02.jpg',

'https://realisadiamond.com/app/uploads/2017/12/diamond-beautiful.jpg',

'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYaB58m3xsgCEXqhFQAvCM_N_m9pUTlXZov4tWQ9l7LZVTm9Lc9A',

'https://media.istockphoto.com/photos/diamond-picture-id500259871?k=6&m=500259871&s=612x612&w=0&h=_4awfLpP_QXDtJumw2fFiLHTTVQS1zg_VGlv4jLQtk8='];
        
    random_result = Math.floor(Math.random() * 50 ) + 30;
    $("#result").html('Random Result: ' + random_result);
    for(var i = 0; i < 4; i++){
        var random = Math.floor(Math.random() * 11) + 1;
        var crystal = $("<div>");
            crystal.attr({
                "class": 'crystal',
                "data-random": random
            });
            crystal.css({
                "background-image":"url('" + images[i] + "')",
                "background-size":"cover"
            });
        $(".crystals").append(crystal);
    }
    $("#previous").html("Total Score: " + previous);
}
resetAndStart();
$(document).on('click', ".crystal", function () {
    var num = parseInt($(this).attr('data-random'));
    previous += num;
    $("#previous").html("scores: " + previous);
    console.log(previous);
    if(previous > random_result){
        lost++;
        $("#lost").html("You win: " + lost);
        previous = 0;
        resetAndStart();
    }
    else if(previous === random_result){
        win++;
        $("#win").html("You lose: " + win);
        previous = 0
        resetAndStart();
    }
});
