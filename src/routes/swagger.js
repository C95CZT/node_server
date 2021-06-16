
import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
// import swaggerModelValidator from 'swagger-model-validator';

const router = express.Router()
const options = {
  swaggerDefinition: {
    info: {
      title: 'REST - Swagger',
      version: '1.0.0',
      description: 'REST API with Swagger doc',
      contact: {
        email: 'grant111924@gmail.com'
      }
    },
    tags: [
      {
        name: 'AMSS5',
        description: 'AMSS5 API'
      }
    ],
    schemes: ['http:127.0.0.1:3112'],
    host: 'localhost:3112',
    basePath: '/swagger'
  }, // 下面記得要寫上要讀哪邊的註解
  apis: ['./src/routes/user.js','./src/controller/user.js','./src/models/modelUser.js']
}


const swaggerSpec = swaggerJSDoc(options)
// swaggerModelValidator(swaggerSpec);

router.get('/json', function (req, res) {
  res.setHeader('Content-Type', 'application/json')
  res.send(swaggerSpec)
})

router.use('/api', swaggerUi.serve, swaggerUi.setup(swaggerSpec))


export default router;