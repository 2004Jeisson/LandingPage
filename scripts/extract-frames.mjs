import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execFile } from 'child_process';
import ffmpegPath from 'ffmpeg-static';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const videoPath = path.resolve(__dirname, '../public/products/videos.mp4');
const outputDir = path.resolve(__dirname, '../public/products/frames');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

console.log(`Starting extraction using ffmpeg at: ${ffmpegPath}`);
console.log(`Input video: ${videoPath}`);
console.log(`Output dir: ${outputDir}`);

// Resize to 1280 width to maintain performance, extract at 30 fps as JPEGs.
const args = [
  '-i', videoPath,
  '-vf', 'scale=1280:-1,fps=30',
  '-qscale:v', '5',
  path.join(outputDir, '%04d.jpg')
];

execFile(ffmpegPath, args, (error, stdout, stderr) => {
  if (error) {
    console.error('Error extracting frames:', error);
    // You can see more details in stderr if needed
    return;
  }
  console.log('Frames extracted successfully!');
  
  const files = fs.readdirSync(outputDir);
  console.log(`Extracted ${files.length} frames.`);
});
