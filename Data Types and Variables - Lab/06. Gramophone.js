function gramophone(band, album, song) {

    let result = ((band.length * album.length) * song.length / 2) / 2.5;
    console.log(`The plate was rotated ${Math.ceil(result)} times.`);

}
gramophone('Black Sabbath', 'Paranoid', 'War Pigs');
gramophone('Rammstein', 'Sehnsucht', 'Engel');


//(albumName.length * bandName.length) * song-name.length / 2
