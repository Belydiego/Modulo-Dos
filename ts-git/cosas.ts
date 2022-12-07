const movies = [
  {
    titulo: "el hijo de batman",
    año: 2014,
    id: 1,
  },
  {
    titulo: "superman desatado",
    año: 2013,
    id: 2,
  },
  {
    titulo: "batman luz de gas",
    año: 2017,
    id: 3,
  },
];

function getAll() {
  return movies;
}

function getById(id: number) {
  const idMovie = movies.find((obj) => {
    return obj.id == id;
  });
  return idMovie;
}

export { getAll, getById };
