(function($){
  $(function() {
  	//анимация иконки меню в респонсив
    $('.menu__icon').on('click', function() {
      $(this).closest('.top-menu').toggleClass('menu_state_open');
    });

    //активный класс для табов
    $('input[name="tabs"]').on('change', function() {
      var tabId = $(this).attr('id');

      $('.tabs section').each(function() {
      	var section = $(this).attr('id');
      	var arr = section.split('-');

      	if (arr[1].length && arr[1] == tabId) {
      		$(this).addClass('active');	
      	} else {
      		$(this).removeClass('active');	
      	}
      });

    });

  });
})(jQuery);