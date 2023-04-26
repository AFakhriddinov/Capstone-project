import "./style.css";
import listItems from "./modules/displayItems.js";
import addLike from "./modules/addNewLike.js";

window.addEventListener("load", (event) => {
  listItems();
  addLike();
});
