const webpack = require('webpack');

module.exports = {
  entry: [
      'script!jquery/dist/jquery.min.js',
      'script!foundation-sites/dist/js/foundation.min.js',
      './app/app.jsx'
      
  ],
    externals: {
        jquery: 'jQuery'
    },
    plugins: [
      new webpack.ProvidePlugin({
          '$': 'jquery',
          'jQuery': 'jquery'
          
      })  
        
    ],
  output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
    root: __dirname,
        alias: {
            Nav: 'app/components/Nav.jsx',
            Main: 'app/components/Main.jsx',
            Timer: 'app/components/Timer.jsx',
            Clock: 'app/components/Clock.jsx',
            Controls: 'app/components/Controls.jsx',
            Nav: 'app/components/Nav.jsx',
            Countdown: 'app/components/Countdown.jsx',
            applicationStyles: 'app/styles/app.scss'
            
        },
    extensions: ['', '.js', '.jsx']
},
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0']
                },
                test: /\.jsx?$/,
                exclude: /(node_modules | bower_components)/
            }
        ]
    },
    devtool: 'cheap-module-eval-source-map'
};