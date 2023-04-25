const url =
  "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/app_id/likes/";

export default async (id, likes) => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify({
      item_id,
      likes,
    }),
  });

  const result = await response.json();

  return result;
};
