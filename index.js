import express from 'express'
import bodyParser from 'body-parser'
import varuosaRouter from './routes/varuosa.js'
const app = express()

const PORT = 8080;

app.use(bodyParser.json())

// /api/varuosad
app.use('/api', varuosaRouter)

app.listen(PORT, function(){
    console.log(`Mine üle http://localhost:${PORT}`)
})