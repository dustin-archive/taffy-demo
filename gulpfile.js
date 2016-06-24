'use strict'

var gulp = require('gulp')
var sass = require('gulp-sass')
var jade = require('gulp-jade')

gulp.task('scss', function () {
  gulp.src('index.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(''))
})

gulp.task('jade', function () {
  gulp.src('index.jade')
    .pipe(jade({ pretty: true }))
    .pipe(gulp.dest(''))
})

gulp.task('watch', function () {
  gulp.watch('index.scss', ['scss'])
  gulp.watch('index.jade', ['jade'])
})
