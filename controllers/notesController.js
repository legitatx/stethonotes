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
      res.json({'status': 500, 'error': error});
      res.locals.logger.error(`An error occured while attempting to upload a file: ${error}`);
    } else {
      recognition.start((error, service) => {
        if (error) {
          res.json({'status': 500, 'error': error});
          res.locals.logger.error(`An error occured while attempting to start voice recognition service: ${error}`);
        } else {
          res.locals.logger.info('Starting voice recognition service...');

          service.on('recognition', (eventt) => {
            if (event.RecognitionStatus == 'Success') {
              res.locals.logger.info(`Data returned: ${eventt}`)
            }
          });

          service.sendFile(files[0].path, (error) => {
            if (!error) {
              res.locals.logger.info('Successfully sent file to Azure!')
            } else {
              res.local.logger.error(`An error occured while attempting to send file to Azure: ${error}`)
            }
          });
        }
      });
    }
  });
  form.on('fileBegin', (name, file) => {
    const [fname, extension] = file.name.split('.')
    const token = crypto.randomBytes(16).toString('hex');
    file.path = path.join(uploadDir, `${name}-${token}.${extension}`)
  });
};
