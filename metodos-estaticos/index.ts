//metodos estaticos
class Peli {
  title: string;
  tags: string[];
  constructor(title: string) {
    this.title = title;
  }
  getTitle(): string {
    return this.title;
  }
  static searchPeli(): Peli[] {
    const peliEncontrada = new Peli("batman");
    return [peliEncontrada];
  }
}

function main() {
  const miPeli = new Peli("Una peli");
  console.log(miPeli.getTitle());

  const peli = Peli.searchPeli();
  console.log(peli[0]);
}
main();
