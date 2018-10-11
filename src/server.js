import Express from 'express'
import logger from 'morgan'
import path from 'path'
import compression from 'compression'
import bodyParser from 'body-parser'

// ===== ROUTES ================================================================
import index from './routes/index'

const app = Express()
const port = process.env.PORT || 3000
const host = process.env.HOST || "0.0.0.0"
const env = process.env.NODE_ENV || 'development'

app.use(compression())

if (env === 'development') {
  const webpackDevMiddleware = require('webpack-dev-middleware')
  const webpackHotMiddleware = require('webpack-hot-middleware')
  const config = require('../webpack.dev.config.js')
  const compiler = require('webpack')(config)
  app.use(webpackDevMiddleware(compiler, {
    hot: true,
    noInfo: true,
    publicPath: config.output.publicPath,
    devServer: { compress: true }
  }))
  app.use(webpackHotMiddleware(compiler))

  console.log(
    "\n##########################\n" +
    "- Mode: Develop \n" +
    "- Listening on port: " + port +
    "\n##########################\n"
  )
} else {
  // Disallow sourcemap on browser in production
  app.get('/static/bundle.js.map', (req, res) => {
    res.sendStatus(400);
  })
  console.log(
    "\n##########################\n" +
    "- Mode: Production \n" +
    "- Listening on port: " + port +
    "\n##########################\n"
  )
}

/* ----------  Static Assets  ---------- */

app.use(Express.static(path.resolve(__dirname + '/../public')))
app.use('/static', Express.static(path.resolve(__dirname + '/../dist')))


/* ----------  Parsers  ---------- */

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies


 /* ----------  Loggers &c  ---------- */

app.use(logger('dev'));


/* =============================================
   =                   Routes                  =
   ============================================= */

/* ----------  Primary / Happy Path  ---------- */

app.use(index)


/* =============================================
   =                 Port Setup                =
   ============================================= */

app.listen(port, error => {
  if (error) {
    console.error(error)
  } else {
    console.info("==> Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
})
