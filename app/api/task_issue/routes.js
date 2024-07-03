"use strict";
import controller from "./controller.js";
import { schema } from "./schema.js";

export default async function routes(fastify, options) {
  fastify.post("/", { schema: schema.post }, controller.create);
  fastify.get("/", {}, controller.get);
  fastify.get("/:id", { schema: schema.checkParam }, controller.getById);
  fastify.get(
    "/getByTaskId/:id",
    { schema: schema.checkParam },
    controller.getByTaskId
  );
  fastify.put("/:id", { schema: schema.put }, controller.update);
  fastify.delete("/:id", { schema: schema.checkParam }, controller.deleteById);
}
