import movies from '../data/movies.js';
import people from '../data/people.js';

class NetflixServices {

  // ─── Helpers ───────────────────────────────────────────

  populateMovie = (movie) => {
    const director = people.find((p) => p.id === movie.directorId) || null;
    const actors = movie.actorIds.map((id) => people.find((p) => p.id === id)).filter(Boolean);
    const { directorId, actorIds, ...rest } = movie;
    return { ...rest, director, actors };
  }

  populatePerson = (person) => {
    const directed = movies
      .filter((m) => m.directorId === person.id)
      .map(({ directorId, actorIds, ...rest }) => rest);

    const actedIn = movies
      .filter((m) => m.actorIds.includes(person.id))
      .map(({ directorId, actorIds, ...rest }) => rest);

    return { ...person, directed, actedIn };
  }

  // ─── Movies ───────────────────────────────────────────

  getAllMovies({ genre, year, directorId } = {}) {
    let result = movies.map(this.populateMovie);

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
  }

  getMovieById(id) {
    const movie = movies.find((m) => m.id === id);
    if (!movie) return { error: 'Movie not found' };
    return this.populateMovie(movie);
  }

  // ─── People ───────────────────────────────────────────

  getAllPeople({ role, nationality } = {}) {
    let result = people;

    if (role) {
      result = result.filter((p) => p.roles.includes(role.toLowerCase()));
    }
    if (nationality) {
      result = result.filter((p) => p.nationality.toLowerCase() === nationality.toLowerCase());
    }

    return result.map(this.populatePerson);
  }

  getPersonById(id) {
    const person = people.find((p) => p.id === id);
    if (!person) return { error: 'Person not found' };
    return this.populatePerson(person);
  }

  getMoviesByPerson(id) {
    const person = people.find((p) => p.id === id);
    if (!person) return { error: 'Person not found' };

    const directed = movies.filter((m) => m.directorId === id).map(this.populateMovie);
    const actedIn = movies.filter((m) => m.actorIds.includes(id)).map(this.populateMovie);

    return { person, directed, actedIn };
  }

}

export const netflixServices = new NetflixServices();