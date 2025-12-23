import "./style.css";

async function getData(URL) {
  try {
    const response = await fetch(
      "https://taylor-swift-api.vercel.app/api/albums/"
    );
    if (response.status != 200) {
      throw new Error(response);
    } else {
      const data = await response.json(); //makes the data into JSON object we can use
      return data;
    }
  } catch (error) {
    console.log(error);
    console.log("There was an error fetching the data");
  }
}
getData(URL);

getData().then((data) => {
  console.log(data);
  let ol = "<ol>";
  data.forEach((card) => {
    ol += ` <li style="font-size: 22px;">${card.title}
    <ul>
    <li> Album Cover: ${card.albumCover} </li>
    <li> Artist: ${card.artist} </li>
    <li> Release Date: ${card.releaseDate} </li>
    </ul>
    </li>`;
  });
  ol += "</ol>";
  const container = document.getElementById("container");
  container.innerHTML = ol;
});

/* 
function inject(card) {
  const container = document.querySelector("#api-response");
  container.insertAdjacentHTML(
    "afterbegin",
    `<div class="card">
    <h2 class="card-title">${card.title}</h2>
      <img class="card-img" src="${card.img}"/>
    </div>`
  );
}
data.forEach((card) => inject(card));
 */
