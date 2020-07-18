const fs = require('fs');

// generate readme file
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
      fs.writeFile('./dist/readme.md', fileContent, err => {
        if (err) {
          reject(err);
          return;
        }
          resolve({
          ok: true,
          message: 'Read Me File has been created!'
        });
      });
    });
  };

  module.exports = writeFile;