import { Storage } from '@google-cloud/storage';
import fs from 'fs';
import ffmpeg from 'fluent-ffmpeg';

const storage = new Storage();

const rawVideoBucketName = "suns-win-raw-videos";
const processedVideoBucketName = "suns-win-processed-videos";

const localRawVideoPath = "./raw-videos";
const localProcessedVideoPath = "./processed-videos";

/**
 * Creates the local directories for raw and processed videos.
 */
export function setupDirectories() {

}

/**
 * @param rawVideoName - the name of the file to convert from {@link localRawVideoPath}.
 * @param procesedVideoName - the name of the file to convert to {@link localProcessedVideoPath}.
 * @returns A promise that resolves when the video has been converted.
 */
export function convertVideo(rawVideoName: string, processedVideoName: string) {
    return new Promise<void>((resolve, reject) => {
        ffmpeg(`${localRawVideoPath}/${rawVideoName}`)
        .outputOptions('-vf', 'scale=-1:360') // 360p
        .on('end', function() {
            console.log('Processing finished successfully');
            resolve();
        })
        .on('error', function(err: any) {
            console.log('An error occurred: ' + err.message);
            reject(err);
        })
        .save(`${localProcessedVideoPath}/${processedVideoName}`);
    })
    
}