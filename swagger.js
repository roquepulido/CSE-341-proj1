import swaggerAutogen from "swagger-autogen";
import { version } from "./server.js";
const doc = {
  info: {
    title: "Project 01 Contact API",
    version: version,
    description: "API documentation",
  },
  host: "cse-341-proj1.onrender.com",
  schemes: ["http", "https"],
};
const outputFile = "./swagger.json";
const endpointsFiles = ["./routes/index.js"];

swaggerAutogen(outputFile, endpointsFiles, doc);