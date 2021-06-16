import express from 'express'
import User from '../controller/user'
const router = express.Router();
const user = new User();

/**
 * @swagger
 * /register:
 *      post:
 *      summary: Create a JSONPlaceholder user.
 *      parameter:
 *      - name: username
 *        type: string
 *        in: body
 *        required: true
 *      - name: user
 *        type: string
 *        in: body
 *        required: true
 * 
*/      


router.post('/register',(req, res) => {
    user.register(req, res)
})


/**
 * @swagger
 * /data:
 *   get:
 *     description: Create Grid
 *     responses:
 *       200:
 *         description:  suceess
 *        
 */
router.get('/data2',(req, res) => {
    res.send("SUCCESS")
})

export default router
