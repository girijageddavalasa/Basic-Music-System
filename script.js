const audioPlayer = document.getElementById('audio-player');
const playBtn = document.getElementById('play-btn');
const pauseBtn = document.getElementById('pause-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const trackTitle = document.getElementById('track-title');
const trackImage = document.getElementById('track-image');

// Define the tracks, titles, and album covers
const tracks = [
    'track1.mp3', 
    'track2.mp3', 
    'track3.mp3', 
    'track4.mp3', 
    'track5.mp3'
];
const trackTitles = [
    'Track 1 - BlackPink', 
    'Track 2 - Daavudi', 
    'Track 3 - HeartBreakAnniversary', 
    'Track 4 - Anithom', 
    'Track 5 - Badtameez Dil'
];
const albumCovers = [
    'album1.jpg', 
    'album2.jpg', 
    'album3.jpg', 
    'album4.jpg', 
    'album5.jpg'
];
let currentTrackIndex = 0;

// Load the selected track, title, and album cover
function loadTrack(index) {
    audioPlayer.src = tracks[index];
    trackTitle.textContent = trackTitles[index];
    trackImage.src = albumCovers[index];
}

// Play the current track
function playTrack() {
    audioPlayer.play();
    playBtn.classList.add('hide');
    pauseBtn.classList.remove('hide');
}

// Pause the current track
function pauseTrack() {
    audioPlayer.pause();
    playBtn.classList.remove('hide');
    pauseBtn.classList.add('hide');
}

// Go to the next track
function nextTrack() {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
    loadTrack(currentTrackIndex);
    playTrack();
}

// Go to the previous track
function prevTrack() {
    currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    loadTrack(currentTrackIndex);
    playTrack();
}

// Event listeners for the control buttons
playBtn.addEventListener('click', playTrack);
pauseBtn.addEventListener('click', pauseTrack);
nextBtn.addEventListener('click', nextTrack);
prevBtn.addEventListener('click', prevTrack);

// Load the first track initially
loadTrack(currentTrackIndex);
