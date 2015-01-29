!function() {
  'use strict';

  var iframe = document.querySelector('iframe');

  iframe.onload = function() {
    iframe.height = Math.max(
      iframe.contentDocument.body.scrollHeight || 0,
      iframe.contentDocument.body.offsetHeight || 0,
      iframe.contentDocument.clientHeight  || 0,
      iframe.contentDocument.scrollHeight  || 0,
      iframe.contentDocument.offsetHeight  || 0
    ) + 'px';
  };
}();
