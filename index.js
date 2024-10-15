import express from 'express'
import cors from 'cors'
import DBconnection from './db.js'
import bodyParser from 'body-parser';
import authRoute from './routers/authRoute.js';
import scheduleRoute from './routers/scheduleRoute.js';

const app = express()
app.use(cors())
app.use(express.json({ limit: '20mb' }));
app.use(bodyParser.json({ extended: true, limit: '50mb' }))
app.use(bodyParser.urlencoded({ extended: true }))

DBconnection();

app.use('/auth', authRoute);
app.use('/schedule', scheduleRoute);


const PORT = process.env.PORT 
app.listen(PORT, () => { console.log(`App is running on ${PORT}`) })



