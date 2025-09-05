const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT;


app.listen(PORT || 3000, () => {
    console.log("Express app is running");
    
})
