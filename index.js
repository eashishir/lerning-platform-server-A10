const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require('./Data/categories.json')
const courses = require('./Data/Courses.json')

app.get('/', (req, res) => {
    res.send ('Js API is Running');
});

app.get('/js-categories', (req, res) => {
    res.send(categories)
});


app.get ('/js-category/:id', (req,res)=>{
    const id = req.params.id;
    if(id === '08'){
        res.send (courses)
    }
   else{
    const category_course  = courses.find(n => n.category_id === id);
    res.send (category_course)
   };

    
    
});

app.get('/courses',(req, res) => {
    res.send(courses)
});


app.get('/courses/:id',(req,res) => {
    const id = req.params.id;
    const selectedNews =courses.find(n => n._id === id);
    res.send(selectedNews);
    
});


app.listen(port, () => {
    console.log('js learnSmart server is running on port', port);
});