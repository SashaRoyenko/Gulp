module.exports = function() {
    $.gulp.task('sass:dev', function () {
        return $.gulp.src('src/static/styles/main.scss')
            .pipe($.gp.sourcemaps.init())
            .pipe($.gp.sass().on('error', $.gp.sass.logError))
            .pipe($.gp.sass({
                'include css': true
            }))
            .pipe($.gp.autoprefixer({
                browsers: ['last 3 versions']
            }))
            .on("error", $.gp.notify.onError({
                message: "Error: <%= error.message %>",
                title: "style"
            }))
            .pipe($.gp.combineMq({
                beautify: true
            }))
            .pipe($.gp.sourcemaps.write())
            .pipe($.gulp.dest('build/static/css/'))
            .pipe($.bs.reload({
                stream: true
            }));
    });
    $.gulp.task('sass:build', function () {
        return $.gulp.src('src/static/styles/main.scss')
            .pipe($.gp.sourcemaps.init())
            .pipe($.gp.sass().on('error', $.gp.sass.logError))
            .pipe($.gp.sass({
                'include css': true
            }))
            .pipe($.gp.autoprefixer({
                browsers: ['last 3 versions']
            }))
            .pipe($.gp.csso())
            .on("error", $.gp.notify.onError({
                message: "Error: <%= error.message %>",
                title: "style"
            }))
            .pipe($.gp.sourcemaps.write())
            .pipe($.gulp.dest('build/static/css/'))
            .pipe($.bs.reload({
                stream: true
            }));
    });
};
