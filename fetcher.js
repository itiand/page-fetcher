const request = require('request');
const fs = require('fs')
const parameters = process.argv.slice(2)

const url = parameters[0];
const filePath = parameters[1];

request(url, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
    return;
  }

  if (response.statusCode !== 200) {
    console.error('Request failed with status code:', response.statusCode);
    return;
  }

  fs.writeFile(filePath, body, (err) => {
    if (err) {
      console.error('Error writing file:', err);
    } else {
      const fileSize = body.length;
      console.log(`Downloaded and saved ${fileSize} bytes to ${filePath}`);
    }
  });
})