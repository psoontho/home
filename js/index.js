$(".myButton").hover(function(){
    $(this).css("background-color","#FF9500");   
}, function(){
    $(this).css("background-color","#D95D5A");
});

$('body').scrollspy({ target: '#ScrollSpyNav' });