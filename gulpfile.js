'use strict';

var gulp        = require('gulp'),
    less        = require('gulp-less'),
    watchLess   = require('gulp-watch-less'),
    path        = require('path');

gulp.task('less', function () {
    return gulp.src('./less/terracy.less')
        .pipe(watchLess('less/**.less'))
        .pipe(less({
            filename : 'terracy.less',
            paths: [ path.join(__dirname, 'less') ],
            compress: true
        }))
        .pipe(gulp.dest('./dist/css/'));
});

gulp.task('less-doc', function () {
    return gulp.src('./less/terracy.less')
        .pipe(watchLess('less/**.less'))
        .pipe(less({
            filename : 'terracy.less',
            paths: [ path.join(__dirname, 'less') ],
            compress: true
        }))
        .pipe(gulp.dest('./docs/dist/css/'));
});

gulp.task('build', [ 'less', 'less-doc' ], function () {
    return;
});