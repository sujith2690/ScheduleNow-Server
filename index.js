import express from 'express'
import cors from 'cors'
import DBconnection from './db.js'
import bodyParser from 'body-parser';

const app = express()
app.use(cors())
app.use(express.json({ limit: '20mb' }));
app.use(bodyParser.json({ extended: true, limit: '50mb' }))
app.use(bodyParser.urlencoded({ extended: true }))

DBconnection();



const PORT = process.env.PORT 
app.listen(PORT, () => { console.log(`App is running on ${PORT}`) })



