import * as fs from 'fs'
import * as webpack from 'webpack'
import config from './webpack.conf'
import * as webpackDevMiddleware from 'koa-webpack-dev-middleware'
import hotMiddleware from 'koa-webpack-hot-middleware-async'
import * as path from 'path'

import * as Koa from 'koa'
import * as cors from 'kcors'
import * as Router from 'koa-router'
import * as compress from 'koa-compress'
import * as bodyParser from 'koa-bodyparser'
import * as send from 'koa-send'

const app = new Koa()
app.use(compress())
app.use(bodyParser())
const router = new Router()

const compiler = webpack(config)
const devMiddleware = webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
  contentBase: 'src',
  stats: {
    colors: true,
    hash: false,
    timings: true,
    chunks: false,
    chunkModules: false,
    modules: false
  }
})

app.use(cors({credentials: true}))

app.use(devMiddleware)
app.use(hotMiddleware(compiler))

// mocks
router.all('*', async (ctx, next) => {
  try {
    let filePath = ctx.request.url + '.' + ctx.request.method + '.json'
    const rootDir = path.resolve(__dirname, 'mocks')

    fs.accessSync(rootDir + filePath, fs.constants.R_OK)
    await send(ctx, filePath, {root: rootDir})
  } catch (e) {
    await next()
  }
})

app.use(router.routes())
app.use(router.allowedMethods())

app.listen(3000, '0.0.0.0', function onStart(err) {
  if (err) {
    console.log(err)
  }

  console.info('==>   Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.', 3000, 3000)
})
