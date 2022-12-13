class Peli {
  title: string;
  rating: number;
  getTitle() {
    return this.title;
  }
}

function main() {
  // instancias: objetos creados a partir de class
  const peli = new Peli();
  peli.title = "Un Titulo";
  peli.rating = 4;
  const peli2 = new Peli();
  peli2.title = "Otro titulo";
  peli2.rating = 6;
  console.log(peli.getTitle());
  console.log(peli2.getTitle());
}
main();
