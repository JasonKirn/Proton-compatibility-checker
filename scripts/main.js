$(document).ready(function(){
    $("#useridsubmit").on("click", function() {
        $.post("getSteamGames", {
            userid: $("#userIdBox").val()
        },
        function(data) {
            console.log(data)
            testVar = 5
            $(".results").append(JSON.stringify({data}));
        })
    })
})