const Express = require('express');
const cors = require('cors');

const app = Express();
app.use(cors());
app.use(Express.json());


app.get("/nataya", (req, res)=> {
    res.send({
        username : "Abhsiehk",
        pwd : 1234567890
    });
})


app.post('/login',(req, res)=> {
     console.log(req.body)
})


app.listen(8080,()=> {
    console.log("Server Started on POrt 8080");
})


// REST API (as per frontend) 
// get : receive data,
// post : send Data,
// put: remove previous and add new, 
// patch: update current data with new data
// delete: to detelet recode

