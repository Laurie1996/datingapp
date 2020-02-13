# skintone

Detect if a color value is a shade of skin.

# Installation

```
npm install skintone
```

# Usage

```
var isSkin = require('skintone');

// skin shade
console.log(isSkin(194, 144, 125));
-> true 

// red apple shade
console.log(isSkin(229, 13, 42));
-> false

```

# Author

```
/*
 * Pulled into a separate npm module from
 * https://github.com/pa7/nude.js/blob/master/noworker.nude.js
 * by Param Aggarwal (http://paramaggarwal.com)
 * 
 * Original License:
 * Nude.js - Nudity detection with Javascript and HTMLCanvas
 * 
 * Author: Patrick Wied ( http://www.patrick-wied.at )
 * Version: 0.1  (2010-11-21)
 * License: MIT License
 */
```

# License

MIT