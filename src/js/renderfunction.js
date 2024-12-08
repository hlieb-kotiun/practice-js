const renderImages = (images) => {
    return images
    .map(
        image => `
        <li class="gallery__item">
        <img class="gallery-img" src="${image.urls.small}" alt="${image.alt_description}">
        </li>
        `
    ).join("")
}

export default renderImages;