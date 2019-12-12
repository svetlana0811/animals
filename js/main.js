$(document).ready(function(){

     $('.customSelect .selectText>p').on('click' , function(){
        $('.selectText').find('ul').removeClass('show')
        $('.selectText').removeClass('openItems')
        $(this).closest('.selectText').find('ul').toggleClass('show')
        $(this).closest('.selectText').toggleClass('openItems') 

     })

$('.customSelect ul li').on('click' , function() {
    $(this).closest('ul').find('li').removeClass('selected')
    $(this).addClass('selected');
    var attr = $(this).attr('data-attr');
    console.log(attr)
    $(this).closest('.customSelect').find('input').val(attr) ;
    $(this).closest('.selectText').find('p').html($(this).html()) ;

 })
$('body').click(function(e) {
    if (!$(e.target).closest('.customSelect .selectText>p').length){
         $('.selectText').find('ul').removeClass('show')
        $('.selectText').removeClass('openItems')
    }
});



$('.closeModal').on('click' , function() {
    $('.popupForLogin').hide()
})
$('.logInButton').on('click' , function() {
    $('.popupForLogin').show()
})


});
 