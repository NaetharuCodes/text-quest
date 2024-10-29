import { Hono } from "hono";
import { prisma } from "./lib/prisma.js";

const app = new Hono()
  .get("/", (c) => c.json("All of the adventures"))
  .get("/:id", (c) => c.json("A specific adventure"))
  .post("/", async (c) => {
    // Add the new entry to Prisma
    try {
      const body = await c.req.json();

      const adventure = await prisma.adventure.create({
        data: {
          title: body.title,
          description: body.description,
        },
      });

      console.log(adventure);

      return c.json(adventure, 200);
    } catch (error) {
      return c.json({ error: "Failed to create adventure" }, 500);
    }

    return c.json("Done");
  })
  .delete("/:id", (c) => c.json("deleting a specific adventure"));

export default app;
