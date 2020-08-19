const request = require("request-promise");

// getDadJoke
const getDadJoke = async () => {
  let response = await request({
    uri: "https://icanhazdadjoke.com/",
    headers: {
      Accept: "application/json",
    },
  });
  return JSON.parse(response).joke;
};

// 4.1
getDadJoke().then((data) => console.log(data));
