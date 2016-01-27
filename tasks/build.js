var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    spmindexsrc = "web/spm/build/note/0.0.1/index.js";

gulp.task('build', ['spm'], function(){
    console.log("static resource building succeed.");
    gulp.src(spmindexsrc)
        .pipe(uglify())
        .pipe(gulp.dest('web/spm/build/note/0.0.1/'))
});
