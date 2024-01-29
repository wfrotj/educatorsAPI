import app from "./app.js";
import config from "./utils/config.js";

app.get("/", (req, res) => {
  res.send("Teachers API");
});

app.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT}`);
});
