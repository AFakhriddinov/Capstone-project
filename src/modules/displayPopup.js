import { moviesArray } from './displayItems.js';

const popup = async () => {
  const body = document.querySelector('body');
  const popupElement = document.createElement('div');
  let county = 0;
  moviesArray.forEach((movie) => {
    const moviePopup = `
      <div class="popup">
          <img class="close" onclick="this.parentNode.style.display = 'none';" src="https://static.vecteezy.com/system/resources/thumbnails/020/048/793/small/x-transparent-background-free-png.png">
          <img class="popImg" src="${movie.image.original}">
          <h1 class="name">${movie.name}</h1>
          <h4 class="genres"><span class="bold"> Movie genres:</span> ${movie.genres.join(
    ', ',
  )}</h4>
          <div class="summary">${movie.summary}</div>
          <div class="commentContainer">
          &nbsp;Comments&nbsp;[<span class="commentsCount">0</span>]
          </div>
          <div class="commentsContainer">
          </div><br>
          <form class="flexForm">
              <div class="commentTitle" align="center">
              Add a comment
              </div>
              <input type="text" class="username" placeholder="Your name"><br>
              <input type="text" class="message" placeholder="Your message"><br>
              <button class="submit" type="button">Submit</button>
              <div class="movieId">${movie.id}</div>
          </form>
      </div>
      `;
    // displayComment(`"${movie.id}"`, county);

    county += 1;
    popupElement.innerHTML += moviePopup;
  });
  body.appendChild(popupElement);
};

window.setTimeout(() => {
  const commentBtn = document.querySelectorAll('.comment');

  for (let i = 0; i < commentBtn.length; i += 1) {
    commentBtn[i].addEventListener('click', () => {
      document.querySelectorAll('.popup')[i].style.display = 'flex';
    });
  }
}, 2000);

const submitComment = async (item1, user1, ID) => {
  const count = 0;
  // eslint-disable-next-line
    const response = await fetch(
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/DQ1WY7tbkUIhRnRaIdyZ/comments/',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        item_id: `"${ID}"`,
        username: item1,
        comment: user1,
      }),
    },
  );

  // moviesArray.forEach((movie) => {
  //   displayComment(`"${movie.id}"`, count);
  //   count += 1;
  // });
};

window.setTimeout(() => {
  const submitBtns = document.querySelectorAll('.submit');
  submitBtns.forEach((submitBtn) => {
    submitBtn.addEventListener('click', (e) => {
      submitComment(
        // eslint-disable-next-line
          e.target.previousElementSibling.previousElementSibling
          .previousElementSibling.previousElementSibling.value,
        e.target.previousElementSibling.previousElementSibling.value,
        e.target.nextElementSibling.innerHTML,
      );
    });
  });
}, 2000);

export default popup;