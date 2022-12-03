const express = require('express')
const cors=require("cors");
const app = express();
const StudentsRoute = require('./src/student/Routes')
const Port = 8000;

const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions))
app.use(express.json())

app.get("/", (req, res) => {
    res.send('From teh Get Route..')
})

app.use('/student', StudentsRoute)

app.listen(Port, () => console.log(`App listen on port ${Port}`))



