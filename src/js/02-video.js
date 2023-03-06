import vimeoPlayer from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new vimeoPlayer(iframe);

const onPlay = function (e) {
  localStorage.setItem('videoplayer-current-time', e.seconds);
  // localStorage.setItem('videoplayer-current-percent', e.percent);
  // localStorage.setItem('videoplayer-duration', e.duration);
};

player.on('timeupdate', throttle(onPlay, 1000));

// const quality = function (e) {
//   console.log('Quality:', e.quality);
// };

// player.on('qualitychange', quality);

player.setCurrentTime(localStorage.getItem('videoplayer-current-time') || 0);

// const time = localStorage.getItem('videoplayer-current-time');
// console.log(time);
