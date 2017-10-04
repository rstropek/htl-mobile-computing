// Implement interfaces representing a track's most important data fields
interface ITrack {
  title: string;
  artist: string;
}

// Run our script once the browser has finished loading all resources
// and has created the DOM. For details see
// https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onload
window.onload = () => {
  // Get relevant elements in DOM by id. Want to know which browsers support
  // getElementById? Check http://caniuse.com/#search=getElementbyid
  const resultBody = document.getElementById('resultBody'),
        result = document.getElementById('result'),
        loading = document.getElementById('loading'),
        filter = <HTMLInputElement>document.getElementById('filter'),
        search = <HTMLButtonElement>document.getElementById('search');

  // Helper function to load tracks
  function loadTracks() {
    // Remove all Tracks from DOM
    while (resultBody.firstChild) {
      resultBody.removeChild(resultBody.firstChild);
    }

    // Build XHR. Need details about XMLHttpRequest? Check
    // https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('load', () => {
      // Parse result and extract relevant track data
      const deezerReponse = JSON.parse(xhr.response).data;
      const jsonResult = <ITrack[]>deezerReponse.map(d => {
        return {title: d.title, artist: d.artist.name};
      });

      // Iterate over result and create track results in DOM
      jsonResult.forEach(track => {
        // Build DOM using JavaScript functions. Note that you could also use
        // "innerHtml" instead.
        const tr = document.createElement('tr');

        const title = document.createElement('td');
        title.appendChild(document.createTextNode(track.title));
        tr.appendChild(title);

        const artist = document.createElement('td');
        artist.appendChild(document.createTextNode(track.artist));
        tr.appendChild(artist);

        resultBody.appendChild(tr);
      });

      // Show result table and hide loading indicator
      loading.hidden = true;
      result.hidden = false;
    });

    // Build URL
    // Quiz: Why do we use a proxy instead of directly accessing Deezer's search API?
    let url = 'http://localhost:8080/https://api.deezer.com/search?q=' + filter.value;

    // Send request
    xhr.open('GET', url);
    xhr.setRequestHeader('X-Requested-With', '.');
    xhr.send();

    // Hide result and show loading indicator
    result.hidden = true;
    loading.hidden = false;
  }

  // Next page
  search.onclick = () => {
    loadTracks();
  };
};
