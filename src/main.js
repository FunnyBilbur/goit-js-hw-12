import axios from 'axios';
import iziToast from "izitoast";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
const form = document.querySelector('.form');
const inputSearch = document.querySelector('.input__search');
const gallery = document.querySelector(".gallery");
const load = document.querySelector(".load");

form.addEventListener('submit', async (arg) => {
    arg.preventDefault();
    gallery.innerHTML = "";
    load.classList.add('loader');
    var lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: '250' });
    let searchParams = new URLSearchParams({
        key: "41527522-465889db431a6a06c19f4d10b",
        q: inputSearch.value.trim(),
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
    });
    await axios.get(`https://pixabay.com/api/?${searchParams}`)
        .then((images) => {
            let { total, hits } = images.data;
            if (total === 0) {
                iziToast.show({
                    titleColor: 'white',
                    position: 'topRight',
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                    messageColor: 'white',
                    backgroundColor: '#EF4040',
                    progressBarColor: '#B51B1B'
                });
                load.classList.remove('loader');
                return;
            }
            load.classList.remove('loader');
            const markup = hits.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
                return `<li class="gallery__item">
                    <a class="gallery__link" href="${largeImageURL}">
                        <img
                            class="gallery__image"
                            src="${webformatURL}"
                            alt="${tags}"/>
                        <ul class="info__list">
                        <li class="info__item">
                        <span>Likes</span>
                        <span>${likes}</span>
                        </li>
                        <li class="info__item">
                        <span>Views</span>
                        <span>${views}</span>
                        </li>
                        <li class="info__item">
                        <span>Comments</span>
                        <span>${comments}</span>
                        </li>
                        <li class="info__item">
                        <span>Downloads</span>
                        <span>${downloads}</span>
                        </li>
                        </ul>
            
                    </a>
            </li>`;
            })
                .join("");
            gallery.insertAdjacentHTML("beforeend", markup);
            lightbox.refresh();
        })
        .catch((error) => iziToast.show({
            titleColor: 'white',
            position: 'topRight',
            message: 'Sorry, there are no images matching your search query. Please try again!',
            messageColor: 'white',
            backgroundColor: '#EF4040',
            progressBarColor: '#B51B1B'
        }));
});