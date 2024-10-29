const zod = require("zod");

//schema for .post("/todo")
let createSchema = zod.object({
  title: zod.string(),
  description: zod.string(),
});

//schema for .put("compleated")
const updateSchema = zod.object({
  id: zod.string(),
});

module.exports = {
  createSchema,
  updateSchema,
};
