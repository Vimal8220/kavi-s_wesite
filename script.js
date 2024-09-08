// Get elements for audio control
const audioButton = document.getElementById('audioButton');
const birthdayAudio = document.getElementById('birthdayAudio');
const preciousAudioButton = document.getElementById('audioButtonPrecious');
const preciousAudio = document.getElementById('preciousAudio');

// Function to toggle audio playback
function toggleAudio(audioElement, buttonElement) {
  if (audioElement.paused) {
    audioElement.play();
    buttonElement.classList.add('playing');
    buttonElement.classList.remove('paused');
  } else {
    audioElement.pause();
    buttonElement.classList.add('paused');
    buttonElement.classList.remove('playing');
  }
}

// Add event listener to birthday audio button
audioButton.addEventListener('click', function() {
  toggleAudio(birthdayAudio, audioButton);
});

// Add event listener to precious audio button
preciousAudioButton.addEventListener('click', function() {
  toggleAudio(preciousAudio, preciousAudioButton);
});

// Functions to handle page transitions
function showCardPage() {
  document.getElementById('index-page').style.display = 'none';
  document.getElementById('card-page').style.display = 'block';
}

function showBirthdayPage() {
  document.getElementById('card-page').style.display = 'none';
  document.getElementById('birthday-page').style.display = 'block';
}

function showPreciousPage() {
  document.getElementById('birthday-page').style.display = 'none';
  document.getElementById('precious-page').style.display = 'block';
}

function showIndexPage() {
  document.getElementById('precious-page').style.display = 'none';
  document.getElementById('index-page').style.display = 'block';
}
