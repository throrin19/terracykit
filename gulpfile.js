'use strict';

var gulp        = require('gulp'),
    less        = require('gulp-less'),
    watch       = require('gulp-watch'),
    rename      = require('gulp-rename'),
    path        = require('path');


var lessTask =  function (compress) {
    var fileName = 'terracy.css';
    if (compress) {
        fileName = 'terracy.min.css';
    }

    return gulp.src('./less/terracy.less')
        //.pipe(watch('less/terracy.less'))
        .pipe(less({
            filename : 'terracy.less',
            paths: [ path.join(__dirname, 'less') ],
            compress : compress
        }))
        .pipe(rename(fileName))
        .pipe(gulp.dest('./dist/css/'))
        .pipe(gulp.dest('./docs/assets/dist/css/'));
};

gulp.task('less', function () {
    return lessTask(false);
});
gulp.task('less-min', function () {
    return lessTask(true);
});

gulp.task('build', [ 'less', 'less-min' ], function () {
    gulp.watch('./less/**/*.less', [ 'less', 'less-min' ]);
});