import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'

dotenv.config()
const app=express()

app.use(express.json())


app.listen(process.env.PORT || 3000 ,()=>{
    connectDB()
    console.log(`Server is running on port ${process.env.PORT}`)
    process.exit(0)
})



