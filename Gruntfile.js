module.exports = function(grunt) {

// task settings
	grunt.initConfig({
		jshint:{
			all: 'js/scripts.js'
		},
		concat: {
			dist: {
				files: {
					'js/allMinified.js' : ['js/scripts.js', 'js/plugins.js']
				}
			}
		},
		csslint:{
			// what files do you want to lint?
			all: ['css/reset.css, css/tyle.css']
		},
		// cssmin: {
		// 	dist: {
				// takes an array of css files and minifies into one file with .min. as part of the extension
		// 		files: {
		// 			'css/style.min.css': ['css/reset.css', 'css/style.css']
		// 		}
		// 	}
		// },
		// autoprefixer:{
		// 	all: {
		// 		src: 'css/style.min.css'
		// 	}
		// }
		less: {
			dist: {
				files:{
					'css/style.min.css': ['less/style.less','mixins.less']
				}
			},
			options: {
				compress:true
			}
		},
		imagemin: {
			dist: {
				files:[{
					expand: true,
					cwd: 'images/source',
					src: ['**/*.{jpg,gif,png}'],
					dest:'images/dist'
				}]
			}
		}
	});
// loads tasks
    grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-concat');
	// grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-csslint');
	// grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-less');
// registers tasks to be loaded from command line.  Tasks are from above and placed into an array.  Below we want to lint our css before minifying to catch any errors
	grunt.registerTask('default', [
		'imagemin',
		'jshint',
		'concat',
		'csslint',
		// 'cssmin',
		// 'autoprefixer',
		'less'
	]);

};