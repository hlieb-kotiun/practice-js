import UnsplashAPI from './UnsplashAPI';
import renderImages from './renderfunction';
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.min.css';

const gallery = document.querySelector('.gallery');
const api = new UnsplashAPI();
const container = document.getElementById('tui-pagination-container');
const pagination = new Pagination(container, {
  totalItems: 0,
  itemsPerPage: 12,
  visiblePages: 5,
  page: 1,
});

const page = pagination.getCurrentPage();

api.getPopularPhotos(page).then(data => {
  console.log(data);
  gallery.innerHTML = renderImages(data.results);
  pagination.reset(data.total);
});

pagination.on('afterMove', event => {
  const currentPage = event.page;
  api
    .getPopularPhotos(currentPage)
    .then(data => (gallery.innerHTML = renderImages(data.results)));
});
