$(".myButton").hover(function(){
    $(this).css("background-color","#FF9500");   
}, function(){
    $(this).css("background-color","#D95D5A");
});

$('body').scrollspy({ target: '#scrollSpyNav' });

/*$(document).ready(function(){
    $('[data-spy="scroll"]').each(function () {
        var $spy = $(this).scrollspy('refresh')
        }); 
});*/