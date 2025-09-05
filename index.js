const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT;
app.use(express.json());



const authRoutes = require('./backend/routes/authRoutes/authRoutes')
const projectRoutes = require('./backend/routes/projectRoutes/projectRoutes');
const taskRoutes = require('./backend/routes/taskRoutes/taskRoutes');


app.use('/auth', authRoutes);
app.use('/project', projectRoutes);
app.use('/task', taskRoutes);



app.listen(PORT || 3000, () => {
    console.log("Express app is running");
    
})
