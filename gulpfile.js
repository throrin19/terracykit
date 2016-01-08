'use strict';

var gulp        = require('gulp'),
    less        = require('gulp-less'),
    watch       = require('gulp-watch'),
    watchLess   = require('gulp-watch-less'),
    path        = require('path');


var lessTask =  function () {
    return gulp.src('./less/terracy.less')
        .pipe(less({
            filename : 'terracy.less',
            paths: [ path.join(__dirname, 'less') ],
            compress: true
        }))
        .pipe(gulp.dest('./dist/css/'))
        .pipe(gulp.dest('./docs/assets/dist/css/'));
};



//gulp.task('less-doc', function () {
//    return gulp.src('./less/terracy.less')
//        .pipe(watchLess('less/terracy.less'))
//        .pipe(less({
//            filename : 'terracy.less',
//            paths: [ path.join(__dirname, 'less') ],
//            compress: true
//        }))
//        .pipe(gulp.dest('./docs/assets/dist/css/'));
//});

gulp.task('build', function () {
    return lessTask();
});