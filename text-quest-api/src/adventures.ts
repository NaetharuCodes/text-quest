import {Hono} from 'hono'

const app = new Hono()
    .get("/", (c) => c.json("All of the adventures"))   
    .get("/:id", (c) => c.json("A specific adventure"))
    .post("/", (c) => c.json("making a new adventure"))
    .delete("/:id", (c) => c.json("deleting a specific adventure"))

export default app