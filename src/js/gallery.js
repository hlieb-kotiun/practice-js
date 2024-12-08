import iziToast from 'izitoast';
import UnsplashAPI from './UnsplashAPI';
import renderImages from './renderfunction';
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.min.css';
import error from '../img/javascript.svg';
import 'izitoast/dist/css/iziToast.min.css';

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
const loader = document.querySelector('.loader');

api
  .getPopularPhotos(page)
  .then(data => {
    console.log(data);
    gallery.innerHTML = renderImages(data.results);
    pagination.reset(data.total);
  })
  .catch(error => iziToast.error({ message: error.message || 'Error' }))
  .finally(() => loader.classList.add('hidden'));

pagination.on('afterMove', handlePagination);

function handlePagination(event) {
  const currentPage = event.page;
  api
    .getPopularPhotos(currentPage)
    .then(data => (gallery.innerHTML = renderImages(data.results)));
}

function handleSubmitPagination(event) {
  const currentPage = event.page;
  api
    .getPhotos(currentPage)
    .then(data => (gallery.innerHTML = renderImages(data.results)));
}

const form = document.querySelector('.search-form');
form.addEventListener('submit', handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  const inputValue = form.elements.query.value.trim();
  if (inputValue === '') {
    iziToast.warning({
      iconUrl: error,
      title: 'Caution',
      message: 'The field is empty, please type your request',
    });
    return;
  }

  pagination.off('afterMove', handlePagination);
  pagination.off('afterMove', handleSubmitPagination);

  api.query = inputValue;
  loader.classList.remove('hidden');
  api
    .getPhotos(page)
    .then(data => {
      if (data.results.length === 0) {
        iziToast.warning({
          iconUrl: error,
          title: 'Caution',
          message: 'Images not found',
        });

        return;
      }
      if (data.total <= 12) {
        container.classList.add('hidden');
      } else {
        container.classList.remove('hidden');
      }
      gallery.innerHTML = renderImages(data.results);
      pagination.reset(data.total);
    })
    .catch(error => iziToast.error({ message: error.message || 'Error' }))
    .finally(() => loader.classList.add('hidden'));

  pagination.on('afterMove', handleSubmitPagination);
}
