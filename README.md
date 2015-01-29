# iframeless

Automatically resize an iframe to match its content's height and have no scrollbars at all.

## Demos

* [Automatic resize](https://dariocravero.github.io/iframeless/demo/index.html)
* [No default resize](https://dariocravero.github.io/iframeless/demo/index-no-resize.html)

## Cross-browser testing

[Real time screenshots here](http://www.modern.ie/en-us/screenshots#http%3A%2F%2Fdariocravero.github.io%2Fiframeless%2Fdemo%2Findex.html)

## Code for automatic resizing

```
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
```
