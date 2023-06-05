const music = new Audio("1.mp3");
//music.play();

const songs = [
    {
        id: '1',
        songname: `on my way
        <div class="subtitle">alan walker</div>`,
        poster: "1.jpg"

    },
    {
        id: '2',
        songname: `on my way
        <div class="subtitle">alan walker</div>`,
        poster: "2.jpg"

    },
    {
        id: '3',
        songname: `on my way
        <div class="subtitle">alan walker</div>`,
        poster: "3.jpg"

    },
    {
        id: '4',
        songname: `on my way
        <div class="subtitle">alan walker</div>`,
        poster: "4.jpg"

    },
    {
        id: '5',
        songname: `on my way
        <div class="subtitle">alan walker</div>`,
        poster: "5.jpg"

    },
    {
        id: '6',
        songname: `on my way
        <div class="subtitle">alan walker</div>`,
        poster: "6.jpg"

    },
    {
        id: '7',
        songname: `on my way
        <div class="subtitle">alan walker</div>`,
        poster: "7.jpg"

    },
    {
        id: '8',
        songname: `on my way
        <div class="subtitle">alan walker</div>`,
        poster: "8.jpg"

    },
    {
        id: '9',
        songname: `on my way
        <div class="subtitle">alan walker</div>`,
        poster: "9.jpg"

    },
    {
        id: '10',
        songname: `on my way
        <div class="subtitle">alan walker</div>`,
        poster: "10.jpg"

    },
    {
        id: '11',
        songname: `on my way
        <div class="subtitle">alan walker</div>`,
        poster: "11.jpg"

    },
    {
        id: '12',
        songname: `on my way
        <div class="subtitle">alan walker</div>`,
        poster: "12.jpg"

    },
    {
        id: '13',
        songname: `on my way
        <div class="subtitle">alan walker</div>`,
        poster: "13.jpg"

    },
    {
        id: '14',
        songname: `on my way
        <div class="subtitle">alan walker</div>`,
        poster: "14.jpg"

    },
    {
        id: '15',
        songname: `on my way
        <div class="subtitle">alan walker</div>`,
        poster: "15.jpg"

    },
    {
        id: '16',
        songname: `on my way
        <div class="subtitle">alan walker</div>`,
        poster: "16.jpg"

    },
    {
        id: '17',
        songname: `on my way
        <div class="subtitle">alan walker</div>`,
        poster: "17.jpg"

    },
    {
        id: '18',
        songname: `on my way
        <div class="subtitle">alan walker</div>`,
        poster: "18.jpg"

    },
    {
        id: '19',
        songname: `on my way
        <div class="subtitle">alan walker</div>`,
        poster: "19.jpg"

    },
    {
        id: '20',
        songname: `on my way
        <div class="subtitle">alan walker</div>`,
        poster: "20.jpg"

    }

]


Array.from(document.getElementsByClassName('songitems')).forEach((e,i) => {
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songname; 
})

let masterplay = document.getElementById('masterplay');
let wave = document.getElementById('wave');
masterplay.addEventListener('click', () => {
    if(music.paused || music.currentTime <=0){
        music.play();
        wave.classList.add('active1');
        masterplay.classList.remove('bi-play');
        masterplay.classList.add('bi-pause');
    }
    else{
        music.pause();
        wave.classList.remove('active1');
        masterplay.classList.add('bi-play');
        masterplay.classList.remove('bi-pause');
    }
})

const background = () => {
    Array.from(document.getElementsByClassName('songitems')).forEach((el) =>{
        el.style.background = 'rgb(105,105,170,.0)';
    })
}

const allplay = () => {
    Array.from(document.getElementsByClassName('playlistplay')).forEach((el) =>{
        el.classList.add('bi-play-circle-fill');
        el.classList.remove('bi-pause-circle-fill');
    })
}


let index =0;
let poster_masterplay=document.getElementById('poster_masterplay');
let downloadmusic = document.getElementById('download_music');
let st=document.getElementById('title');
Array.from(document.getElementsByClassName('playlistplay')).forEach((e)=>{
    e.addEventListener('click' , (el) => {
        index = el.target.id;
        music.src = `audio/${index}.mp3`;
        poster_masterplay.src=`${index}.jpg`;
        music.play();
        masterplay.classList.remove('bi-play');
        masterplay.classList.add('bi-pause');
        let title1 = songs.filter((xy) => {
            return xy.id == index;
        })
        downloadmusic.href = `audio/${index}.mp3`;
        title1.forEach(w => {
            let { songname } = w;
            st.innerHTML = songname;
            downloadmusic.setAttribute('download',songname);
        })
        background();
        Array.from(document.getElementsByClassName('songitems'))[index-1].style.background='rgb(105,105,170,.2)';
        allplay();
        Array.from(document.getElementsByClassName('playlistplay'))[index-1].classList.add('bi-pause-circle-fill');
        Array.from(document.getElementsByClassName('playlistplay'))[index-1].classList.remove('bi-play-circle-fill');
        wave.classList.add('active1');
    })
})

let currentstart = document.getElementById('currentstart');
let currentend = document.getElementById('currentend');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate' , () => {
    let curt = music.currentTime;
    let dur = music.duration;
    let min = Math.floor(dur/60);
    let sec = Math.floor(dur%60);
    if(sec <10){
        sec = `0${sec}`;
    }
    currentend.innerHTML = `${min}:${sec}`;
    let min1 = Math.floor(curt/60);
    let sec1 = Math.floor(curt%60);
    if(sec1 <10){
        sec1 = `0${sec1}`;
    }
    currentstart.innerHTML = `${min1}:${sec1}`;

    let progress = parseInt((curt/dur)*100);
    seek.value = progress;
    let barval = seek.value;
    bar2.style.width = `${barval}%`;
    dot.style.left = `${barval}%`;
})

seek.addEventListener('change' , () => {
    music.currentTime = seek.value * music.duration /100 ;
})

let volicon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let voldot = document.getElementById('vol_dot');
let volbar = document.getElementsByClassName('vol_bar')[0];

vol.addEventListener('change' , () => {
    if(vol.value == 0){
        volicon.classList.remove('bi-volume-up-fill');
        volicon.classList.remove('bi-volume-down-fill');
        volicon.classList.add('bi-volume-mute-fill');
    }
    else if(vol.value<50){
        volicon.classList.remove('bi-volume-up-fill');
        volicon.classList.add('bi-volume-down-fill');
        volicon.classList.remove('bi-volume-mute-fill');
    }
    else{
        volicon.classList.add('bi-volume-up-fill');
        volicon.classList.remove('bi-volume-down-fill');
        volicon.classList.remove('bi-volume-mute-fill');
    }
    let volval = vol.value;
    volbar.style.width = `${volval}%`;
    voldot.style.left = `${volval}%`;
    music.volume = volval/100;
})

let prev = document.getElementById('prev');
let nexts = document.getElementById('nexts');
prev.addEventListener('click' , () => {
    index = index-1;
    if(index <1){
        index = Array.from(document.getElementsByClassName('songitems')).length;
    }
        music.src = `audio/${index}.mp3`;
        poster_masterplay.src=`${index}.jpg`;
        music.play();
        masterplay.classList.remove('bi-play');
        masterplay.classList.add('bi-pause');
        let title1 = songs.filter((xy) => {
            return xy.id == index;
        })
        title1.forEach(w => {
            let { songname } = w;
            st.innerHTML = songname;
        })
        background();
        Array.from(document.getElementsByClassName('songitems'))[index-1].style.background='rgb(105,105,170,.2)';
        allplay();
        Array.from(document.getElementsByClassName('playlistplay'))[index-1].classList.add('bi-pause-circle-fill');
        Array.from(document.getElementsByClassName('playlistplay'))[index-1].classList.remove('bi-play-circle-fill');
        wave.classList.add('active1');
    
})

nexts.addEventListener('click' , () => {
    index = index+1;
    if(index > Array.from(document.getElementsByClassName('songitems')).length){
        index = 1;
    }
        music.src = `audio/${index}.mp3`;
        poster_masterplay.src=`${index}.jpg`;
        music.play();
        masterplay.classList.remove('bi-play');
        masterplay.classList.add('bi-pause');
        let title1 = songs.filter((xy) => {
            return xy.id == index;
        })
        title1.forEach(w => {
            let { songname } = w;
            st.innerHTML = songname;
        })
        background();
        Array.from(document.getElementsByClassName('songitems'))[index-1].style.background='rgb(105,105,170,.2)';
        allplay();
        Array.from(document.getElementsByClassName('playlistplay'))[index-1].classList.add('bi-pause-circle-fill');
        Array.from(document.getElementsByClassName('playlistplay'))[index-1].classList.remove('bi-play-circle-fill');
        wave.classList.add('active1');
    
})

let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_artist_left= document.getElementById('pop_artist_left');
let pop_artist_right = document.getElementById('pop_artist_right');
let pop_song = document.getElementsByClassName('pop_songs')[0];
let item = document.getElementsByClassName('items')[0]; 

pop_song_right.addEventListener('click' , () => {
    pop_song.scrollLeft += 400;
})
pop_song_left.addEventListener('click' , () => {
    pop_song.scrollLeft -= 400;
})
pop_artist_right.addEventListener('click' , () => {
    item.scrollLeft += 400;
})
pop_artist_left.addEventListener('click' , () => {
    item.scrollLeft -= 400;
})

let shuffle = document.getElementsByClassName('shuffle')[0];
shuffle.addEventListener('click',() => {
    let a = shuffle.innerHTML;
    switch(a){
        case "next" :
            shuffle.classList.add('bi-arrow-repeat');
            shuffle.classList.remove('bi-music-note');
            shuffle.classList.remove('bi-shuffle');
            shuffle.innerHTML="repeat";
            break;
        case "repeat" :
            shuffle.classList.remove('bi-arrow-repeat');
            shuffle.classList.remove('bi-music-note');
            shuffle.classList.add('bi-shuffle');
            shuffle.innerHTML="shuffle";
            break;
        case "shuffle" :
            shuffle.classList.remove('bi-arrow-repeat');
            shuffle.classList.add('bi-music-note');
            shuffle.classList.remove('bi-shuffle');
            shuffle.innerHTML="next";
            break;

        
    }
})
music.addEventListener('ended',() => {
    let a = shuffle.innerHTML;
    switch(a){
        case "next" :
            nextmusic();
            break;
        case "repeat" :
            repeatmusic();
            break;
        case "shuffle" :
            randommusic();
            break;
    }
})

const nextmusic = () =>{
        if(index == songs.length){
            index=1;
        }
        else{
            index++;
        }
        
        // if(index > Array.from(document.getElementsByClassName('songitems')).length){
        //     index = 1;
        // }
        music.src = `audio/${index}.mp3`;
        poster_masterplay.src=`${index}.jpg`;
        music.play();
        masterplay.classList.remove('bi-play');
        masterplay.classList.add('bi-pause');
        let title1 = songs.filter((xy) => {
            return xy.id == index;
        })
        downloadmusic.href = `audio/${index}.mp3`;
        title1.forEach(w => {
            let { songname } = w;
            st.innerHTML = songname;
            downloadmusic.setAttribute('download',songname);
        })
        background();
        Array.from(document.getElementsByClassName('songitems'))[index-1].style.background='rgb(105,105,170,.2)';
        allplay();
        Array.from(document.getElementsByClassName('playlistplay'))[index-1].classList.add('bi-pause-circle-fill');
        Array.from(document.getElementsByClassName('playlistplay'))[index-1].classList.remove('bi-play-circle-fill');
        wave.classList.add('active1');
}

const repeatmusic = () =>{
    index;
    music.src = `audio/${index}.mp3`;
    poster_masterplay.src=`${index}.jpg`;
    music.play();
    masterplay.classList.remove('bi-play');
    masterplay.classList.add('bi-pause');
    let title1 = songs.filter((xy) => {
        return xy.id == index;
    })
    downloadmusic.href = `audio/${index}.mp3`;
    title1.forEach(w => {
        let { songname } = w;
        st.innerHTML = songname;
        downloadmusic.setAttribute('download',songname);
    })
    background();
    Array.from(document.getElementsByClassName('songitems'))[index-1].style.background='rgb(105,105,170,.2)';
    allplay();
    Array.from(document.getElementsByClassName('playlistplay'))[index-1].classList.add('bi-pause-circle-fill');
    Array.from(document.getElementsByClassName('playlistplay'))[index-1].classList.remove('bi-play-circle-fill');
    wave.classList.add('active1');
}
const randommusic = () =>{
    if(index == songs.length){
        index=1;
    }
    else{
        index = Math.floor(Math.random()*songs.length + 1);
    }
    music.src = `audio/${index}.mp3`;
    poster_masterplay.src=`${index}.jpg`;
    music.play();
    masterplay.classList.remove('bi-play');
    masterplay.classList.add('bi-pause');
    let title1 = songs.filter((xy) => {
        return xy.id == index;
    })
    downloadmusic.href = `audio/${index}.mp3`;
    title1.forEach(w => {
        let { songname } = w;
        st.innerHTML = songname;
        downloadmusic.setAttribute('download',songname);
    })
    background();
    Array.from(document.getElementsByClassName('songitems'))[index-1].style.background='rgb(105,105,170,.2)';
    allplay();
    Array.from(document.getElementsByClassName('playlistplay'))[index-1].classList.add('bi-pause-circle-fill');
    Array.from(document.getElementsByClassName('playlistplay'))[index-1].classList.remove('bi-play-circle-fill');
    wave.classList.add('active1');
}