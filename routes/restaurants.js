const express = require("express")

const restaurantRouter = express.Router()

restaurantRouter.get("/restaurants", async (req, res) => {
  try {
    
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4356626&lng=78.44087999999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
      {
        headers: {
          "User-Agent": "Mozilla/5.0", // mimic a browser
          "Accept": "application/json",
        },
      }
    );

    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});




module.exports = restaurantRouter