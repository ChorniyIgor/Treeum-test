class TVMaze {
  constructor() {
    this.serchUrl = `https://api.tvmaze.com/search/shows?q=`;
  }

  async searchFilms(filmName) {
    const resp = await fetch(`${this.serchUrl}${filmName}`);
    const respJson = await resp.json();
    return respJson;
  }
}
const TV = new TVMaze();
export default TV;
