export default class Song {
  constructor(data) {
    console.log(data);
    this.title = data.trackName || data.title;
    this.albumArt =
      data.albumArt || data.artworkUrl100.replace(/100x100/g, "300x300");
    this.artist = data.artistName || data.artist;
    this.album = data.collectionName || data.album;
    this.price = data.trackPrice || data.price || 1;
    this.preview = data.previewUrl || data.preview;
    this.id = data.trackId || data.id;
  }

  get Template() {
    return `
    <div class="card">
    <img class="card-img-top" src="${this.albumArt}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${this.title}</h5>
      <p class="card-text">${this.price}</p>
      <button class="btn btn-primary" onclick="app.songsController.activeSong('${this.id}')">SELECT</button>
    </div>
  </div>
        `;
  }

  get activeTemplate() {
    return `
    <div class="card">
    <img class="card-img-top" src="${this.albumArt}" alt="Card image cap">
    <audio controls>
  <source src="${this.preview}" type="">
    </audio>
    <div class="card-body">
      <h5 class="card-title">${this.title}</h5>
      <p class="card-text">${this.price}</p>
      <button class="btn btn-success" onclick="app.songsController.addSong('${this.id}')">ADD</button>
    </div>
  </div>
        `;
  }
  get playlistTemplate() {
    return `
    <div class="card">
  <img class="card-img-top" src="${this.albumArt}" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">${this.title}</h5>
    <p class="card-text">${this.price}</p>
    <button class="btn btn-danger" onclick="app.songsController.removeSong('${this.id}')">DELETE</button>
  </div>
</div>
        `;
  }
}
