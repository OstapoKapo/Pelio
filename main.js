



$('.footerGroup__balanceDetails__blockGroup__row__block').mouseenter(function(){
  $(this).find('.footerGroup__balanceDetails__blockGroup__row__block__header').css('color','#fff')
  $(this).find('.footerGroup__balanceDetails__blockGroup__row__block__text').css('color','#fff')
})

$('.footerGroup__balanceDetails__blockGroup__row__block').mouseleave(function(){
  
  $(this).find('.footerGroup__balanceDetails__blockGroup__row__block').css('background-color','#F5F5F5')
  $(this).find('.footerGroup__balanceDetails__blockGroup__row__block__header').css('color','#72757A')
  $(this).find('.footerGroup__balanceDetails__blockGroup__row__block__text').css('color','#000')
})
