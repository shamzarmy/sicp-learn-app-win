(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const c="/assets/logo-universal.157a874a.png";function a(r){return window.go.main.App.Greet(r)}let d=["PLE18841CABEA24090","PLUl4u3cNGP60IKRN_pFptIBxeiMc0MCJP","PLvby6pHU7GVbQ50byzw0VsCQkNl-LC1Wr","PLlYq6nSCaWS_5ZaJZTSavFdveYa2r_pVY","PLNgYKTTWfAqG8cZyRBoOYp-mSkfb70SXY","PLmPVFinIE6aQ0lpxHeI2JU3l9l550G36p","PLAqhIrjkxbuWI23v9cThsA9GvCAUhRvKZ","PLnHOyZsmJrozd5HP9Pw9clexiXAqmZk1L","PL874A415D066843B8"];const u=d.map(r=>`
    <div class="playlist-card">
      <iframe src="https://www.youtube.com/embed/videoseries?list=${r}&listType=playlist&modestbranding=1&rel=0" sandbox="allow-scripts allow-same-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  `).join(""),p=`
  <section class="hero">
    <div class="hero-logo">
      <img id="logo" class="logo" alt="App logo">
    </div>
    <div class="hero-body">
      <div class="result" id="result">Please enter your name below \u{1F447}</div>
      <div class="input-box" id="input">
        <input class="input" id="name" type="text" autocomplete="off" placeholder="Your name" />
        <button class="btn" onclick="greet()">Greet</button>
      </div>
    </div>
  </section>
  <section class="playlist-section">
    <h2>Learn SICP Playlists</h2>
    <div class="playlist-grid">
      ${u}
    </div>
  </section>
`;document.querySelector("#app").innerHTML=p;document.getElementById("logo").src=c;const n=document.getElementById("name");n&&n.focus();const m=document.getElementById("result");window.greet=function(){let r=n.value;if(r!=="")try{a(r).then(o=>{m.innerText=o}).catch(o=>{console.error(o)})}catch(o){console.error(o)}};
