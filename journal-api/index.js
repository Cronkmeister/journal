const { response } = require("express");
const express = require("express");
const multer = require("multer");
const path = require("path");
const PORT = process.env.PORT || 5050;
const app = express();
require("dotenv").config();
const knex = require("knex")(require("./knexfile").development);

const entryRoutes = require("./routes/entriesRoute");

app.use("/entries", entryRoutes);

// Set Storage Engine
const storage = multer.diskStorage({
  destination: "./public/uploads/",
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

//Init Upload
const upload = multer({
  storage: storage,
  limits: { fileSize: 1024 * 1024 * 5 },
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
}).array("galleryImage", [10]);

//Check File Type
function checkFileType(file, cb) {
  //allowed ext
  const fileTypes = /jpeg|jpg|png|gif/;
  //check ext
  const extName = fileTypes.test(path.extname(file.originalname).toLowerCase());
  //check mime
  const mimeType = fileTypes.test(file.mimetype);

  if (mimeType && extName) {
    return cb(null, true);
  } else {
    cb("Error: images only!");
  }
}

//EJS
app.set("view engine", "ejs");

app.get("/", (req, res) => res.render("index"));

//Public Folder
app.use(express.static("./public"));

app.post("/upload", (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      res.render("index", {
        msg: err,
      });
    } else {
      if (req.files == undefined) {
        res.send("error:no file selected");
      } else {
        console.log(req.files);

        //add database record
        knex("entries")
          .insert({
            location: "req.body.location",
            category: "req.body.category",
            textContent: "req.body.textContent",
            date: "2022-04-01",
            imageURL: JSON.stringify(req.files),
            camera: "canon AE-1",
            film: "Portra 400",
            filmNotes: "none",
          })
          .then((response) => {
            // console.log(response);
          })
          .catch((err) => console.log(err));

        res.render("index", {
          msg: "File Uploaded!",
        });
      }
    }
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
