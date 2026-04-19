import express from 'express';
import path,{dirname} from 'path'
import {fileURLToPath} from 'url'
const app=express()
const PORT=process.env.PORT||5005
const __filename=fileURLToPath(import.meta.url)
const __dirname=dirname(__filename)
app.use(express.json())

app.use(express.static(path.join(__dirname,'../public')))

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','index.html'))
})
console.log('hello world')

app.listen(PORT,()=>{
    console.log(`SERVER HAS STARTED ON:${PORT}`)
})