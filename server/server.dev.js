import path from 'path'
import express from 'express'
import cors from 'cors'
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import config from '../webpack.config'



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



app.get('/data',(req,res)=>{
    res.send("HELLO WORLD")
})


app.listen(PORT, () => {
    console.log(`Dev App listening to ${PORT}....`)
    console.log('Press Ctrl+C to quit.')
})