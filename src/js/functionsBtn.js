import { fetchImages } from './fetchImages';
import { renderImageList } from './renderImgList';
import { refs } from './refs';
import Notiflix from 'notiflix';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

let gallerySimpleLightbox =  new SimpleLightbox('.gallery a');
let pageNumber = 1;

export async function onClick(evt){ evt.preventDefault();
  onCleanGallery();
  const trimmedValue =  refs.input.value.trim();
    if (trimmedValue !== '') {
      const foundData = await fetchImages(trimmedValue, pageNumber)
      if (foundData.hits.length === 0) {
        Notiflix.Notify.failure(
          'Sorry, there are no images matching your search query. Please try again.'
        );
      } else {
        renderImageList(foundData.hits);
        Notiflix.Notify.success(
          `We found ${foundData.totalHits} images!`
        );
        refs.btnLoadMore.style.display = 'block';
        gallerySimpleLightbox.refresh();
      }
    }
}
  export async function onLoadMore(){  pageNumber+=1;
  const trimmedValue = refs.input.value.trim();
      refs.btnLoadMore.style.display = 'none';
            const foundData = await fetchImages(trimmedValue, pageNumber)

    if (foundData.hits.length === 0) {
      Notiflix.Notify.failure(
        'Sorry, there are no images matching your search query. Please try again.'
      );
    } else {
      renderImageList(foundData.hits);
      Notiflix.Notify.success(
        ` We found ${foundData.totalHits} images!`
      );
        refs.btnLoadMore.style.display = 'block';
         gallerySimpleLightbox.refresh();
    }
}
  
export function onCleanGallery() {
  refs.gallery.innerHTML = '';
  pageNumber = 1;
  refs.btnLoadMore.style.display = 'none';
}
