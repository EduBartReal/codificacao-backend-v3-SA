const movies = [
  // ─── Christopher Nolan ───────────────────────────────────────────
  {
    id: "m1", title: "Inception", year: 2010,
    genre: ["Action", "Sci-Fi", "Thriller"],
    synopsis: "A thief who steals corporate secrets through dream-sharing technology is given the task of planting an idea into the mind of a CEO.",
    directorId: "p1", actorIds: ["p21", "p23"], rating: 8.8, durationMin: 148,
  },
  {
    id: "m2", title: "The Dark Knight", year: 2008,
    genre: ["Action", "Crime", "Drama"],
    synopsis: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest tests of his ability to fight injustice.",
    directorId: "p1", actorIds: ["p23", "p38"], rating: 9.0, durationMin: 152,
  },
  {
    id: "m3", title: "Oppenheimer", year: 2023,
    genre: ["Biography", "Drama", "History"],
    synopsis: "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.",
    directorId: "p1", actorIds: ["p28", "p29"], rating: 8.9, durationMin: 180,
  },
  {
    id: "m4", title: "Interstellar", year: 2014,
    genre: ["Adventure", "Drama", "Sci-Fi"],
    synopsis: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    directorId: "p1", actorIds: ["p29", "p25"], rating: 8.6, durationMin: 169,
  },
  {
    id: "m5", title: "The Prestige", year: 2006,
    genre: ["Drama", "Mystery", "Sci-Fi"],
    synopsis: "After a tragic accident, two stage magicians engage in a battle to create the ultimate illusion while sacrificing everything they have.",
    directorId: "p1", actorIds: ["p23", "p29"], rating: 8.5, durationMin: 130,
  },

  // ─── David Fincher ───────────────────────────────────────────
  {
    id: "m6", title: "Fight Club", year: 1999,
    genre: ["Drama", "Thriller"],
    synopsis: "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into something much, much more.",
    directorId: "p2", actorIds: ["p22", "p24"], rating: 8.8, durationMin: 139,
  },
  {
    id: "m7", title: "Se7en", year: 1995,
    genre: ["Crime", "Drama", "Mystery"],
    synopsis: "Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives.",
    directorId: "p2", actorIds: ["p22", "p25"], rating: 8.6, durationMin: 127,
  },
  {
    id: "m8", title: "The Social Network", year: 2010,
    genre: ["Biography", "Drama"],
    synopsis: "As Harvard student Mark Zuckerberg creates the social networking site that would become known as Facebook, he is sued by the twins who claimed he stole their idea.",
    directorId: "p2", actorIds: ["p29"], rating: 7.7, durationMin: 120,
  },
  {
    id: "m9", title: "Gone Girl", year: 2014,
    genre: ["Drama", "Mystery", "Thriller"],
    synopsis: "With his wife's disappearance having become the focus of an intense media circus, a man sees the spotlight turned on him when it's suspected that he may not be innocent.",
    directorId: "p2", actorIds: ["p29"], rating: 8.1, durationMin: 149,
  },

  // ─── Quentin Tarantino ───────────────────────────────────────────
  {
    id: "m10", title: "Pulp Fiction", year: 1994,
    genre: ["Crime", "Drama"],
    synopsis: "The lives of two mob hitmen, a boxer, a gangster and his wife intertwine in four tales of violence and redemption.",
    directorId: "p3", actorIds: ["p26", "p27"], rating: 8.9, durationMin: 154,
  },
  {
    id: "m11", title: "Inglourious Basterds", year: 2009,
    genre: ["Adventure", "Drama", "War"],
    synopsis: "In Nazi-occupied France during World War II, a plan to assassinate Nazi leaders by a group of Jewish U.S. soldiers coincides with a theatre owner's similar dream.",
    directorId: "p3", actorIds: ["p22"], rating: 8.3, durationMin: 153,
  },
  {
    id: "m12", title: "Django Unchained", year: 2012,
    genre: ["Drama", "Western"],
    synopsis: "With the help of a German bounty hunter, a freed slave sets out to rescue his wife from a brutal Mississippi plantation owner.",
    directorId: "p3", actorIds: ["p21"], rating: 8.4, durationMin: 165,
  },
  {
    id: "m13", title: "Kill Bill: Volume 1", year: 2003,
    genre: ["Action", "Crime", "Thriller"],
    synopsis: "After awakening from a coma, a former assassin seeks revenge against the people who tried to kill her.",
    directorId: "p3", actorIds: ["p26"], rating: 8.1, durationMin: 111,
  },

  // ─── Martin Scorsese ───────────────────────────────────────────
  {
    id: "m14", title: "The Departed", year: 2006,
    genre: ["Crime", "Drama", "Thriller"],
    synopsis: "An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston.",
    directorId: "p4", actorIds: ["p21", "p29"], rating: 8.5, durationMin: 151,
  },
  {
    id: "m15", title: "Goodfellas", year: 1990,
    genre: ["Biography", "Crime", "Drama"],
    synopsis: "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito.",
    directorId: "p4", actorIds: ["p31"], rating: 8.7, durationMin: 146,
  },
  {
    id: "m16", title: "The Wolf of Wall Street", year: 2013,
    genre: ["Biography", "Comedy", "Crime"],
    synopsis: "Based on the true story of Jordan Belfort, from his rise to a wealthy stockbroker living the high life to his fall involving crime, corruption and the federal government.",
    directorId: "p4", actorIds: ["p21"], rating: 8.2, durationMin: 180,
  },

  // ─── José Padilha ───────────────────────────────────────────
  {
    id: "m17", title: "Tropa de Elite", year: 2007,
    genre: ["Action", "Crime", "Drama"],
    synopsis: "In 1997, Captain Nascimento of the BOPE must find a replacement before the Pope's visit to Rio de Janeiro exposes the favela's drug trade.",
    directorId: "p8", actorIds: ["p44"], rating: 8.0, durationMin: 115,
  },
  {
    id: "m18", title: "Tropa de Elite 2", year: 2010,
    genre: ["Action", "Crime", "Drama"],
    synopsis: "After being promoted, Captain Nascimento faces a greater enemy: the corrupt political and militia system in Rio de Janeiro.",
    directorId: "p8", actorIds: ["p44"], rating: 7.8, durationMin: 115,
  },
  {
    id: "m19", title: "Ônibus 174", year: 2002,
    genre: ["Documentary", "Crime"],
    synopsis: "A documentary about the June 2000 hijacking of a bus in Rio de Janeiro and the life of the hijacker.",
    directorId: "p8", actorIds: [], rating: 8.1, durationMin: 133,
  },

  // ─── Fernando Meirelles ───────────────────────────────────────────
  {
    id: "m20", title: "Cidade de Deus", year: 2002,
    genre: ["Crime", "Drama"],
    synopsis: "Two boys growing up in a violent neighborhood of Rio de Janeiro take different paths: one becomes a photographer, the other a drug dealer.",
    directorId: "p9", actorIds: ["p45"], rating: 8.6, durationMin: 130,
  },
  {
    id: "m21", title: "The Constant Gardener", year: 2005,
    genre: ["Drama", "Mystery", "Romance"],
    synopsis: "A widower is determined to get to the bottom of a potentially explosive secret involving his wife's murder and a pharmaceutical giant.",
    directorId: "p9", actorIds: [], rating: 7.4, durationMin: 129,
  },

  // ─── Bong Joon-ho ───────────────────────────────────────────
  {
    id: "m22", title: "Parasite", year: 2019,
    genre: ["Comedy", "Drama", "Thriller"],
    synopsis: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
    directorId: "p11", actorIds: ["p49"], rating: 8.5, durationMin: 132,
  },
  {
    id: "m23", title: "Memories of Murder", year: 2003,
    genre: ["Crime", "Drama", "Mystery"],
    synopsis: "In 1986, two detectives investigate Korea's first reported serial murders.",
    directorId: "p11", actorIds: ["p49"], rating: 8.1, durationMin: 132,
  },
  {
    id: "m24", title: "Snowpiercer", year: 2013,
    genre: ["Action", "Drama", "Sci-Fi"],
    synopsis: "In a post-apocalyptic ice age, the survivors live on a perpetually moving train, with the lower class revolting against the upper class.",
    directorId: "p11", actorIds: [], rating: 7.1, durationMin: 126,
  },

  // ─── Akira Kurosawa ───────────────────────────────────────────
  {
    id: "m25", title: "Seven Samurai", year: 1954,
    genre: ["Action", "Adventure", "Drama"],
    synopsis: "A poor village under attack by bandits recruits seven samurai to help them defend themselves.",
    directorId: "p13", actorIds: ["p50"], rating: 8.6, durationMin: 207,
  },
  {
    id: "m26", title: "Rashomon", year: 1950,
    genre: ["Crime", "Drama", "Mystery"],
    synopsis: "The rape of a bride and the murder of her samurai husband are described by four witnesses in contradictory ways.",
    directorId: "p13", actorIds: ["p50"], rating: 8.2, durationMin: 88,
  },

  // ─── Denis Villeneuve ───────────────────────────────────────────
  {
    id: "m27", title: "Dune", year: 2021,
    genre: ["Adventure", "Drama", "Sci-Fi"],
    synopsis: "Feature adaptation of Frank Herbert's science fiction novel about the son of a noble family entrusted with the protection of the most valuable asset in the galaxy.",
    directorId: "p16", actorIds: ["p41"], rating: 8.0, durationMin: 155,
  },
  {
    id: "m28", title: "Blade Runner 2049", year: 2017,
    genre: ["Drama", "Mystery", "Sci-Fi"],
    synopsis: "Young Blade Runner K's discovery of a long-buried secret leads him to track down former Blade Runner Rick Deckard.",
    directorId: "p16", actorIds: ["p37"], rating: 8.0, durationMin: 164,
  },
  {
    id: "m29", title: "Arrival", year: 2016,
    genre: ["Drama", "Mystery", "Sci-Fi"],
    synopsis: "A linguist works with the military to communicate with alien lifeforms after twelve mysterious spacecraft appear around the world.",
    directorId: "p16", actorIds: [], rating: 7.9, durationMin: 116,
  },

  // ─── Alfonso Cuarón ───────────────────────────────────────────
  {
    id: "m30", title: "Gravity", year: 2013,
    genre: ["Drama", "Sci-Fi", "Thriller"],
    synopsis: "Two astronauts work together to survive after an accident leaves them stranded in space.",
    directorId: "p17", actorIds: ["p41"], rating: 7.7, durationMin: 91,
  },
  {
    id: "m31", title: "Children of Men", year: 2006,
    genre: ["Drama", "Sci-Fi", "Thriller"],
    synopsis: "In 2027, in a chaotic world in which women have become somehow infertile, a former activist agrees to help transport a miraculously pregnant woman to a sanctuary at sea.",
    directorId: "p17", actorIds: [], rating: 7.9, durationMin: 109,
  },

  // ─── James Cameron ───────────────────────────────────────────
  {
    id: "m32", title: "Titanic", year: 1997,
    genre: ["Drama", "Romance"],
    synopsis: "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
    directorId: "p19", actorIds: ["p21"], rating: 7.9, durationMin: 194,
  },
  {
    id: "m33", title: "Avatar", year: 2009,
    genre: ["Action", "Adventure", "Sci-Fi"],
    synopsis: "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    directorId: "p19", actorIds: [], rating: 7.9, durationMin: 162,
  },

  // ─── Steven Spielberg ───────────────────────────────────────────
  {
    id: "m34", title: "Schindler's List", year: 1993,
    genre: ["Biography", "Drama", "History"],
    synopsis: "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
    directorId: "p5", actorIds: ["p31"], rating: 9.0, durationMin: 195,
  },
  {
    id: "m35", title: "Jurassic Park", year: 1993,
    genre: ["Action", "Adventure", "Sci-Fi"],
    synopsis: "A pragmatic paleontologist touring an almost-complete theme park on an island in Central America is tasked with protecting a couple of kids after a power failure causes the park's cloned dinosaurs to run loose.",
    directorId: "p5", actorIds: [], rating: 8.2, durationMin: 127,
  },

  // ─── Ridley Scott ───────────────────────────────────────────
  {
    id: "m36", title: "Gladiator", year: 2000,
    genre: ["Action", "Adventure", "Drama"],
    synopsis: "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
    directorId: "p15", actorIds: ["p42"], rating: 8.5, durationMin: 155,
  },
  {
    id: "m37", title: "Blade Runner", year: 1982,
    genre: ["Sci-Fi", "Thriller"],
    synopsis: "A blade runner must pursue and terminate four replicants who stole a ship in space and have returned to Earth to find their creator.",
    directorId: "p15", actorIds: [], rating: 8.1, durationMin: 117,
  },

  // ─── Kleber Mendonça Filho ───────────────────────────────────────────
  {
    id: "m38", title: "Bacurau", year: 2019,
    genre: ["Drama", "Sci-Fi", "Thriller"],
    synopsis: "After the death of her grandmother, Teresa returns to her small hometown of Bacurau in the Brazilian sertão, only to discover that the town has disappeared from all maps.",
    directorId: "p10", actorIds: ["p44"], rating: 7.4, durationMin: 131,
  },
  {
    id: "m39", title: "Aquarius", year: 2016,
    genre: ["Drama"],
    synopsis: "A retired music critic lives alone in an apartment building that a real estate developer wants to demolish. She refuses to move out.",
    directorId: "p10", actorIds: ["p46"], rating: 7.3, durationMin: 145,
  },
];

export default movies;