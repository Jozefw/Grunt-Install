module.exports = function(grunt) {

// task settings
	grunt.initConfig({
		cssmin: {
			dist: {
				// takes an array of css files and minifies into one file with .min. as part of the extension
				files: {
					'css/style.min.css': ['css/reset.css', 'css/style.css']
				}
			}
		}
	});
// loads tasks
	grunt.loadNpmTasks('grunt-contrib-cssmin');
// registers tasks to be loaded from command line.  Tasks are from above and placed into an array
	grunt.registerTask('default', [
		'cssmin'
	]);

};