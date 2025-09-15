// imports
const express=require('express');
const cors=require('cors');
const connectDB=require('./config/db')
const user_controller=require('./controllers/user_controller')
const movie_controller=require('./controllers/movie_controller')
const note_controller=require('./controllers/note_controller')
// intialize express
const app=express();


// connect to database
connectDB();

// middleware 
app.use(cors());
app.use(express.json()); // middleware to send JSON data

// routes

app.use('/api/users', user_controller);
app.use('/api/movies', movie_controller);
app.use('/api/notes', note_controller);
//port number
const PORT=5000

// listening to the server

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})