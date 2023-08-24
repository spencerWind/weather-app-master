

const express = require("express"); 
const cors = require("cors");
const app = express();   

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./config/mongoose.config')
require("./routes/weather.routes")(app);




app.use(cors({
    origin:"http://localhost:3000"
}));





app.listen(8000, ()=>console.log("Listening on Port 8000"))   



