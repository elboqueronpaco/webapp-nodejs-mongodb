import express from 'express'

const router = express.Router()
router
    .get('/', (req,res, next)=>{
        res.render('index')
    })
    .get('/signup', (req,res, next)=>{

    })
    .post('/signup', (req,res, next)=>{

    })
    .get('/signin', (req,res, next)=>{

    })
    .post('/signin', (req,res, next)=>{

    })

export default router