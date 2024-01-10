$(document).ready(function(){
    $(document).on("scroll",function(){
        if ( $(window).scrollTop() > 30) {
            $('.head-container').css("background-color",'lightblue');
        }
        else{
            $('.head-container').css("background-color",'white');
        }
    })
   
})
$(document).ready(function(){
    $(".web").fadeIn(1000);
});


