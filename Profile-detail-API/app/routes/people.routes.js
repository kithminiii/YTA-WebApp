module.exports = app => {
  const peoples = require("../controllers/people.controller.js");

  var router = require("express").Router();

  // Create a new Data
  router.post("/", peoples.create);

  // Retrieve all Data
  router.get("/", peoples.findAll);

  // Retrieve all published Data
  router.get("/published", peoples.findAllPublished);

  // Retrieve a single Data with id
  router.get("/:id", peoples.findOne);

  // Update a Data with id
  router.put("/:id", peoples.update);

  // Delete a Data with id
  router.delete("/:id", peoples.delete);

  // Create a new Data
  router.delete("/", peoples.deleteAll);

  app.use("/api/peoples", router);
};
