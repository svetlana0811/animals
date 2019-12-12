$(document).ready(function(){



$('body').delegate('.customSelect .selectText>p', 'click' , function(){
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


 new_elems_anketa = `
            <div class="shownInfo">
                        <div class="customSelect">
                            <input  class="hidden" value="" type="text">
                              <div class="selectText">
                                  <p>Ներարկում </p>
                                  <ul>
                                      <li data-attr = 'Թռչուdfն'>Կատու</li>
                                      <li data-attr = 'Թռչոssւն' class="selected">Թռչուն</li>
                                      <li data-attr = 'Թռչուdfն'>Ձի</li>
                                      <li data-attr = 'Թռdfrfչուն'>Գյուղատնտեսական կենդանի</li>
                                  </ul>
                              </div>
                          </div>    
                        <input type="text" placeholder="Ներարկման ամսաթիվը">
                        <input type="text" placeholder="Նշումներ">
                    </div>
        `;
$('.addSiring').on('click' , function() {
    $(this).closest('.infoBySearch.anketa').find('.anketas').append(new_elems_anketa);
})






$('.closeModal').on('click' , function() {
    $('.popupForLogin').hide()
})
$('.logInButton').on('click' , function() {
    $('.popupForLogin').show()
})

 
$('.seeGuardian').on('click' , function() {
    $('.popupForLogin.tesnelGtnveluvayr').show()
})

$('.seeLocation').on('click' , function() {
    $('.popupForLogin.tesnelXnamoghin').show()
})


});
 