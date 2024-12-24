import express from 'express';
import ffmpeg from 'fluent-ffmpeg';

const app = express();
app.use(express.json());

app.post('/process-video', (req, res) => {

  // Get the path of the input video file from the request body
  const inputFilePath = req.body.inputFilePath;
  const outputFilePath = req.body.outputFilePath;

  // Check if the input file path is defined
  if (!inputFilePath || !outputFilePath) {
    res.status(400).send('Bad Request: Missing file path');
  }

  // Create the ffmpeg command
  
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
