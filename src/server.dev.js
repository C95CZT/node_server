import path from 'path'
import express from 'express'
import cors from 'cors'
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import bodyParser from 'body-parser'
import config from '../webpack.config'
import index from './routes/index'

const app = express();
const PORT = process.env.PORT || 3112;
const compiler = webpack(config);

const corsOptions = {
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  allowedHeaders: ['Content-Type', 'Authorization'],
  preflightContinue: false,
};

app.use(cors());
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}))
app.use(webpackHotMiddleware(compiler))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


// app.get('/',(req,res)=>{
//    res.send("HELLO WORLD")
// })

app.get('/data',(req,res)=>{
    res.send("HELLO WORLD Data")
})
app.post('/register',(req, res) => {
    console.log(req.body)
    res.send(req.body)
})

app.use('/api',index);

app.listen(PORT, () => {
    console.log(`Dev App listening to ${PORT}....`)
    console.log('Press Ctrl+C to quit.')
})