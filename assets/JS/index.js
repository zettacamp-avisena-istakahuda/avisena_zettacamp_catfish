var songList = [
    {
        Title: 'Zombie',
        Artist: 'The Cranberries',
        Genre: 'Rock/Alternatives/Indie',
        Duration: '05:06'
    },
    {
        Title: 'Linger',
        Artist: 'The Cranberries',
        Genre: 'Rock/Alternatives/Folk/Pop',
        Duration: '04:34'
    },
    {
        Title: 'Ode to My Family',
        Artist: 'The Cranberries',
        Genre: 'Rock/Alternatives/Indie',
        Duration: '04:31'
    },
    {
        Title: 'When You are Gone',
        Artist: 'The Cranberries',
        Genre: 'Rock/Pop/Folk',
        Duration: '03:52'
    },
    {
        Title: 'La Bachata',
        Artist: 'Manuel Turizo',
        Genre: 'Pop/Latin',
        Duration: '02:42'
    },
    {
        Title: 'Contigo',
        Artist: 'Sebastian Yatra, Pablo Alboran',
        Genre: 'Pop/R&B/Hip-Hop',
        Duration: '03:28'
    },
    {
        Title: 'Ojitos Lindos',
        Artist: 'Bad Bunny, Bomba Estereo',
        Genre: 'Pop/Reggae/Latin',
        Duration: '04:18'
    },
    {
        Title: '21 Sept',
        Artist: 'Greenday',
        Genre: 'Pop/Reggae/Latin',
        Duration: '30:28'
    },
    {
        Title: 'ksdsjb',
        Artist: '3',
        Genre: '3',
        Duration: '10:28'
    }
];

const ArtistButtonListener = () => {
    const form = document.getElementById('artistGrouper');
    let artist = form.elements['artistName'].value;
    console.log(ArtistGroup(artist));
}

const GenreButtonListener = () => {
    const form = document.getElementById('genreGrouper');
    let genre = form.elements['genreName'].value;
    console.log(GenreGroup(genre));
}

const DurationButtonListener = () => {
    const form = document.getElementById('durationGrouper');
    let max = form.elements['max'].value;
    console.log(DurationGroup(max));
}

const GenreGroup = (genre) => {
    let genreGroup = [];
    for (const element of songList) {
        if (element.Genre.includes(genre)) {
            genreGroup.push(element);
        }
    }
    return genreGroup;
}

const ArtistGroup = (artist) => {
    let artistGroup = [];
    for (const element of songList) {
        if (element.Artist.includes(artist)) {
            artistGroup.push(element);
        }
    }
    return artistGroup;
}

const DurationGroup = (max) => {


    let durationGroup = [];
    let totalDuration = 0;
    let totalDurationChecker = 0;
    let total = { TotalDuration: 0 }
    // for (const element of songList) {
    //     totalDurationChecker = DurationChanger(element.Duration) + totalDuration;
    //     if (totalDurationChecker > DurationChanger(max)) {
    //         totalDurationChecker = totalDurationChecker - DurationChanger(element.Duration);
    //     }
    //     else {
    //         durationGroup.push(element);
    //         totalDuration = totalDuration + DurationChanger(element.Duration);
    //     }
    // }
    // total.TotalDuration = BacktoMinutes(totalDuration);
    // durationGroup.push(total);

    //chall
    let arrLength = songList.length;
    let sudahPernah = [];
    while(sudahPernah.length<arrLength) {
        let randomSong = Math.floor(Math.random() * (arrLength - 0) + 0);
        totalDurationChecker = DurationChanger(songList[randomSong].Duration) + totalDuration;
        if (totalDurationChecker > DurationChanger(max) || sudahPernah.includes(randomSong)) {
            totalDurationChecker = totalDurationChecker - DurationChanger(songList[randomSong].Duration);
            arrLength--;
        }
        else {
            durationGroup.push(songList[randomSong]);
            totalDuration = totalDuration + DurationChanger(songList[randomSong].Duration);
            sudahPernah.push(randomSong);
            console.log(sudahPernah.includes(randomSong));
        }
    }

    total.TotalDuration = BacktoMinutes(totalDuration);
    durationGroup.push(total);
    //chall


    return durationGroup;
}

const DurationChanger = (duration) => {
    let seconds = duration.split(':');
    let totalSeconds = parseInt(seconds[0]) * 60 + parseInt(seconds[1]);
    return totalSeconds;
}

const BacktoMinutes = (time) => {
    let minutes = parseInt(time / 60);
    let seconds = time - minutes * 60;
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if (seconds < 10) {
        seconds = '0' + seconds;
    }

    return (minutes + ':' + seconds);
}
