var Promise = require('bluebird');
var path = require('path');
var gulp = require('gulp');
var gulpSync = require('gulp-sync')(gulp);
var concat = require('gulp-concat');
var riot = require('gulp-riot');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var webpack = require('gulp-webpack');
var fs = Promise.promisifyAll(require('fs'));
var map = {
    tenants: {
        module: 'boss-index'
    },
    tenant: {
        module: 'boss-tenant-index'
    }
};
var tenantWebpackConfig = require('../web/confs/' + map.tenants.module + '.config');
var webpackConfig = require('../web/confs/' + map.tenant.module + '.config');

gulp.task('build-boss', gulpSync.sync(['boss-tenants', 'boss-tenant']), function(){
    console.log('build ok.');
});

gulp.task('boss-tenants', ['replace-tenants'], function(){
    return gulp.src('web/js/*.js')
        .pipe(webpack(tenantWebpackConfig))
        .pipe(gulp.dest('web/boss-tenants-index/build/js'))
        .pipe(uglify().on('error', function(e) { console.log('\x07',e.message); return this.end(); }))
        .pipe( gulp.dest('public/boss-tenants-index/build/js') );
});

gulp.task('tags-tenants', function(){
    return gulp.src('web/boss-tenants-index/tags/*.html')
        .pipe( riot() )
        .pipe( concat('tagsOrigin.js') )
        .pipe( gulp.dest('web/boss-tenants-index/build/tmp') )
});

gulp.task('cp-tenants',function(){
    gulp.src(['web/js/**/*.js'])
        .pipe(gulp.dest('web/build/js'));
});

gulp.task('replace-tenants', ['tags-tenants', 'cp-tenants'], function(cb){
    var prefix = "module.exports=function(){";
    var suffix = "}";
    setTimeout(function(){
        fs.readFileAsync('web/boss-tenants-index/build/tmp/tagsOrigin.js', 'utf-8')
            .then(function(data){
                if( data && typeof data === "string" ){
                    fs.writeFile('web/build/js/app/tags.js', prefix + data + suffix, function(err){
                        if (!err) {
                            return cb();
                        }
                        cb(new Error("cmd tags build failed."));
                    });
                }
            })
    }, 1000);

});


gulp.task('boss-tenant', ['replace-tenant'], function(){
    gulp.src('web/js/*.js')
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest('web/build/js'))
        .pipe(uglify().on('error', function(e) { console.log('\x07',e.message); return this.end(); }))
        .pipe( gulp.dest('public/build/js') );
});

gulp.task('tags-tenant', function(){
    gulp.src('web/tag/*.html')
        .pipe( riot() )
        .pipe( concat('tagsOrigin.js') )
        .pipe( gulp.dest('web/build/tmp') );
});

gulp.task('cp-tenant',function(){
    gulp.src(['web/js/**/*.js'])
        .pipe(gulp.dest('web/build/js'));
});

gulp.task('replace-tenant', ['tags-tenant', 'cp-tenant'], function(cb){
    var prefix = "module.exports=function(){";
    var suffix = "}";
    fs.readFileAsync('web/build/tmp/tagsOrigin.js', 'utf-8')
        .then(function(data){
            if( data && typeof data === "string" ){
                fs.writeFile('web/build/js/app/tags.js', prefix + data + suffix, function(err){
                    if (!err) {
                        return cb();
                    }
                    cb(new Error("cmd tags build failed."));
                });
            }
        })
});