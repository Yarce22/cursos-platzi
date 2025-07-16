import fs from "fs";
import { createClient } from "@deepgram/sdk";

const transcribeAudio = async () => {
  const deepgram = createClient(process.env.DEEPGRAM_API_KEY);
  
  const { result, error } = await deepgram.listen.prerecorded.transcribeFile(
    fs.readFileSync("./src/audio.m4a"),
    {
      model: "nova-3",
      smart_format: true,
    }
  )

  if (error) {
    console.log("error", error);
    return;
  }
  
  if(!error) {
    console.dir(result, { depth: null });
    const transcript = result.results.channels[0].alternatives[0].transcript;
    fs.writeFileSync("transcript.txt", new Date + "\n\n" + transcript)
    console.log("transcript", transcript);
    console.log("texto guardado");
  }
}

transcribeAudio();
