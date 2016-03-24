var gulp = require('gulp');
var webpack = require('gulp-webpack');
var webpackConfig = require('../webpack.config');

gulp.task('watch-webpack', function () {
    gulp.watch(['./web/marketing/sd/js/*.js'], ['webpack']);
});
gulp.task("webpack", function() {
    return gulp
        .src('./web/marketing/sd/js/*.js')
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest('./web/build'));
});