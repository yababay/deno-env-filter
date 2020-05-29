# A Deno module for filtering dotenv settings

This is a very compact module for `Deno`, that can extract and transform specific keys from envirement settings. It is based on [denoenv](https://deno.land/x/denoenv) module. 

It's source code is as simple as:

```javascript
import * as dotenv from 'https://deno.land/x/denoenv/mod.ts'

dotenv.config()
const env = Deno.env.toObject()

export default function(filter){
    if(typeof filter == 'string') return env[filter]
    if(typeof filter == 'function') return filter(env)
    return env
}
```

## Usage examples:

```javascript
import getEnv from 'https://raw.githubusercontent.com/yababay/deno-env-filter/master/mod.js'

console.log(getEnv('HTTP_PORT'))
console.log(getEnv(
    env => Object.keys(env)
    .filter($ => $.match(/^PG_/) && $)
    .map($ => [$, env[$]])
    .reduce((acc, $) => {
        acc[$[0].replace(/^PG_/, '').toLowerCase()] = $[1]
        return acc
        }, {})
))

```
