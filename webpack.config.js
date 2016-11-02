// webpack.config.js
'use strict';


module.exports = {
	devtool: "eval",
	resolve: {
		extensions: ['', '.es6', '.js']
	},
	entry: {
		'main': './app/index'
	},
	output: {
		path: 'dist/js/',
		filename: 'main.js'
	},
	externals: {
		'jquery': '$',
		'underscore': '_',
		'react': 'React'
	},
	module: {
		loaders: [
			{ test: /\.js$/, loader: 'babel-loader' },
			{ test: /\.css$/, loader: "style-loader!css-loader" }
		]
	},
	target: 'electron-main'
};
