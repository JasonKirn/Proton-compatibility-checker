$(document).ready(function(){
    $("#useridsubmit").on("click", function() {
        $.post("getSteamGames", {
            userid: $("#userIdBox").val()
        })
    })
})