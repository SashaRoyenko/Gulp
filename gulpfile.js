'use strict';

global.$ = {
    gulp : require('gulp'),
    gp : require('gulp-load-plugins')(),
    bs : require('browser-sync').create(),
    combineMq : require('gulp-combine-mq'),
    del: require('del'),
    fs: require('fs'),
    path:{
        tasks: require('./gulp/config/tasks.js')
    }
};

$.path.tasks.forEach(function (taskPath) {
    require(taskPath)();
});

$.gulp.task('default', $.gulp.series(
    'clean',
    $.gulp.parallel('pug', 'sass:dev', 'scripts:lib', 'scripts', 'img:dev', 'svg'),
    $.gulp.parallel('watch', 'serve'),
));

$.gulp.task('build', $.gulp.series(
    'clean',
    $.gulp.parallel('pug', 'sass:build', 'scripts:lib', 'scripts', 'img:build', 'svg'),
    $.gulp.parallel('watch', 'serve'),
));
