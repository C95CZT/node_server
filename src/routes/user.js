import express from 'express'
import User from '../controller/user'
const router = express.Router();
const user = new User();

router.post('/register',(req, res) => {
    
})

router.get('/data',(req, res) => {
    res.send("SUCCESS")
})
// router.post('/login',user.login)

export default router
