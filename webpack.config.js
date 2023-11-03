module.exports = {
  entry: './src/index.js',
  module: {
      rules: [
          {
              test: /\.(js)$/,
              exclude: /node_modules/,
              use: {
                  loader: 'babel-loader'
              }
          },
          {
            test: /\.m?js/,
            type: "javascript/auto",
          },
          {
            test: /\.m?js/,
            resolve: {
              fullySpecified: false,
            },
          },
      ],
  }
}
