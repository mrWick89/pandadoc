!function(t){t(function(){t(".menu__icon").on("click",function(){t(this).closest(".top-menu").toggleClass("menu_state_open")}),t('input[name="tabs"]').on("change",function(){var n=t(this).attr("id");t(".tabs section").each(function(){var i=t(this).attr("id").split("-");i[1].length&&i[1]==n?t(this).addClass("active"):t(this).removeClass("active")})})})}(jQuery);