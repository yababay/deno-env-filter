import * as dotenv from 'https://deno.land/x/denoenv/mod.ts'

dotenv.config()
const env = Deno.env.toObject()

export default function(filter){
    if(typeof filter == 'string') return env[filter]
    if(typeof filter == 'function') return filter(env)
    return env
}
