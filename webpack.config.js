const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (env) => {
  const isproduction = env === 'production';
  const CSSExtract = new ExtractTextPlugin('styles.css');

  console.log('env', env);
  return {
    entry: './src/app.js',
    output: {
      path: path.join(__dirname, 'public'),
      filename: 'bundle.js'
    },
    module: {
      rules: [{
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }, {
        test: /\.s?css$/,
        use: CSSExtract.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                sourseMap: true
              }
            },
            {
              loader:'sass-loader',
              options: {
                sourseMap: true
              }
            }
          ]
        })
      }]
    },
    plugins: [
      CSSExtract
    ],
    devtool: isproduction ? 'source-map' : 'inline-source-map',
    devServer : {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true
    }
  };
};
