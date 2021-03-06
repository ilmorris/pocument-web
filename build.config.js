/*
 * This file/module contains all configuration for the build process.
*/
module.exports = {
	// The 'web_build_dir' folder is where our web project is compiled during development,
	// and the 'web_distro_dir' folder is where our web app resides once it's 
	// been completely built.
	build_dir: 'build',
	distro_dir: 'dist',

	app_files: {
		js: ['**/*.js', '!**/*.spec.js'],

		css: ['**/*.css'],

		atpl: ['src/app/**/*.tpl.html'],

		html: ['src/app/index.html']
	},

	vendor_files: {
		js: [
			'js/components/foundation/js/vendor/jquery.js',
			'js/components/foundation/js/vendor/zepto.js',
			'js/components/unstable-angular-complete/angular.js',
			'js/components/unstable-angular-complete/angular-resource.js',
			'js/components/unstable-angular-complete/angular-cookies.js',
			'js/components/ui-router/release/angular-ui-router.js',
			'js/components/foundation/js/foundation/foundation.js'
			
		]
	}
};