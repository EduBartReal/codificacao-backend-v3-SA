const movies = require("../data/movies");
const people = require("../data/people");

// ─── Directors

const populateMovie = (movie) => {
  const director = people.find((p) => p.id === movie.directorId) || null;
  const actors = movie.actorIds.map((id) => people.find((p) => p.id === id)).filter(Boolean);
  const { directorId, actorIds, ...rest } = movie;
  return { ...rest, director, actors };
};

const populatePerson = (person) => {
  const directed = movies
    .filter((m) => m.directorId === person.id)
    .map(({ directorId, actorIds, ...rest }) => rest);

  const actedIn = movies
    .filter((m) => m.actorIds.includes(person.id))
    .map(({ directorId, actorIds, ...rest }) => rest);

  return { ...person, directed, actedIn };
};

// ─── movies

const getAllMovies = ({ genre, year, directorId } = {}) => {
  let result = movies.map(populateMovie);

  if (genre) {
    result = result.filter((m) =>
      m.genre.some((g) => g.toLowerCase() === genre.toLowerCase())
    );
  }
  if (year) {
    result = result.filter((m) => m.year === Number(year));
  }
  if (directorId) {
    result = result.filter((m) => m.director?.id === directorId);
  }

  return result;
};

const getMovieById = (id) => {
  const movie = movies.find((m) => m.id === id);
  if (!movie) return null;
  return populateMovie(movie);
};

// ─── people

const getAllPeople = ({ role, nationality } = {}) => {
  let result = people;

  if (role) {
    result = result.filter((p) =>
      p.roles.includes(role.toLowerCase())
    );
  }
  if (nationality) {
    result = result.filter(
      (p) => p.nationality.toLowerCase() === nationality.toLowerCase()
    );
  }

  return result.map(populatePerson);
};

const getPersonById = (id) => {
  const person = people.find((p) => p.id === id);
  if (!person) return null;
  return populatePerson(person);
};

const getMoviesByPerson = (id) => {
  const person = people.find((p) => p.id === id);
  if (!person) return null;

  const directed = movies
    .filter((m) => m.directorId === id)
    .map(populateMovie);

  const actedIn = movies
    .filter((m) => m.actorIds.includes(id))
    .map(populateMovie);

  return { person, directed, actedIn };
};

module.exports = {
  getAllMovies,
  getMovieById,
  getAllPeople,
  getPersonById,
  getMoviesByPerson,
};