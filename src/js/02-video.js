const video = document.querySelector("#vimeo-player");
const player = new Vimeo.Player(video);
var throttle = require('lodash.throttle');

player.on('timeupdate', throttle(saveCarrentTime, 1000));
 
function saveCarrentTime (data){
    localStorage.setItem("videoplayer-current-time", data.seconds);
    console.log(data.seconds);};

let time = localStorage.getItem('videoplayer-current-time');
console.log(time);
player.setCurrentTime(time);

