# BOT Metrica

Using [Metrica](https://metrica.yandex.com) for [Telegarm Bots](https://core.telegram.org/bots) statistic.

## Installation

    $ npm install bot-metrica

## Usage

```js
var stat = require('bot-metrica')(METRICA_COUNTER_ID);

// Track unical user with request parameters and reaching goal 'greeting'
stat.track(userId, { hello : 'world' } , 'greeting');

//… or just to reach default goal — 'message'
stat.track(userId, { hello : 'world' });
```

## Credits

  - [Sergey Sergeev](http://github.com/gurugray)

## License

(The MIT License)

Copyright (c) 2017 Sergey Sergeev

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
