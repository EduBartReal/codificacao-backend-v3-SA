const express = require("express");
const router = express.Router();
const {
  getAllMovies,
  getMovieById,
  getAllPeople,
  getPersonById,
  getMoviesByPerson,
} = require("../services/netflixServices");

// ─── movies

router.get("/movies", (req, res) => {
  const { genre, year, directorId } = req.query;
  const result = getAllMovies({ genre, year, directorId });
  res.json({ total: result.length, data: result });
});

router.get("/movies/:id", (req, res) => {
  const movie = getMovieById(req.params.id);
  if (!movie) return res.status(404).json({ message: "Movie not found" });
  res.json(movie);
});

// ─── people 

router.get("/people", (req, res) => {
  const { role, nationality } = req.query;
  const result = getAllPeople({ role, nationality });
  res.json({ total: result.length, data: result });
});

router.get("/people/:id", (req, res) => {
  const person = getPersonById(req.params.id);
  if (!person) return res.status(404).json({ message: "Person not found" });
  res.json(person);
});

router.get("/people/:id/movies", (req, res) => {
  const result = getMoviesByPerson(req.params.id);
  if (!result) return res.status(404).json({ message: "Person not found" });
  res.json(result);
});

module.exports = router;