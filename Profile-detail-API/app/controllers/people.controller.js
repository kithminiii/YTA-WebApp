const db = require("../models");
const People = db.peoples;

// Create and Save a new Data
exports.create = (req, res) => {
  // Validate request
  if (!req.body.first) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Data
  const people = new People({
    first: req.body.first,
    last: req.body.last,
    im: req.body.im,
    birth: req.body.birth,
    email: req.body.email,
    confirm: req.body.confirm,
    location: req.body.location,
    pno: req.body.pno,
    lang: req.body.lang,
    department: req.body.department,
    linemanager: req.body.linemanager,
    eStatus: req.body.eStatus,
    published: req.body.published ? req.body.published : false
  });

  // Save Data in the database
  people
    .save(people)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Data."
      });
    });
};

// Retrieve all Data from the database.
exports.findAll = (req, res) => {
  const first = req.query.first;
  var condition = first ? { first: { $regex: new RegExp(first), $options: "i" } } : {};

  People.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Data."
      });
    });
};

// Find a single Data with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  People.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Data with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Data with id=" + id });
    });
};

// Update a Data by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  People.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Data with id=${id}. Maybe Data was not found!`
        });
      } else res.send({ message: "Details was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Data with id=" + id
      });
    });
};

// Delete a Data with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  People.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Data with id=${id}. Maybe Data was not found!`
        });
      } else {
        res.send({
          message: "Data was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Data with id=" + id
      });
    });
};

// Delete all Data from the database.
exports.deleteAll = (req, res) => {
  People.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Datas were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all datas."
      });
    });
};

// Find all published Data
exports.findAllPublished = (req, res) => {
  People.find({ published: true })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving datas."
      });
    });
};