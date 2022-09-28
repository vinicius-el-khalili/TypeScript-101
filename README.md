# TypeScript 101: Modules

### Setup ES6 module system

`tsconfig.json` -> "module": "ES6
`<script type="module" src='app.js'></script>`

### Using the module system

- exporting:
```
export const zero : number = 0
export {stuff};
export {stuff as otherStuff};
``` 
- importing:
```
import {zero} from "./filepath.js" // -> remember to extend it as .js
import {zero as neutralNumber} from "./filepath.js"
import * as myModule from "./filepath.js" 
```

### Drawbacks

- Some browsers may not support ES6
- It doesn't bundle your code, resulting in multiple requests that can overload the processing capacity