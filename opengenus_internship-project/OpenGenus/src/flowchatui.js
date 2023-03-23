// chaticon
d = document.createElement('div'); 
$(d).addClass('chat_icon')
    .html('<img src="src/icon.png" alt="" id="icon" style="position:fixed;bottom:0;right:0;height: 80px; width: 80px; float:right;">')
    .appendTo($("body")) //main div
$(".chat_icon").append(function() 
{
    return ($("<div>")
        .attr("id", "flowchat")
        .addClass("flow")
        .html('<div id="myForm" class="chat-popup"> <form action="" class="form-container"><h3>OpenGenus</h3><input type="text" placeholder="Type Your Name" name="msg" required><button id="btn-submit" type="submit">Start</button></form></div>')    )
});
$(document).ready(function() 
{
    $('#icon').on('click', function() 
    {
        if ($('.flow').is(':visible')) 
        {
            $('.flow').fadeIn(400, function()
            {
                $('.flow').animate({
                    'width': 'hide'
                }, 1000);
            });
        } else 
        {
            $('.flow').animate({
                'width': 'show'
            }, 1000, function() {
                $('.flow').fadeIn(400);
            });
        };
    });
});
$(document).ready(function() {
    $('#icon').on('click', function() {
        if ($('.chat-popup').is(':visible')) {
            $('.chat-popup').fadeIn(400, function() {
                $('.chat-popup').animate({
                    'width': 'hide'
                }, 1000);
            });
        } else {
            $('.chat-popup').animate({
                'width': 'show'
            }, 1000, function() {
                $('.chat-popup').fadeIn(400);
            });
        };
    });
});