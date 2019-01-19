$(document).ready(function () {
    // favorite-animation
    $('.likeit').click(function (e) { 
        e.preventDefault();
        $(this).toggleClass('animated bounceIn');
        $(this).toggleClass('active');
        
    });
    // checkout_3.html-receiptButtonSwitch
    $('.receipt button').click(function (e) { 
        e.preventDefault();
        $(this).toggleClass('active');
        $('#electronic-receipt').toggleClass('d-none');
        $(this).siblings().toggleClass('active');
        $('#mail-receipt').toggleClass('d-none');
        
    });
});