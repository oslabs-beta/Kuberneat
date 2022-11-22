const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',

	entry: './client/src/index.tsx',
	output: {
		path: path.join(__dirname, '/dist'),
		filename: 'bundle.js',
	},

	plugins: [
		new HTMLWebpackPlugin({
			template: './client/src/index.tsx',
		}),
	],

  devServer: {
		host: 'localhost',
		port: 8000,
		// enable HMR on the devServer
		hot: true,
		// fallback to root for other urls
		historyApiFallback: true,

		static: {
			// match the output path
			directory: path.resolve(__dirname, 'dist'),
			// match the output 'publicPath'
			publicPath: '/',
		},

		headers: { 'Access-Control-Allow-Origin': '*' },
	
		proxy: {
			'/api/**': {
				target: 'http://localhost:3000/',
				secure: false,
			},
		},
	},


	module: {
		rules: [
			{
				test: /.(js|jsx)$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react'],
						plugins: [],
					},
				},
			},
			{
				test: /\.js$/,
				enforce: 'pre',
				use: ['source-map-loader'],
			},
		],
	},
	resolve: {
		// Enable importing JS / tSX files without specifying their extension
		extensions: ['.js', '.jsx', '.tsx'],
	},
};
