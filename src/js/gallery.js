import UnsplashAPI from './UnsplashAPI';
import renderImages from './renderfunction'

const gallery = document.querySelector(".gallery")
const api = new UnsplashAPI();

api.getPopularPhotos(1).then(data => {
  console.log(data);
  gallery.innerHTML = renderImages(data.results)
});
