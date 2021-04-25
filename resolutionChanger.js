function onYouTubeIframeAPIReady() {
  const player = document.querySelector('.html5-video-player');
  const offeredQualityLevels = player.getAvailableQualityLevels();
  player.setPlaybackQuality(offeredQualityLevels[0]);
} 