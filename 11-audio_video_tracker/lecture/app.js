'use strict';

var video = document.getElementById('lecture-audio');
var start = document.getElementById('audio-start');
var pause = document.getElementById('audio-pause');

function handleAudioStart() {
  video.play();
}

function handleAudioPause() {
  video.pause();
}

start.addEventListener('click', handleAudioStart);
pause.addEventListener('click', handleAudioPause);
