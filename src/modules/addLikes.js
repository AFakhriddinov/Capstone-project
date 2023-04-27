const involvementApiUrl =
  "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/";
const involvementApiKey = "DQ1WY7tbkUIhRnRaIdyZ";

export default async () => {
  const likeCounterAPI = await fetch(
    `${involvementApiUrl}${involvementApiKey}/likes/`
  )
    .then((response) => response.json())
    .then((data) => data);

  const likesCounter = items.querySelectorAll(".likesCount");
  likesCounter.forEach((likeCounter) => {
    const likesId = likeCounter.getAttribute("data-id");
    const element = likeCounter;
    likeCounterAPI.forEach((likeAPI) => {
      if (likesId === likeAPI.item_id) {
        element.innerHTML = likeAPI.likes;
      }
    });
  });
  // To add or Create like when Heart is pressed
  const likesButton = items.querySelectorAll(".icons");
  likesButton.forEach((likeButton) => {
    likeButton.addEventListener("click", (e) => {
      // eslint-disable-next-line max-len
      const targetCounter = e.target.nextElementSibling.children[0].innerText;
      // eslint-disable-next-line max-len
      e.target.nextElementSibling.children[0].innerText = +targetCounter + 1;
      fetch(`${involvementApiUrl}${involvementApiKey}/likes/`, {
        method: "POST",
        body: JSON.stringify({
          item_id: likeButton.getAttribute("data-id"),
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
    });
  });
};
