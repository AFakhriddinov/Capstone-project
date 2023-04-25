import "./style.css";
import listItems from "./modules/displayItems.js";
import addLike from "./modules/addNewLike.js";

window.addEventListener("load", (event) => {
  listItems();
});

// const likes = document.querySelector("#item2");
// var likeCount = 0;
// console.log(likes.length);
// likes.forEach((like, id) => {
//   like.addEventListener("click", () => {
//     likeCount++;
//     const likeID = id;
//     addLike(likeID, likeCount);
//   });
// });
