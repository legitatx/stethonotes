require('dotenv').config({path: 'variables.env'});
const SpeechService = require('ms-bing-speech-service');
const fs = require('fs');
const crypto = require('crypto');

const recognition = new SpeechService({language: 'en-US', subscriptionKey: process.env.BING_SPEECH_KEY});

exports.init = (req, res) => {
  res.json({'status': 200})
};

exports.sendRecording = (req, res) => {
  const buffer = new Buffer(req.body.blob, 'base64');
  const token = crypto.randomBytes(64).toString('hex');
  fs.writeFile(`emp/recording-${token}.wav`, buffer, (error) => {
    if (error) {
      res.json({'status': 500, 'error': error})
      res.logger.error(`An error occured while attempting to decode a blob: ${error}`);
    } else {
      res.json({'status': 204})
      res.logger.info('Successfully wrote file!')
    }
  });
}
