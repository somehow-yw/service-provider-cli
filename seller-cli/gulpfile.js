/**
 * Created by H5 on 2017.03.06.
 */

var gulp = require('gulp'),
    changed = require('gulp-changed');

var src = 'build/Public/service-provider/seller/*',
    dest = '../../service-providers/public/Public/service-provider/seller';

gulp.task('copy', function () {
    return gulp.src(src)
        .pipe(changed(dest)
        .pipe(gulp.dest(dest)));
});

gulp.task('default', function () {
    return gulp.start('copy');
});