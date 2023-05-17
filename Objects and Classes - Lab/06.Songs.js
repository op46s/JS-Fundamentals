function songs(array) {

    let totalSongs = array.shift();
    let typeList = array.pop();
    let theSongs = [];

        class Song {
            constructor(type, name, time) {
                this.type = type,
                this.name = name,
                this.time = time
            }
        }

        for (let el of array) {
            let [type, name, time] = el.split('_')
            let addSong = new Song(type, name, time);
            theSongs.push(addSong);
           
        }
        
        if (typeList === 'all') {
            for (let song of theSongs) {
                console.log(song.name);
            }
        } else {
            for (let song of theSongs) {
                if (typeList === song.type) {
                    console.log(song.name);
                }
                
            }
        }
}
songs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite'
]);
// songs([4,
//     'favourite_DownTown_3:14',
//     'listenLater_Andalouse_3:24',
//     'favourite_In To The Night_3:58',
//     'favourite_Live It Up_3:48',
//     'listenLater'
// ]);







