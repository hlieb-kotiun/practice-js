import axios from 'axios';

export default class UnsplashAPI {
  #BASE_URL = 'https://api.unsplash.com/search/photos';
  #API_KEY = 'gcevo00lZKvSMKLnZZJPKYS5xNbpbsP_4i6E-BVlG58';

  async getPopularPhotos(page) {
    const params = new URLSearchParams({
      query: 'popular',
      page,
      per_page: 12,
      orientation: 'portrait',
      client_id: this.#API_KEY,
    });
    const { data } = await axios(`${this.#BASE_URL}?${params}`);
    return data;
  }
}
