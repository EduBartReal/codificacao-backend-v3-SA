const movies = [
  {
    id: "m1",
    title: "Inception",
    year: 2010,
    genre: ["Action", "Sci-Fi", "Thriller"],
    synopsis:
      "A thief who steals corporate secrets through dream-sharing technology is given the task of planting an idea into the mind of a CEO.",
    directorId: "p1", // Christopher Nolan
    actorIds: ["p4", "p6"], // DiCaprio, Bale
    rating: 8.8,
    durationMin: 148,
  },
  {
    id: "m2",
    title: "The Dark Knight",
    year: 2008,
    genre: ["Action", "Crime", "Drama"],
    synopsis:
      "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest tests of his ability to fight injustice.",
    directorId: "p1", // Christopher Nolan
    actorIds: ["p6", "p8"], // Bale, Freeman
    rating: 9.0,
    durationMin: 152,
  },
  {
    id: "m3",
    title: "Oppenheimer",
    year: 2023,
    genre: ["Biography", "Drama", "History"],
    synopsis:
      "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.",
    directorId: "p1", // Christopher Nolan
    actorIds: ["p11", "p12"], // Murphy, Damon
    rating: 8.9,
    durationMin: 180,
  },
  {
    id: "m4",
    title: "Fight Club",
    year: 1999,
    genre: ["Drama", "Thriller"],
    synopsis:
      "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into something much, much more.",
    directorId: "p2", // David Fincher
    actorIds: ["p5", "p7"], // Pitt, Norton
    rating: 8.8,
    durationMin: 139,
  },
  {
    id: "m5",
    title: "Se7en",
    year: 1995,
    genre: ["Crime", "Drama", "Mystery"],
    synopsis:
      "Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives.",
    directorId: "p2", // David Fincher
    actorIds: ["p5", "p8"], // Pitt, Freeman
    rating: 8.6,
    durationMin: 127,
  },
  {
    id: "m6",
    title: "Pulp Fiction",
    year: 1994,
    genre: ["Crime", "Drama"],
    synopsis:
      "The lives of two mob hitmen, a boxer, a gangster and his wife intertwine in four tales of violence and redemption.",
    directorId: "p3", // Tarantino
    actorIds: ["p9", "p10"], // Thurman, Travolta
    rating: 8.9,
    durationMin: 154,
  },
  {
    id: "m7",
    title: "Inglourious Basterds",
    year: 2009,
    genre: ["Adventure", "Drama", "War"],
    synopsis:
      "In Nazi-occupied France during World War II, a plan to assassinate Nazi leaders by a group of Jewish U.S. soldiers coincides with a theatre owner's similar dream.",
    directorId: "p3", // Tarantino
    actorIds: ["p5"], // Pitt
    rating: 8.3,
    durationMin: 153,
  },
  {
    id: "m8",
    title: "The Departed",
    year: 2006,
    genre: ["Crime", "Drama", "Thriller"],
    synopsis:
      "An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston.",
    directorId: "p2", // Fincher — nota: na vida real é Scorsese, aqui é mock :)
    actorIds: ["p4", "p12"], // DiCaprio, Damon
    rating: 8.5,
    durationMin: 151,
  },
];
 
module.exports = movies;
 