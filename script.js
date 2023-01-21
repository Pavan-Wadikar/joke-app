let singleJoke = document.getElementById("singleJoke");
let setup = document.getElementById("jokePara1");
let delivery = document.getElementById("jokePara2");

function randomCategory() {
  let categories = [
    "Any",
    "Programming",
    "Misc",
    "Dark",
    "Pun",
    "Spooky",
    "Christmas",
  ];

  let randomNum = Math.floor(Math.random() * categories.length);
  return categories[randomNum];
}

let url = "https://v2.jokeapi.dev/joke/Any/" + randomCategory();

async function jokeApi() {
  try {
    let fetchApi = await fetch(url);
    let jsonObject = await fetchApi.json();

    return jsonObject;
  } catch (error) {
    console.log(error);
  }
}

jokeApi()
  .then((value) => {
    value;

    if (value.type == "single") {
      singleJoke.innerText = value.joke;
      console.log(singleJoke);
    } else if (value.type == "twopart") {
      setup.innerText = value["setup"];
      console.log(setup);
      delivery.innerText = value["delivery"];
      console.log(delivery);
    }
  })
  .catch();
