"use strict";
const gulp = require("gulp");
const sass = require('gulp-dart-sass');
const concat = require("gulp-concat");
const sassdoc = require('sassdoc');

gulp.task('compile', () => {
  const options = { dest: 'docs', verbose: true };

  return gulp
    .src('./src/*.scss')
    .pipe(sassdoc(options))
    .pipe(sass({outFile: './dist/ignite.css'}).on('error', sass.logError))
    .pipe(gulp.dest('./dist/'));
});

//broken??
gulp.task('watch', () => {
  //@ts-ignore
  return gulp.watch('./sass/*.scss', ['compile']);
});
