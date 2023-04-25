var count = 0;
function addLike(likeID, likeCount) {
  count++;

  console.log(count);
}

const items = document.querySelector("#items");
const url = "https://api.tvmaze.com/shows";
export default async () => {
  try {
    const response = await fetch(url);
    const itemData = await response.json();
    itemData.forEach((data) => {
      items.innerHTML +=
        data.id <= 6
          ? `
        <div class="row">
            <img src="${data.image.medium}"/>
            <div class="h1AndIcon">
                <h1>${data.name}</h1>
                <i id="item${data.id}" class="fa icons">&#xf087;</i>
            </div>
            <p class="likes">5 likes</p>
            <div class="buttons">
                <button type="submit" class="comment button">Comments</button>
                <br>
                <button type="submit" class="reserve button">Reservations</button>
            </div>
        </div>`
          : "";
    });
  } catch (error) {
    throw new Error("Data could not be fetched");
  }
};
