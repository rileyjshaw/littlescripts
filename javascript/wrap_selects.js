var wrapSelects = function() {
  $('select:not(.select-wrapper select)').wrap(function() {
    return '<div class="select-wrapper" style="width:' + $(this).css('width') + '; height:' + $(this).css('height') + ' " />';
  }).width('150%').after('<div class="right-border-fix"></div>');
}