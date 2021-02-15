'use strict';

var gulp = require('gulp');

var sass = require('gulp-sass');

var concat = require('gulp-concat');

sass.compiler = require('node-sass');

gulp.task('sass', function () {
   return gulp.src('./sass/**/_global.scss')
   .pipe(concat('style.scss'))
   .pipe(sass().on('error', sass.logError))
   .pipe(gulp.dest('./'));
});

gulp.task('watch', function () {
    gulp.watch('./sass/**/*.scss', gulp.series('sass'));
  });