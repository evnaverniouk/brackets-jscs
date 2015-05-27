"use strict";

module.exports = function (grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		compress: {
			build: {
				options: {
					archive: 'build/brackets-jscs-<%= pkg.version %>.zip'
				},
				files: [{
					src: [
						'domain.js',
						'main.js',
						'LICENSE',
						'NOTICE',
						'package.json',
						'README.md',
						'node_modules/findup/**/*',
						'node_modules/jscs/**/*'
					],
					dest: '/'
				}]
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-compress');

	grunt.registerTask('build', ['compress']);
};