var path = require('path');
var webpack = require('webpack');
//JS压缩
var uglifyJsPlugin = require('uglifyjs-webpack-plugin');

//css生成新文件
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
	entry: {
		'sim_mobile': './src/js/sim_mobile.js',
		'sim_mobile': ['./src/css/sim_mobile.css']
		//'jquery': ['./src/js/jquery-3.2.1.min.js']
	}
	,output: {
		path: __dirname + '/dist',
		filename: '[name].js'
	}
	,module: {
		rules: [
			{
	        	test: /\.less$/,
	        	loader:ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader!less-loader' })
	        },
			{
		        test: /\.(png|jpg|gif)$/,
		        use: [
		          {
		            loader: 'file-loader',
		            options: {
		            	name: 'img/[name].[ext]',
		            	//useRelativePath: true,
		            	publicPath: '/h5/dist/'
		            }  
		          }
		        ]
		    }
        ]
	}
	,plugins: [
		new uglifyJsPlugin({
			uglifyOptions: {
				ie8: true,
				comments: false,
				compress: {
					drop_console: true
				},
				warnings: false
		    }
	    })
		,new ExtractTextPlugin("[name].css")
		,new OptimizeCssAssetsPlugin({
	        cssProcessor: require('cssnano'),
	        cssProcessorOptions: { discardComments: {removeAll: true } },
	        canPrint: true
		})
	]
};