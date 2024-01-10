$(document).ready(function(){
    $(document).on("scroll",function(){
        if ( $(window).scrollTop() > 30) {
            $('.head-container').css("background-color",'lightblue');
        }
        else{
            $('.head-container').css("background-color",'white');
        }
    })
});
$(document).ready(function(){
    $(".web").animate({
        left: '250px',
    width: '1100px',
    height: '350px',
    
    });
});
