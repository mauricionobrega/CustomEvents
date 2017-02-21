document.addEventListener('cat', function(e) {
  console.log(e)
});

document.dispatchEvent(new CustomEvent('cat', {
  detail: {
    hazcheeseburger: true
  }
}));

var buttons = document.querySelectorAll('button'), i = buttons.length;
while (i--){
  addEvent(buttons[i], 'click', function() {
    document.dispatchEvent(new CustomEvent('cat', {
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
