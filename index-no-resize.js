!function() {
  'use strict';

  var button  = document.querySelector('button'),
      resized = false;

  button.onclick = function() {
    var iframe = document.querySelector('iframe');

    if (resized) {
      iframe.height     = 'auto';
      button.innerText  = "Resize";
    } else {
      iframe.height = Math.max(
        iframe.contentDocument.body.scrollHeight || 0,
        iframe.contentDocument.body.offsetHeight || 0,
        iframe.contentDocument.clientHeight  || 0,
        iframe.contentDocument.scrollHeight  || 0,
        iframe.contentDocument.offsetHeight  || 0
      ) + 'px';
      button.innerText  = "Don't resize";
    }

    resized = !resized;
  }
}();
