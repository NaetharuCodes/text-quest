import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import adventures from "./adventures.js"
import scenes from "./scenes.js"

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.route('/adventures', adventures)
app.route('/scenes', scenes)

const port = 3000
console.log(`Server is running on http://localhost:${port}`)

serve({
  fetch: app.fetch,
  port
})
