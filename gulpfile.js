"use strict";
const gulp = require("gulp");
const sass = require('gulp-dart-sass');
const concat = require("gulp-concat");
const sassdoc = require('sassdoc');
const postcss = require('gulp-postcss');


gulp.task('compile', () => {
  const options = { dest: 'src-docs', verbose: true };

  return gulp
    .src('./src/*.scss')
    .pipe(sassdoc(options))
    .pipe(sass({outFile: './dist/style.css'}).on('error', sass.logError))
    .pipe(gulp.dest('./dist/'));
}); 


gulp.task('generate', () => {
	return gulp
    .src('./dist/style.css')
    .pipe(
		  postcss([
			  require('mdcss')({
          destination: './dist/docs',
          assets: ['./dist/style.css'],
        })
		  ]))
    .pipe(
		  gulp.dest('./dist/')
	  );
});


//broken??
gulp.task('watch', () => {
  //@ts-ignore
  return gulp.watch('./sass/*.scss', ['compile']);
});
