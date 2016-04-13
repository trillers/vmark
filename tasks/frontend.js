var gulp = require('gulp');
var path = require('path');
var webpack = require('gulp-webpack');
var webpackConfig = require('../webpack.config');
var sdPath = './web/marketing/sd';

gulp.task('watch-webpack', function () {
    gulp.watch([path.join(sdPath, '/*/*.js'), path.join(sdPath, '/*/*.html')], ['webpack']);
});
gulp.task("webpack", function() {
    return gulp
        .src('./web/marketing/sd/js/*.js')
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest('./web/build/js'));
});