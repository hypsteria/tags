import path from 'path';

export default {
	devtool: 'eval',
	entry: './frontend/index',
	output: {
		path: __dirname,
		filename: 'bundle.js',
		publicPath: '/static/',
	},
	module: {
		loaders: [{
			test: /\.js$/,
			loaders: ['babel'],
			exclude: /node_modules/,
			include: __dirname,
		}],
	},
};