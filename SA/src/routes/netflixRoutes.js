import express from 'express';
import { netflixServices } from '../services/netflixServices.js';

const route = express.Router();

// ─── Movies ───────────────────────────────────────────

route.get('/movies', (req, res) => {
  const { genre, year, directorId } = req.query;
  const result = netflixServices.getAllMovies({ genre, year, directorId });
  res.json({ total: result.length, data: result });
});

route.get('/movies/:id', (req, res) => {
  const movie = netflixServices.getMovieById(req.params.id);
  if (movie.error) return res.status(404).json({ message: movie.error });
  res.json(movie);
});

// ─── People ───────────────────────────────────────────

route.get('/people', (req, res) => {
  const { role, nationality } = req.query;
  const result = netflixServices.getAllPeople({ role, nationality });
  res.json({ total: result.length, data: result });
});

route.get('/people/:id', (req, res) => {
  const person = netflixServices.getPersonById(req.params.id);
  if (person.error) return res.status(404).json({ message: person.error });
  res.json(person);
});

route.get('/people/:id/movies', (req, res) => {
  const result = netflixServices.getMoviesByPerson(req.params.id);
  if (result.error) return res.status(404).json({ message: result.error });
  res.json(result);
});

export default route;