import http from "node:http";
import { getDataFromDB } from "./Database/db.js";
import { sendResponse } from "./utils/sendResponse.js";

const PORT = 8000;

const server = http.createServer(async (req, res) => {
  const destination = await getDataFromDB();

  if (req.url === "/api" && req.method === "GET") {
   sendResponse(res,200,destination)
  } 
  else if (req.url.startsWith("/api/continent") && req.method === "GET") {

    const continent = req.url.split("/").pop();
     const filteredData = destination.filter(
      (item) => item.continent.toLowerCase() === continent.toLocaleLowerCase()
    ); 
       sendResponse(res,200,filteredData)
  } 
  else if (req.url.startsWith("/api/country") && req.method === "GET") {

    const country = req.url.split("/").pop();
     const filteredData = destination.filter(
      (item) => item.country.toLowerCase() === country.toLocaleLowerCase()
    ); 
       sendResponse(res,200,filteredData)
  } 
  else {
       sendResponse(res,404,({
        error: "not found",
        message: "The requested route does not exist",
      }))
  }
});

server.listen(PORT, () => console.log(`server is listening on Port ${PORT}`));
