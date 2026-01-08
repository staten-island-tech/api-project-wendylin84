import "./style.css";

async function getData(URL) {
  const searchInput = document.getElementById("searchbar");
  const resultsList = document.getElementById("api-response");
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
  const container = document.querySelector("#api-response");
  data.forEach((card) => {
    container.insertAdjacentHTML(
      "afterbegin",
      `<ul id="list"><li>
      <div class="card">
      <h1 class="card-title">${card.title}</h1>
    <img class="card-album-cover" src="${card.albumCover}" alt="Album Cover">
    <p class="card-artist">Artist: ${card.artist}</p>
    <p class="card-release-date">Release Date: ${card.releaseDate}</p>
    </div>
    </li>
    </ul>`
    );
  });
});

async function searchProducts(query) {
  if (!query.trim()) {
    resultsList.innerHTML = "";
    return;
  }
  try {
    const res = await fetch(
      `https://taylor-swift-api.vercel.app/api/albums/${query}`
    );
    if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
    const data = await res.json();
    displayResults(data);
    // Render results
    /*   resultsList.innerHTML = "";
    if (data.title.length === 0) {
      resultsList.innerHTML = "<li>No results found</li>";
      return;
    } */
  } catch (error) {
    console.log(error);
    console.log("There was an error fetching the data");
  }
}

function displayResults(data) {
  resultsDiv.innerHTML = data.length
    ? data
        .map(
          (card) => `<ul id="list"><li>
      <div class="card">
      <h1 class="card-title">${card.title}</h1>
    <img class="card-album-cover" src="${card.albumCover}" alt="Album Cover">
    <p class="card-artist">Artist: ${card.artist}</p>
    <p class="card-release-date">Release Date: ${card.releaseDate}</p>
    </div>
    </li>
    </ul>`
        )
        .join("")
    : "<div>No results found</div>";
}
/* searchProducts().then((data) => {
  console.log(data);
  const container = document.querySelector("#api-response");
  data.forEach((card) => {
    container.insertAdjacentHTML(
      "afterbegin",
      `<ul id="list"><li>
      <div class="card">
      <h1 class="card-title">${card.title}</h1>
    <img class="card-album-cover" src="${card.albumCover}" alt="Album Cover">
    <p class="card-artist">Artist: ${card.artist}</p>
    <p class="card-release-date">Release Date: ${card.releaseDate}</p>
    </div>
    </li>
    </ul>`
    );
  });
}); */
/* const handleSearchPosts = (query) => {
  const searchQuery = query.trim().toLowerCase();

  if (searchQuery.length <= 1) {
    resetPosts();
    return;
  }

  let searchResults = [...data].filter((card) =>
    card.title.some((title) => title.toLowerCase().includes(searchQuery))
  );

  const searchDisplay = document.querySelector("#search-display");
  if (searchResults.length == 0) {
    searchDisplay.innerHTML = "No results found";
  } else if (searchResults.length == 1) {
    searchDisplay.innerHTML = `1 result found for your query: ${query}`;
  } else {
    searchDisplay.innerHTML = `${searchResults.length} results found for your query: ${query}`;
  }
  container.innerHTML = "";
  searchResults.map((card) => createPost(card));
}; */
/* function searchAlbum() {
  const container = document.querySelector("#api-response");
  let input = document.getElementById("#searchbar").value;
  input = input.toLowerCase();
  let x = document.getElementsByClassName(".card");
  for (i = 0; i < x.length; i++) {
    if (!x[i].innerHTML.toLowerCase().includes(input)) {
      x[i].style.display = "none";
    } else {
      x[i].style.display = "list-item";
    }
  }
} */
/* getData().then((data) => {
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
}); */

/* function inject(card) {
  const container = document.querySelector("#api-response");
  container.insertAdjacentHTML(
    "afterbegin",
    `<div class="card">
    <h2 class="card-title">${card.title}</h2>
      <img class="card-img" src="${card.img}"/>
    </div>`
  );
}
URL.forEach((card) => inject(card));
 */
