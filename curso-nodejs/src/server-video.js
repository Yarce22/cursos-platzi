import http from "http";
import fs from "fs";
import path from "path";


const server = http.createServer((req, res) => {
  if (req.url === '/video') {
    const videoPath = path.join(__dirname,"src", "video.mp4");
    const stat = fs.statSync(videoPath);
    
    res.writeHead(200, {
      "Content-Length": stat.size,
      "Content-Type": "video/mp4",
    });

    const readStream = fs.createReadStream(videoPath);
    readStream.on('data', (chunk) => {
      console.count('chunk');
      console.log(`Chunk size: ${chunk.byteLength} bytes`);
    });
    
    readStream.pipe(res)
  } else {
    res.writeHead(404, {"Content-Type": "text/plain"});
    res.end("Not found\n");
  }
})

server.listen(3005, "localhost", () => {
  console.log("Server running...");
})
