var $form = $('form');
var $input = $('#simple-input');
var $list = $('.list');

$('#simple-list').on('submit', function (e) {
  var $li = $('<li>');

  e.preventDefault();
  $li.html($input.val());
  $list.append($li);
  $input.val('');
});

$('ul').on('click', 'li', function (e) {
  $(this).toggleClass('is-clicked');
});
