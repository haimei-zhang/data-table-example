/**
 * Created by Haimei on 02/09/2017.
 */

/*
 * Mimic a class with a static method.
 * */
function Toggler() {
}

/**
 * Mimic a static method of a class
 **/
Toggler.toggle = function (e, targetEvent) {
  $(targetEvent).toggleClass("hidden");
  var icon = $(e.currentTarget).find("i");

  var collapsed = icon.hasClass("fa-caret-down");
  if (collapsed) {
    icon.removeClass("fa-caret-down");
    icon.addClass("fa-caret-up");
  } else {
    icon.removeClass("fa-caret-up");
    icon.addClass("fa-caret-down");
  }
};