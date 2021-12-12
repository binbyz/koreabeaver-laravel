const mix = require('laravel-mix');
const path = require('path');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

 mix.webpackConfig({
	module: {
		rules: [
			{
				test: /\.pug$/,
				loader: 'pug-plain-loader'
			}
		]
	}
});

mix.webpackConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'resources')
    },
  },
});

mix.ts('resources/js/main.ts', 'public/js')
    .vue({ version: 3 });
    // .sass('resources/sass/app.scss', 'public/css');
