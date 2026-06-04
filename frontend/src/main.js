import './style.css';
import './app.css';

import logo from './assets/images/logo-universal.png';
import {Greet} from '../wailsjs/go/main/App';

let playlistIds = [
  "PLE18841CABEA24090",
  "PLUl4u3cNGP60IKRN_pFptIBxeiMc0MCJP",
  "PLvby6pHU7GVbQ50byzw0VsCQkNl-LC1Wr",
  "PLlYq6nSCaWS_5ZaJZTSavFdveYa2r_pVY",
  "PLNgYKTTWfAqG8cZyRBoOYp-mSkfb70SXY",
  "PLmPVFinIE6aQ0lpxHeI2JU3l9l550G36p",
  "PLAqhIrjkxbuWI23v9cThsA9GvCAUhRvKZ",
  "PLnHOyZsmJrozd5HP9Pw9clexiXAqmZk1L",
  "PL874A415D066843B8",
];

// Limit to first 9 playlists for a 3x3 grid
const visiblePlaylistIds = playlistIds.slice(0, 9);
const playlistCards = visiblePlaylistIds
  .map(
    (id) => `
    <div class="playlist-card">
      <iframe src="https://www.youtube.com/embed/videoseries?list=${id}&listType=playlist&modestbranding=1&rel=0" sandbox="allow-scripts allow-same-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  `,
  )
  .join("");

const appContent = `
  <section class="hero">
    <div class="hero-logo">
      <img id="logo" class="logo" alt="App logo">
    </div>
    <div class="hero-body">
      <div class="result" id="result">Please enter your name below 👇</div>
      <div class="input-box" id="input">
        <input class="input" id="name" type="text" autocomplete="off" placeholder="Your name" />
        <button class="btn" onclick="greet()">Greet</button>
      </div>
    </div>
  </section>
  <section class="playlist-section">
    <h2>Learn SICP Playlists</h2>
    <div class="playlist-grid">
      ${playlistCards}
    </div>
  </section>
`;

document.querySelector("#app").innerHTML = appContent;

document.getElementById('logo').src = logo;

const nameElement = document.getElementById("name");
if (nameElement) {
  nameElement.focus();
}

const resultElement = document.getElementById("result");

// Setup the greet function
window.greet = function () {
    // Get name
    let name = nameElement.value;

    // Check if the input is empty
    if (name === "") return;

  // Call App.Greet(name) if Wails runtime is available, otherwise fall back to a local greeting
  if (typeof Greet === 'function' && window.go && window.go.main && window.go.main.App) {
    try {
      Greet(name)
        .then((result) => {
          // Update result with data back from App.Greet()
          resultElement.innerText = result;
        })
        .catch((err) => {
          console.error(err);
          resultElement.innerText = 'Error contacting application.';
        });
    } catch (err) {
      console.error(err);
      resultElement.innerText = 'Error contacting application.';
    }
  } else {
    // Fallback for running the frontend in a browser or when Wails runtime is not injected
    resultElement.innerText = `Hello ${name}, (local)`;
  }
};


