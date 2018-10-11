const path = require('path');
const webpack = require('webpack');
const CompressionPlugin = require('compression-webpack-plugin');
const cssnext = require('postcss-cssnext');
const nodeExternals = require('webpack-node-externals');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

process.noDeprecation = true

function ifProd(env, plugin) {
  if (env === 'prod') return plugin
  return undefined
}

function ifDev(env, plugin) {
  if (env === 'dev') return plugin
  return undefined
}

function noUndefined(array) {
  return array.filter(function(item) {
    return !!item
  })
}

module.exports = function(env) {
  return {
    name: 'client',
    devtool: env === 'prod' ? 'source-map' : 'eval',
    entry: {
      bundle: noUndefined([
        'babel-polyfill',
        'isomorphic-fetch',
        ifDev(env, 'webpack-hot-middleware/client'),
        './src/client'
      ])
    },
    output: {
      path: path.join(__dirname, 'dist'),
      filename: '[name].js',
      publicPath: '/static/'
    },
    plugins: noUndefined([
      new CompressionPlugin(),
      new ExtractTextPlugin('style.css'),
      new webpack.DefinePlugin({
        "process.env": {
          'client': JSON.stringify(true),
          'NODE_ENV': JSON.stringify(process.env.NODE_ENV),
          'API_ID': JSON.stringify(process.env.API_ID),
          'API_ENDPOINT': JSON.stringify(process.env.API_ENDPOINT),
          'API_JS_ID': JSON.stringify(process.env.API_JS_ID),
        }
      }),
      new webpack.LoaderOptionsPlugin({
        test: /\.css$/,
        options: {
          postcss: cssnext,
          // required to avoid issue css-loader?modules
          // this is normally the default value, but when we use
          // LoaderOptionsPlugin, we must specify it again, otherwise,
          // context is missing (and css modules names can be broken)!
          context: __dirname,
        },
      }),
      ifDev(env, new webpack.HotModuleReplacementPlugin()),
      ifProd(env, new webpack.NoEmitOnErrorsPlugin()),
      ifProd(env, new webpack.LoaderOptionsPlugin({
        minimize: true
      })),
      ifProd(env, new webpack.optimize.UglifyJsPlugin({
        sourceMap: true,
        compress: {
          warnings: false
        }
      }))
    ]),
    resolve: {
      modules: [
        path.join(__dirname, 'src'),
        'node_modules'
      ],
      extensions: ['.js']
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          include: __dirname,
          query: {
            plugins: [
              ['import', { libraryName: 'antd', style: 'css' }]
            ],
          }
        },
        {
          test: /\.(scss|css$)$/,
          include: [/node_modules\/.*antd/, /node_modules\/rc-drawer-menu/],
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader'],
          })
        },
        {
          test: /\.(scss|css$)$/,
          exclude: /node_modules/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]', 'sass-loader'],
          })
        },
        {
          test: /\.(png|jpg|svg|ico)$/,
          loader: 'file-loader',
          options: {
            name: 'images/[name].[ext]'
          }
        },
        {
          test: /\.(ttf|woff|eot|ttf|otf|woff2)$/,
          loader: 'file-loader',
          options: {
            name: 'fonts/[name].[ext]'
          }
        },
      ]
    }
  }
}
