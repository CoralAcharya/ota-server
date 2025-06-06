const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Folder to search files in
const FILE_DIR = path.join(__dirname);

app.get('/file/:filename', (req, res) => {
  const filename = req.params.filename;
  const filepath = path.join(FILE_DIR, filename);

  // Check if file exists
  fs.access(filepath, fs.constants.F_OK, (err) => {
    if (err) {
      return res.status(404).send('File not found');
    }

    // Send the file
    res.sendFile(filepath);
  });
});

app.listen(PORT, '0.0.0.0',() => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
