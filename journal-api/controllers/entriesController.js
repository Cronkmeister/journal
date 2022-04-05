const knex = require("knex")(require("../knexfile").development);

exports.index = (_req, res) => {
  knex("entries")
    // .select("id", "date", "imageURL")
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => res.status(400).send(`Error retrieving Entries ${err}`));
};

//GET single entry
exports.singleEntry = (req, res) => {
  knex("entries")
    .where({ id: req.params.id })
    .then((data) => {
      if (!data.length) {
        return res
          .status(404)
          .send(`Record with id ${req.params.id} is not found`);
      }
      res.status(200).json(data[0]);
    })
    .catch((err) =>
      res.status(400).send(`Error retrieving entries ${req.params.id} ${err}`)
    );
};
//POST single entry
exports.addEntry = (req, res) => {
  // const { date, location, category, camera, film, notes } = req.body;
  console.log(req.body, "where is the body");

  const newEntry = {
    // imageURL: JSON.stringify(req.body.file),
    date: req.body.date,
    location: req.body.location,
    category: req.body.category,
    camera: req.body.camera,
    film: req.body.film,
    textContent: req.body.textContent,
  };
  if (
    !req.body.location ||
    !req.body.category ||
    !req.body.date ||
    !req.body.imageURL
  ) {
    return res
      .status(400)
      .send("Please make sure to provide all the required fields");
  }
  knex("entries")
    .insert(newEntry)
    .then((data) => {
      const newEntryURL = `/entries/${data[0]}`;
      res.status(201).location(newEntryURL).send(newEntryURL);
    })
    .catch((err) => res.status(400).send(`Error creating entry: ${err}`));
};

//PUT single entry
exports.updateEntry = (req, res) => {
  const selectedEntry = {
    location: req.body.location,
    category: req.body.category,
    textContent: req.body.textContent,
    imageURL: req.body.imageURL,
    date: req.body.date,
    camera: req.body.camera,
    film: req.body.film,
  };

  knex("entries")
    .update(selectedEntry)
    .where({ id: req.params.id })
    .then(() => {
      res.status(200);
      send(`Entry with id: ${req.params.id} has been updated`);
    })
    .catch((err) =>
      res.status(400).send(`Error updating Entry ${req.params.id} ${err}`)
    );
};

//DELETE single entry
exports.deleEntry = (req, res) => {
  knex("entries")
    .delete()
    .where({ id: req.params.id })
    .then(() => {
      res.status(204).send(`Entry with id: ${req.params.id} has been deleted`);
    })
    .catch((err) =>
      res.status(400).send(`Error deleting Entry ${req.param.id} ${err}`)
    );
};
