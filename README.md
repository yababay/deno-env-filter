# A Deno module for filtering dotenv settings

This is a very simple module for `Deno`, that can extract specific keys from envirement settings. It is based on [denoenv](https://deno.land/x/denoenv) module. The source code is as simple as:

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
