module.exports = {
  entry: './client/app/app.js',
  output: {
    filename: 'bundle.js'
  },
  devtool: 'sourcemap',
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel', exlcude: [/node_modules/] },
      { test: /\.html$/, loader: 'raw' },
      { test: /\.styl$/, loader: 'style!css!stylus' }
    ]
  }
};
