import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onPlay = function (data) {
  player
    .getCurrentTime()
    .then(function (seconds) {
      // seconds = the current playback position
      localStorage.setItem('videoplayer-current-time', seconds);
    })
    .catch(function (error) {
      // an error occurred
    });
};

function play() {
  player
    .setCurrentTime(localStorage.getItem('videoplayer-current-time'))
    .then(function (seconds) {});
}

function atTheAnd() {
  player.setCurrentTime(0).then(function (seconds) {});
}

player.on('timeupdate', throttle(onPlay, 1000));
player.on('play', play);
player.on('ended', atTheAnd);
