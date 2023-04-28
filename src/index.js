import './style.css';
import listItems from './modules/displayItems.js';
import addLikes from './modules/addLikes.js';
import countItems from './modules/countItems.js';
import { popup } from "./modules/displayPopup.js";

window.addEventListener('load', (event) => {
  listItems();
  addLikes();
  countItems();
});

window.setTimeout(popup, 1700);
