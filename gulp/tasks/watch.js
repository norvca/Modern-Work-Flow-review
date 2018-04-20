var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();

gulp.task('watch', function() {
  browserSync.init({
    server:{
      baseDir: 'app'
    }
  })

  // 监听 html 文件
  watch('./app/index.html', function() {
    browserSync.reload();
  })

  // 监听 css 文件
  watch('./app/assets/styles/**/*', function() {
    gulp.start('cssInject');
  })

  // 监听 js 文件
  watch('./app/assets/scripts/**/*.js', function() {
    gulp.start('scriptsRefresh');
  })

})

gulp.task('cssInject', ['style'], function() {
  return gulp.src('./app/temp/styles/styles.css')
    .pipe(browserSync.stream());
})

gulp.task('scriptsRefresh', ['scripts'], function() {
  browserSync.reload();
})