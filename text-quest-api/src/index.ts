import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";
import adventures from "./adventures.js";
import scenes from "./scenes.js";

const app = new Hono();

app.use("/api/*", cors());

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.route("/api/adventures", adventures);
app.route("/api/scenes", scenes);

const port = 3000;
console.log(`Server is running on http://localhost:${port}`);

serve({
  fetch: app.fetch,
  port,
});
