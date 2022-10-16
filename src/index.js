
import { refs } from './js/refs';
import 'simplelightbox/dist/simple-lightbox.min.css';
import {onClick, onLoadMore} from './js/functionsBtn'




refs.btnLoadMore.style.display = 'none';
refs.btnSearch.addEventListener('click',onClick);
refs.btnLoadMore.addEventListener('click',onLoadMore);




