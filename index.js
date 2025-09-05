const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT;
app.use(express.json());



const authRoutes = require('./backend/routes/authRoutes/authRoutes')


app.use('/auth', authRoutes);



app.listen(PORT || 3000, () => {
    console.log("Express app is running");
    
})
