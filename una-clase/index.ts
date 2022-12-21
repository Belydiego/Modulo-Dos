// crear la clase Banda aquí

class Banda {
  members: string[];
  albums: any[];
  constructor(members: string[], albums: any[]) {
    this.members = members;
    this.albums = albums;
  }

  getFirstAlbum() {
    return this.albums[0];
  }

  getAllAlbums() {
    return this.albums;
  }

  getAllMembers() {
    return this.members;
  }
  getRandomSong(albumTitle) {
    const album = this.albums.find((album: any) => {
      if (album.title === albumTitle) {
        return true;
      }
    });
    const posicionRandom = Math.random() * album.songs.length;
    const posicionRedondeada = Math.floor(posicionRandom);
    return album.songs[posicionRedondeada];
  }
}

// no modificar este test
function testClaseBanda() {
  const members = ["dana", "pau"];
  const fa = {
    title: "album 1",
    songs: ["album 1 - tema 1", "album 1 - tema 2"],
  };
  const banda = new Banda(members, [
    fa,
    {
      title: "album 2",
      songs: ["album 2 - tema 1", "album 2 - tema 2", "album 2 - tema 3"],
    },
  ]);

  const firstAlbum = banda.getFirstAlbum();
  const allMembers = banda.getAllMembers();
  const randomSongAlbum1 = banda.getRandomSong("album 1");

  if (
    firstAlbum.title == fa.title &&
    fa.songs.length == firstAlbum.songs.length &&
    JSON.stringify(allMembers.sort()) == JSON.stringify(members.sort()) &&
    fa.songs.includes(randomSongAlbum1)
  ) {
    console.log("testClaseBanda passed");
  } else {
    throw "testClaseBanda not passed";
  }
}

function main() {
  testClaseBanda();
}

main();
