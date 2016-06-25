import path from 'path';

export default {
	devtool: 'eval',
	entry: {
		main: './frontend/index',
	},
	output: {
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js',
		publicPath: '/public/',
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