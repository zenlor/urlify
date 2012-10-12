
# urlify.js

  urlify.js taken from Django Admin as component module. The original file is [here](1),
this is a modified version of the same code with some small enhancements.

[1]:https://github.com/django/django/blob/master/django/contrib/admin/static/admin/js/urlify.js

Install with [component](2)
[2]:https://github.com/component/component

    component install aliem/urlify


the API is simple:

    var urlify = require('urlify')

    urlify('Foo  bar bAz ');
    // 'foo-bar-baz'

The function accepts a second parameter to set the maximum length of the resulting string:

  urlify('Foo bar bAz', 5);
  // 'foo-b'

The library handles different accents for many charsets.
Right now it includes:

* Latin
* Greek
* Turkish
* Russian
* Ukranian
* Czech
* Polish
* Latvian

# License

Released under DJango own license, watch LICENSE for more information.
