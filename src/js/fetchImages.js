import axios from 'axios';

export const fetchImages = async (inputValue, page) => {
  const url = 'https://pixabay.com/api/';
  const key = '30472076-91990f645bc169d0b44b794c0';
  const filter = `?key=${key}&q=$${inputValue}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${page}`;

  return await axios.get(`${url}${filter}`).then(response => response.data).catch(error => console.error(error))
  
}