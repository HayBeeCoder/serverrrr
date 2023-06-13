const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  const response = {
    driverLicense: "valid",
    vehicleLicense: "not ok",
    vehicleNo: "aaaaaaa",
    vehicleInsurance: "done",
  };
  res.status(200);
  res.send(JSON.stringify(response));
});

app.listen(PORT, (error) => {
  if (!error) {
    console.log(
      "Server is Successfully Running and App is listening on port " + PORT
    );
  } else {
    console.log("Error occurred, server can't start", error);
  }
});
