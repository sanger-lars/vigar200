var gulp = require('gulp'),
	watch = require('gulp-watch'),
	browserSync = require('browser-sync').create();

gulp.task('html', function() {
	browserSync.reload();
});



gulp.task('watch', function() {

	browserSync.init({
		host: "192.168.0.101",
		notify: false,
		server: {
			baseDir: "app"
		}
	});

	watch('./app/*.html', function() {
		gulp.start('html');
	});

	watch('./app/assets/styles/**/*.css', function() {
		gulp.start('cssInject');
	});

	watch('./app/assets/scripts/**/*.js', function() {
		gulp.start('scriptsRefresh');
	});
});

gulp.task('cssInject', ['styles'], function(){
	return gulp.src('./app/temp/styles/styles.css')
	.pipe(browserSync.stream());
});

gulp.task('scriptsRefresh', ['scripts'], function(){
	browserSync.reload();
});