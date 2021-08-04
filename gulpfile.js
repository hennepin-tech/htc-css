"use strict";
const gulp = require("gulp");
const sass = require('gulp-sass')(require('node-sass'));
const concat = require("gulp-concat");
const sassdoc = require('sassdoc');

gulp.task("sass", () => {

  const options = {
    dest: 'docs',
    verbose: true
  };

  return gulp
    .src("./src/*.scss")
    .pipe(concat("ignite.scss"))
    .pipe(sassdoc(options))
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./dist/"));
});
