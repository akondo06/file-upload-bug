# file-upload-bug

Weird Array stuff when using jquery plugin for file upload: file-upload (blueimp-file-upload on npm):

Ember `3.0.0-beta.3` and jQuery `3.2.1`
```
jquery.js:254 Uncaught TypeError: Cannot set property firstObject of [object Array] which has only a getter
	at Function.jQuery.extend.jQuery.fn.extend (http://127.0.0.1:4200/assets/vendor.js:595:21)
	at Function.jQuery.extend.jQuery.fn.extend (http://127.0.0.1:4200/assets/vendor.js:591:30)
```

Ember `3.0.0-beta.1` with jQuery `3.2.1` and Ember `3.0.0-beta.1` with `jQuery 2.2.4` (version used in my project)
```
Uncaught TypeError: Cannot convert a Symbol value to a string
	at messageFor (ember-metal.js:1360)
	at Object.get (ember-metal.js:1378)
	at Proxy.toString (<anonymous>)
	at Function.isPlainObject (jquery.js:305)
```

On Ember `2.18.0` everything works. It seems that disabling the `prototype extensions for arrays` fixes the issue but
my project relies quite a bit on the prototype extensions, so disabling them is not really an option.