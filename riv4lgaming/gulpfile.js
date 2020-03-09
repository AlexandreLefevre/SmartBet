'use strict';

//dependance
var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-clean-css');
var rename = require('gulp-rename');
var changed = require('gulp-changed');

// - SCSS / CSS
var SCSS_SRC = './src/Assets/scss/**/*.scss';
var SCSS_DEST = './src/ Assets/css';

//compile scss
gulp.task('compile_scss', function(){
    gulp.src('SCSS_src')
    .pipe(sass().on('error', sass.logError))
    .pipe(minifyCSS())
    .pipe(rename({ suffix: '.min' }))
    .pipe(changed(SCSS_DEST))
    .pipe(gulp.dest(SCSS_DEST));
});

//detect change in scss
gulp.task('watch_scss', function(){
    gulp.watch(SCSS_SRC, ['compile_scss']);
})

//run task
gulp.task('default', ['watch_scss']);