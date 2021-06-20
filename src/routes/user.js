import express from 'express'
import swaggerJsdoc from 'swagger-jsdoc';
import User from '../controller/user'
const router = express.Router();
const user = new User();

/**
 * @swagger
 * /api/user/list:
 *   get:
 *     tags: [Users]
 *     summary: Get an all user List.
 *     responses:
 *          200:
 *              description: Suceess
 *        
 */
router.get('/list',(req, res) => {
    user.list(req,res)
})

/**
 * @swagger
 * /api/user/{user_name}:
 *   get:
 *      tags: [Users]
 *      summary: Get an user .
 *      parameters:
 *         - in: path
 *           name: user_name
 *           required: true
 *              
 *      responses:
 *          200:
 *              description: Suceess
 *        
 */
router.get('/:user_name',(req, res) => {
    user.userInfo(req,res)
})


/**
 * @swagger
 * /api/user/register:
 *      post:
 *          tags: [Users]
 *          summary: Create a JSONPlaceholder user.
 * 
 *          requestBody:
 *              description: Optional description in *Markdown*
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/User'
 * 
 *          responses:
 *              201:
 *                  description: The created User.
 *                  content:
 *                       application/json:
 *                          schema:
 *                              $ref: '#/components/responses/Success'
*/                      
router.post('/register',(req, res) => {
    user.register(req, res)
})


/**
 * @swagger
 * /api/user/update:
 *      patch:
 *          tags: [Users]
 *          summary: Update an user .
 *          requestBody:
 *              description: Optional description in *Markdown*
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/User'
 *          responses:
 *              200:
 *                  description: Suceess
 *        
 */
router.patch('/update',(req,res) => {
    user.update(req,res)
})

/**
 * @swagger
 * /api/user/delete:
 *      delete:
 *          tags: [Users]
 *          summary: Detele an user By username .
 *          requestBody:
 *              description: Optional description in *Markdown*
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/User'
 *          responses:
 *              200:
 *                  description: Suceess
 *        
 */
router.delete('/delete',(req,res) => {
    user.delete(req,res)
})

export default router
