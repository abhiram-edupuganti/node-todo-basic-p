require('dotenv').config();
const express = require('express')
const app = express()
const port = process.env.PORT
let bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

let task=["buy eggs", "PS5 on sale"]

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render("index", { task: task});
})

app.post('/addtask',(req,res)=>{
    let newTask=req.body.newtask;
    task.push(newTask)
    res.redirect('/')
})

app.post('/removetask', (req, res) => {
    let checkedTasks = req.body.check;
    if (!Array.isArray(checkedTasks)) {
        checkedTasks = [checkedTasks];
    }

    task = task.filter(item => !checkedTasks.includes(item));
    res.redirect('/');
});



app.listen(port, () => {
  console.log(`Server up and running ${port}`)
})