import countItems from './countItems.js';

const items = document.querySelector('#items');

const url = 'https://api.tvmaze.com/shows';

let counter = 0;

export default async () => {
  const response = await fetch(url);
  const itemData = await response.json();

  itemData.forEach((data) => {
    if (data.id >= 204 && data.id <= 209) {
      counter += 1;
      items.innerHTML += `
        <div class="row">
            <img src="${data.image.medium}"/>
            <h1>${data.name}</h1>
            <i data-id="${data.id}" class="fa icons">&#xf087;</i>
            <div class="numOfLikes">
              <p class="likesCount likes" data-id="${data.id}">0</p>
              <p class="likes">likes</p>
            </div>
            <div class="buttons">
                <button type="submit" class="comment button">Comments</button>
                <br>
                <button type="submit" class="reserve button">Reservations</button>
            </div>
        </div>`;
    }
  });
  const itemHtml = document.querySelector('.itemCount');
  countItems(counter, itemHtml);
};
