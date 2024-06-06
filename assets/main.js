console.log(jQuery().jquery);
//цей скрипт для меню «бургера»
$(document).on('click', '#burger', function () {
 $('.nav-menu').toggleClass('active');
});
// Submit subscription form using Ajax
$('#subscription_form').on('submit', function (e) {
 e.preventDefault();
 var $form = $(this);
 $.ajax({
 type: 'POST',
 url: '/subscription_ajax.php',
 data: $form.serialize()
 }).done(function () {
 $form[0].reset()
 alert('Thank you for the subscription!')
 }).fail(function () {
 alert('Something went wrong')
 });
});
