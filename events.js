var cart = 0;

document.addEventListener('modifyCart', function(event) {
  var type = event.detail.button.getAttribute('data-type');
  cart = type === 'add' ? cart + 1 : (cart === 0 ? cart : cart - 1);
  console.log('CART: ', cart);
});

document.dispatchEvent(new CustomEvent('otherEvent', {
  detail: {
    hazcheeseburger: true
  }
}));

var buttons = document.querySelectorAll('button'), i = buttons.length;
while (i--){
  addEvent(buttons[i], 'click', function() {
    document.dispatchEvent(new CustomEvent('modifyCart', {
      detail: {
        button: this
      }
    }));
  });
}

// function triggerEvent(el, type){
//  if ('createEvent' in document) {
//       // modern browsers, IE9+
//       var e = document.createEvent('HTMLEvents');
//       e.initEvent(type, false, true);
//       el.dispatchEvent(e);
//   } else {
//       // IE 8
//       var e = document.createEventObject();
//       e.eventType = type;
//       el.fireEvent('on'+e.eventType, e);
//   }
// }
//
// var el = document.querySelector('input[type='text']');
// triggerEvent(el, 'mousedown');
