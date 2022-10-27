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

app.get("/movieslist", async (req, res) => {
  try {
    const movies = await movie_models.find({});
    res.json(movies);
  } catch (error) {
    res.send(error);
  }
});

app.post("/movieslist/movie", async (req, res) => {
  const movie = new movie_models({
    name: req.body.name,
    img: req.body.img,
    summary: req.body.summary,
  });
  res.status(201).json({
    success: true,
    data: "Done",
    message: "data updated!",
  });
  try {
    await movie.save();
    console.log("save");
  } catch (err) {
    res.send("error");
  }
});

app.put("/movieslist/:movie_id", async (req, res) => {
  try {
  
    const id = req.params.movie_id;
    console.log(id)
    const update = req.body;

    await movie_models.findByIdAndUpdate({ _id: id }, update
      
    );
    res.json({ success: true });
  } catch (error) {
    console.log(error);
  }
});

app.delete("/movieslist/:movie_id", async (req, res) => {
  try {
    await movie_models.findByIdAndDelete(req.params.movie_id);

    res.json({sucess:true})
  } catch (error){
    console.log(error);
  }
});

app.listen(port, () => {
  console.log("app listen");
});
