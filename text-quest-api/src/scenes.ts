import {Hono} from 'hono'

const app = new Hono()
    .get("/", (c) => c.json("Listing all of the scenes"))
    .get("/:id", (c) => c.json("Listing a specific scene"))
    .post("/", (c) => c.json("creating a new scene"))
    .delete("/:id", (c) => c.json("deleting a scene"))

export default app