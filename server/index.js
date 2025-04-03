const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config()
const port = process.env.PORT || 5000
const cors = require('cors')
const bodyParser = require('body-parser')
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())
let countries = [
    {
        name: "Nigeria",
        capital: "Abuja",
        population: 200000000,
        officialLanguage: "English",
        currency: "Naira"
    },
    {
        name: "Ghana",
        capital: "Accra",
        population: 31000000,
        officialLanguage: "English",
        currency: "Cedi"
    },
    {
        name: "Kenya",
        capital: "Nairobi",
        population: 53000000,
        officialLanguage: "Swahili and English",
        currency: "Kenyan Shilling"
    }
];



app.get('/test', (req,res)=>{
    res.send({countries})

})
app.listen(port,()=>console.log(`Server started`)
)