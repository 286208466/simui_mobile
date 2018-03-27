const path = require('path');

//JS压缩
//var uglifyJsPlugin = require('uglifyjs-webpack-plugin');

//css生成新文件
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var extractCSS = new ExtractTextPlugin("[name].css");
var extractLESS = new ExtractTextPlugin("[name].css");

var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
	entry: {
		'sim_mobile': './src/js/sim_mobile.js'
		,'sim_mobile': ['./src/less/sim_mobile.less']
	}
	,output: {
		path: __dirname + '/dist',
		filename: '[name].js'
	}
	,module: {
		rules: [
			{
		        test: /\.css$/,
		        use: extractCSS.extract([ 'css-loader', 'postcss-loader' ])
		    }
			,{
		        test: /\.less$/i,
		        use: extractLESS.extract({ 
	        		fallback: 'style-loader', 
	        		use: 'css-loader!less-loader' 
	        	})
		    }
	        ,{
	            test: /\.(png|jpg|gif)$/,
	            use: [
	              {
	                loader: 'url-loader',
	                options: {
	                  limit: 8192
	                }
	              }
	            ]
	        }
        ]
	}
	,plugins: [
		/*new uglifyJsPlugin({
			uglifyOptions: {
				ie8: true,
				comments: false,
				compress: {
					drop_console: true
				},
				warnings: false
		    }
	    })
		,*/
		extractCSS
	    ,extractLESS
		,new OptimizeCssAssetsPlugin({
	        cssProcessor: require('cssnano'),
	        cssProcessorOptions: { discardComments: {removeAll: true } },
	        canPrint: true
		})
	]
};