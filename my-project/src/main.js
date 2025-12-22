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
      data.forEach((card) => console.log(card));
      document.getElementById("api-response").textContent = data.title;
    }
  } catch (error) {
    console.log(error);
    console.log("There was an error fetching the data");
  }
}
getData(URL);

getData().then((data) => {
  console.log(data);

  const ol = document.createElement("ol");

  data.forEach((user) => {
    const li = document.createElement("li");
    li.innerHTML = user.name;

    li.style.fontSize = "22px";

    const ul = document.createElement("ul");

    const company = document.createElement("li");
    company.innerHTML = `Company: ${user.company.name}`;

    const city = document.createElement("li");
    city.innerHTML = `City: ${user.address.city}`;

    const email = document.createElement("li");
    email.innerHTML = `Email: ${user.email}`;

    const phone = document.createElement("li");
    phone.innerHTML = `Phone: ${user.phone}`;

    ul.append(...[company, city, email, phone]);

    li.appendChild(ul);

    ol.appendChild(li);
  });

  const container = document.getElementById("container");
  container.appendChild(ol);
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
