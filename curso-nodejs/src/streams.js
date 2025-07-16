import fs from "fs";

const readableStream = fs.createReadStream("input.txt");
const writableStream = fs.createWriteStream("output.txt");

readableStream.on("data", (chunk) => {
  console.log("Chunk:", chunk.toString());
  writableStream.write(chunk);
});

readableStream.on("end", () => {
  console.log("Termino la lectura del archivo");
  writableStream.end();
});

process.