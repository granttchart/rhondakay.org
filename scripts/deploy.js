const { exec } = require('child_process');
const path = require('path')
require('dotenv').config({path: path.resolve(__dirname, '../.env') });

exec(`rsync -avHz dist/ -e ssh ${process.env.RSYNC_CONNECTION}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`); 
      return;
    }
});