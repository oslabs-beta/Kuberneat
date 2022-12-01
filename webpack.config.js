const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
	devServer: {
		host: 'localhost',
		//frontend
		port: 8080 ,
		historyApiFallback: true,
		//backend
		proxy: {
			'/': 'http://localhost:3000/',
		},
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				// loader: 'file-loader',
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
        test: /\.css$/i,
				exclude: /node_modules/,
        use: [
          "style-loader",
          "css-loader",
        ],
      },
			{
                test: /\.(png|jpg|gif)$/i,
				exclude: /node_modules/,
                use: [
                  "url-loader",
				  "file-loader",
                ],
            },

		],
	},
	resolve: {
		alias: {
			'@mui/styled-engine': '@mui/styled-engine-sc',
		},
		// Enable importing JS / TSX files without specifying their extension
		extensions: ['*', '.ts', '.tsx', '.js', '.jsx', '.json'],
		fallback: {
			fs: false,
		},
	},

};




