class AlbumDeBanda {
  title: string;
  songs: string[];
  constructor(title: string, songs: string[]) {
    this.title = title;
    this.songs = songs;
  }
}

class Banda {
  members: string[];
  albums: AlbumDeBanda[];
  constructor(members: string[], albums: AlbumDeBanda[]) {
    this.members = members;
    this.albums = albums;
  }
}

function main() {
  const PrimerAlbum = new AlbumDeBanda("Primer album", [
    "canción 1",
    "canción 2",
  ]);
  const SegundoAlbum = new AlbumDeBanda("Segundo album", [
    "Canción 1",
    "Canción 2",
  ]);
  const TercerAlbum = {
    title: "Tercer album",
    songs: ["Canción 1", "Canción 2"],
  };
  const unaBanda = new Banda(
    ["Diego"],
    [PrimerAlbum, SegundoAlbum, TercerAlbum]
  );

  console.log(unaBanda.members);
  console.log(unaBanda.albums);
}

main();
