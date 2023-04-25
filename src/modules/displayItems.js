const items = document.querySelector("#items");
const url = "https://api.tvmaze.com/shows";
export default async () => {
  try {
    const response = await fetch(url);
    const itemData = await response.json();
    itemData.forEach((data) => {
      if (data.id <= 3) {
        items.innerHTML += `
        <div>    
        <div>
                <img src="${data.image.medium}"/>
                <h1>${data.name}</h1> <i class="fa">&#xf087;</i>
            </div>
            </div>`;
      } else if (data.id >= 3 && data.id <= 6) {
        items.innerHTML += `
            <div>
                <img src="${data.image.medium}"/>
                <h1>${data.name}</h1> <i class="fa">&#xf087;</i>
            </div>`;
      }
    });
  } catch (error) {
    throw new Error("Data could not be fetched");
  }
};
