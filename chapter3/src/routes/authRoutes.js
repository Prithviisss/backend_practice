import express from 'express'
import bcrypt from 'bcrypt'
import jvt from 'jsonwebtoken'
import db from '../db.js'

const router =express.Router()

//register a new user endpoint /auth/register
router.post('/register',(req,res)=>{ 
    const{username,password}=req.body
    console.log(username,password)
    res.sendStatus(201)

} )
router.post('/login',(req,res)=>{
    
})

export default router