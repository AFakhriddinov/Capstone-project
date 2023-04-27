import './style.css';
import listItems from './modules/displayItems.js';
import addLikes from './modules/addLikes.js';
import countItems from './modules/countItems.js';

window.addEventListener('load', (event) => {
  listItems();
  addLikes();
  countItems();
});
