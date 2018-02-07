var config = {
   entry: './main.js',

   output: {
      path:'./',
      filename: 'index.js',
   },

   devServer: {
      inline: true,
      port: 8080
   },

   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',

            query: {
               presets: ['es2015', 'react']
            }
        },

        {
            test: /vendor\/.+\.(jsx|js)$/,
            loader: 'imports?jQuery=jquery,$=jquery,this=>window'
        }
      ]
   }
};

module.exports = config;
