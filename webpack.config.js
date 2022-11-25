const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
	entry: './src/client/index.tsx',
	output: {
	  path: path.join(__dirname, '/dist'),
	  filename: 'bundle.js',
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/client/index.html',
		}),
	],
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				 //loader: 'file-loader',
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react'],
					},
				},
			},
			{
				test: /\.(ts|tsx)$/,
				exclude: /node_modules/,
				use: ['ts-loader'],
			},
			{
				test: /\.(sass|less|css)$/,
				use: ["style-loader", "css-loader", 'sass-loader'],
			},
		],
	},
	resolve: {
		// Enable importing JS / tSX files without specifying their extension
		extensions: ['*', '.ts', '.tsx', '.js', '.jsx', '.json'],
		fallback: {
			fs: false,
		},
	},
}

