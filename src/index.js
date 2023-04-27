import './style.css';
import listItems from './modules/displayItems.js';
import addLikes from './modules/addLikes.js';

window.addEventListener('load', (event) => {
  listItems();
  addLikes();
});
