function songs(input) {

    let theSongsList = [];
    let songNumber = input.shift();
    let wantedSongType = input.pop();

    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList,
            this.name = name,
            this.time = time
        }
    }

    for (let i=0; i<songNumber; i++) {  
        let [typeList, name, time] = input[i].split('_')
        let addSong = new Song (typeList, name, time);
        theSongsList.push(addSong)
    }

    if (wantedSongType === 'all') {
        theSongsList.forEach((i) => console.log(i.name));
    } else {
        let filtered = theSongsList.filter((i) => i.typeList === wantedSongType);
        filtered.forEach((i) => console.log(i.name))
    }
}
songs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite'
]);
songs([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all'
]);