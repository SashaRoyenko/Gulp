module.exports = function() {
    $.gulp.task('img:dev', function () {
        return $.gulp.src('src/static/img/**/*.{png,jpg,gif}')
            .pipe($.gulp.dest('build/static/img'));
    });

    $.gulp.task('img:build', function () {
        return $.gulp.src('src/static/img/**/*.{png,jpg,gif}')
            .pipe($.gp.tinypng('tLLH2jO6p9WdZwqEN5jNzeSl0Lh6z2on'))
            .pipe($.gulp.dest('build/static/img/'));
    });
};

//  module.exports = function () {
//     $.gulp.task('img:dev', function () {
//         return $.gulp.src('src/static/img/**/*.{png,jpg,gif}')
//             .pipe($.gulp.dest('build/static/img/'))
//             .pipe($.bs.reload({
//                 stream: true
//             }));
//     });
//
//     $.gulp.task('img:build', function () {
//         return $.gulp.src('src/static/img/**/*.{png,jpg,gif}')
//             .pipe($.gp.imagemin({
//                 progressive: true,
//                 interlaced: true
//             }))
//             .pipe($.gulp.dest('build/static/img/'))
//     });
// };