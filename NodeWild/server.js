import http from "node:http";
import { getDataFromDB } from "./Database/db.js";

const PORT = 8000;

const server = http.createServer(async (req, res) => {
  const destination = await getDataFromDB();

  if (req.url === "/api" && req.method === "GET") {

    res.setHeader("Content-Type", "application/json");
    res.statusCode = 200;
    res.end(JSON.stringify(destination));

  } 
  else if (req.url.startsWith("/api/continent") && req.method === "GET") {

    const continent = req.url.split("/").pop();
     const filteredData = destination.filter(
      (item) => item.continent.toLowerCase() === continent.toLocaleLowerCase()
    ); 
    res.setHeader("Content-Type", "application/json");
    res.statusCode = 200;
    res.end(JSON.stringify(filteredData));

  } 
  else {

    res.setHeader("Content-Type", "application/json");
    res.statusCode = 404;
    res.end(
      JSON.stringify({
        error: "not found",
        message: "The requested route does not exist",
      }),
    );

  }
});

server.listen(PORT, () => console.log(`server is listening on Port ${PORT}`));
