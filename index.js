$(function(){
  $('form').on('submit', function(event){
    const input = $(this).find('input');
    const value= input.val();
    $('.shopping-list').append(`<li>
      <span class="shopping-item">${value}</span>
      <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
      <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
      <span class="button-label">delete</span>
      </button>
      </div>
      </li>`);
    event.preventDefault();
    input.val("");
  });
  $('.shopping-list').on('click','.shopping-item-toggle', function(){
    $(this).closest('li').children('span').toggleClass('shopping-item__checked');
  });
  $('.shopping-list').on('click','.shopping-item-delete', function(){
    $(this).closest('li').remove();
  });
})