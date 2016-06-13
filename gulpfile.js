var gulp   = require('gulp'),
    sass   = require('gulp-sass'),
    concat = require('gulp-concat');

var scssInput = './sass/**/*.scss';
var cssOutput = './css';

gulp.task('sass', function () {
    return gulp
        .src(scssInput)
        .pipe(sass())
        .pipe(gulp.dest(cssOutput));
});

var cssFiles = [
    "./node_modules/normalize.css/normalize.css",
    "./node_modules/frow/css/frow.css",
    "./css/main.css"
];

gulp.task('css', ['sass'], function () {
    return gulp
        .src(cssFiles)
        .pipe(concat('styles.css'))
        .pipe(gulp.dest('.'));
});