const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const movie_models = require("./mongo.schema");
app.use(cors());
const connect = require("./mongo_connection");

app.use(express.json());
const port = 3000;

connect();

app.use(cors());

app.get("/", async (req, res) => {
    try{
  const movies = await movie_models.find({});
  res.json(movies);
    }
    catch(error){
        res.send(error)

    }
});

app.post("/", async (req, res) => {
  console.log(req.body);
  const movie = new movie_models({
    name: req.body.name,
    img: req.body.img,
    summary: req.body.summary,
  });
  res.status(200).json({
    success: true,
    data: {},
    message: "data updated!",
  });
  try {
    await movie.save();
    console.log("save");
  } catch (err) {
    res.send("error");
  }
});

app.put("/", async (req, res) => {
  try {
   console.log(req.body);
    const id = req.query.id;
   const update = req.body;

    await movie_models.updateOne({ _id: mongoose.Types.ObjectId(id) }, update, {
      upsert: true,
   });
   res.json({ success: true });
  } catch (error) {
    console.log(error);
  }
});




app.delete("/:id", async (req, res) => {

  try {
    await movie_models.findByIdAndDelete(req.params.id);
    res.status(204);
  } catch {
    console.log(error);
  }
});

app.listen(port, () => {
  console.log("app listen");
});
