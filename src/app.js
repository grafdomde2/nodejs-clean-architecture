const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

//Export some object
module.exports = {
    //Start function which starts our server
    start: () => {
        app.listen(PORT, () => {
            console.log(`Our server is running under port ${PORT}`);
        })
    }
}