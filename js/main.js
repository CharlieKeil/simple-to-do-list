var $input = $('#simple-list');
var $list = $(".list");

$('#simple-list').on('submit', function (e) {
  var $li = $('<li>');

  e.preventDefault();
  $li.html($input.val());
  $list.append($li);
});
