const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

gulp.task('sass', function(){
    return gulp.src('testgulp/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('testgulp/css'))
    .pipe(browserSync.stream());
});

gulp.task('browserSync', function() {
    browserSync.init({
        server: "testgulp"
    });

    gulp.watch('testgulp/scss/**/*.scss', gulp.series('sass'));
    gulp.watch('testgulp/*.html').on('change', () => {
        browserSync.reload();
    });
});

gulp.task('default', gulp.series('sass', 'browserSync'));

/*gulp.task('watch', function(){
    gulp.watch('testgulp/scss/**//*.scss', gulp.series('sass'));
})*/