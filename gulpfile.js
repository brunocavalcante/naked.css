'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var merge = require('merge-stream');
var cssmin = require('gulp-cssmin');
 
gulp.task('dist', function () {
  var cssStream, sassStream;

  sassStream = gulp.src('./src/**/*.scss').pipe(sass({outputStyle: 'compressed'}));
  cssStream = gulp.src('vendor/normalize.css');

  return merge(sassStream, cssStream).pipe(concat('naked.min.css')).pipe(cssmin()).pipe(gulp.dest('dist'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./src/**/*.scss', ['sass']);
});