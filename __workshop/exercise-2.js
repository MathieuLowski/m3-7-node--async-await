// Exercise 2 - `getIssPosition`
// -----------------------------

const request = require("request-promise");

const getIssPosition = async () => {
  try {
    const response = await request("http://api.open-notify.org/iss-now.json");
    const issLocation = await JSON.parse(response);
    //console.log(issLocation);
    return {
      lat: issLocation.iss_position.latitude,
      lng: issLocation.iss_position.longitude,
    };
  } catch (err) {
    console.log("Error: ", err);
  }
};

const handlePosition = async () => {
  const response = await getIssPosition();
  console.log("Position is ", response);
};
handlePosition();
