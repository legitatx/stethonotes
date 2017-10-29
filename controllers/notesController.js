require('dotenv').config({path: 'variables.env'});
const SpeechService = require('ms-bing-speech-service');
const fs = require('fs');
const crypto = require('crypto');
const formidable = require('formidable');
const path = require('path');

const recognition = new SpeechService({language: 'en-US', subscriptionKey: process.env.BING_SPEECH_KEY});

exports.init = (req, res) => {
  res.json({'status': 200});
};

exports.sendRecording = (req, res) => {
  const form = new formidable.IncomingForm()
  form.multiples = false;
  form.keepExtensions = true;
  form.uploadDir = '/uploads';
  form.parse(req, (error, fields, files) => {
    if (error) {
      res.json({'status': 500, 'error': error})
      res.logger.error(`An error occured while attempting to upload a file: ${error}`);
    } else {
      res.json({'status': 204});
      res.logger.info('Successfully uploaded file!');
    }
  });
  form.on('fileBegin', (name, file) => {
    const [name, extension] = file.name.split('.')
    const token = crypto.randomBytes(16).toString('hex');
    file.path = path.join(uploadDir, `${name}-${token}.${extension}`)
  })
};
