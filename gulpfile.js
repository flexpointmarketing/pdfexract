'use strict';

var gulp = require('gulp'),
	nodemon = require('gulp-nodemon'),
	browserSync = require('browser-sync'),
	browserify = require('browserify');
	
gulp.task('default', ['browser-sync'], function () {
	
});

gulp.task('browser-sync', ['nodemon'], function() {
	browserSync.init(null, {
		proxy: "http://localhost:3000",
        files: [
			"public/**/*.*",
			"views/*.*"
		],
        port: 8000,
	});
});

gulp.task('nodemon', function (cb) {
	var started = false;
	return nodemon({
		script: 'bin/www'
	}).on('start', function () {
		// to avoid nodemon being started multiple times
		if (!started) {
			cb();
			started = true;
		} 
	});
});
